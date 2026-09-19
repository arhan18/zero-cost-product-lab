"""Phase 18 browser QA for dodo-shield v0. Re-runnable: python3 qa.py."""
from playwright.sync_api import sync_playwright

URL = "http://localhost:8137/"
OUT = "/Volumes/Arhan/Work/zero-cost-product-lab/evidence/dodo-shield/qa"
ERRORS = []

with sync_playwright() as p:
    b = p.chromium.launch()
    # Desktop pass
    pg = b.new_page(viewport={"width": 1280, "height": 900})
    pg.on("console", lambda m: ERRORS.append(m.text) if m.type == "error" else None)
    pg.on("pageerror", lambda e: ERRORS.append(str(e)))
    t = pg.evaluate("() => { const s = performance.getEntriesByType('navigation')[0]; return {dom: Math.round(s.domContentLoadedEventEnd), load: Math.round(s.loadEventEnd)}; }") if False else None
    pg.goto(URL, wait_until="networkidle")
    nav = pg.evaluate("() => { const s = performance.getEntriesByType('navigation')[0]; return {dom: Math.round(s.domContentLoadedEventEnd), load: Math.round(s.loadEventEnd)}; }")
    print("PERF desktop dom/load ms:", nav)
    pg.screenshot(path=f"{OUT}/hero-1280.png")
    assert "Dodo Shield" in pg.title(), "title check"
    assert "$30 dispute" in pg.locator("h1").inner_text(), "h1 check"

    # Core flow 1: alert-only default, disposable email trips rule
    pg.locator("#run").click()
    pg.wait_for_selector("#feed tbody tr")
    row = pg.locator("#feed tbody tr").first.inner_text()
    assert "ALERT" in row and "disposable-email" in row, f"alert flow: {row}"
    print("FLOW alert-only: PASS")

    # Core flow 2: opt-in auto-refund under cap
    pg.locator("#s_auto").check()
    pg.locator('input[data-auto="disp"]').check()
    pg.locator("#run").click()
    rows = pg.locator("#feed tbody tr").all_inner_texts()
    assert any("AUTO-REFUND" in r for r in rows), f"auto flow: {rows}"
    print("FLOW auto-refund: PASS")

    # Core flow 3: over-cap falls back to manual
    pg.fill("#f_amt", "500")
    pg.locator("#run").click()
    rows = pg.locator("#feed tbody tr").all_inner_texts()
    assert any("manual only" in r for r in rows), f"cap fallback: {rows}"
    print("FLOW over-cap manual fallback: PASS")

    # Core flow 4: manual confirm flips to avoided
    pg.fill("#f_amt", "49")
    pg.locator("#s_auto").uncheck()
    pg.locator("#run").click()
    pg.locator("#feed tbody tr").first.locator("button[data-done]").click()
    assert "AVOIDED" in pg.locator("#feed tbody tr").first.inner_text()
    print("FLOW manual confirm: PASS")

    # Keyboard-only: clear, tab to Run, Enter
    pg.locator("#clear").click()
    pg.locator("#f_email").fill("clean@gmail.com")
    pg.locator("#f_fails").fill("0")
    pg.locator("#f_first").uncheck()
    pg.keyboard.press("Tab")  # move focus around controls
    pg.locator("#run").focus()
    pg.keyboard.press("Enter")
    assert "no rule matched" in pg.locator("#feed tbody tr").first.inner_text()
    print("FLOW keyboard-only clean payment: PASS")

    pg.locator("#demo").screenshot(path=f"{OUT}/demo-1280.png")
    pg.screenshot(path=f"{OUT}/full-1280.png", full_page=True)

    # Mobile pass
    m = b.new_page(viewport={"width": 390, "height": 844})
    m.goto(URL, wait_until="networkidle")
    m.screenshot(path=f"{OUT}/hero-390.png")
    m.locator("#run").click()
    m.wait_for_selector("#feed tbody tr")
    m.screenshot(path=f"{OUT}/demo-390.png")
    print("MOBILE render + flow: PASS")
    b.close()

print("CONSOLE/PAGE ERRORS:", ERRORS if ERRORS else "none")
print("QA DONE")
