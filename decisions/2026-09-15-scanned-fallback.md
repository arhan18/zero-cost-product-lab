# 2026-09-15 — Scanned-page OCR fallback: KEEP
- Change: `_is_scanned_page` (<50 text chars) + `_ocr_page_lines` (300 DPI RapidOCR -> standard line shape) in converter.py. Digital pages never enter branch.
- Evidence: golden.py PASS (100% text similarity); patched-code md5 == original-code md5 (332474...) on ICSE 15p -> digital byte-identical.
- Older baseline DOCX md5 differs (7e865...) -> pre-existing RapidOCR session variance (rads 10 vs 12 seen before any edit), not this change.
- Scanned test (rasterized ICSE pp.2-3): 0 paras -> 39 non-empty, 20/20 options, 7s. Known OCR noise: missing spaces, ₹->?, C1->Ci. No hallucination: conf<0.3 dropped.
- Reversal: if a digital page ever routes to OCR (watch: sparse pages <50 chars), raise floor or add image-coverage condition.
