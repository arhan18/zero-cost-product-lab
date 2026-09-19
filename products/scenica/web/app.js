// Scenica Round 1 Interaction Revision — deterministic mocked demos. No AI, no backend, no WebGL.
(function(){
"use strict";
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var coarse=window.matchMedia('(pointer: coarse)').matches;

/* 1. Persistent header: always available, compacts on scroll */
var header=document.getElementById('siteHeader'),lastY=0;
var sceneOn=true,scrollCam=0;
function onScroll(){
  var y=window.scrollY||0;
  header.classList.toggle('solid',y>48);
  header.classList.toggle('compact',y>300);
  lastY=y;
  if(!reduce&&sceneOn){scrollCam=Math.min(1,y/800);}
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

var btn=document.getElementById('menuBtn'),menu=document.getElementById('mobileMenu');
if(btn&&menu){btn.addEventListener('click',function(){
  var open=menu.hasAttribute('hidden');
  if(open){menu.removeAttribute('hidden');btn.setAttribute('aria-expanded','true');}
  else{menu.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');}
});menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');}});}

/* 2. SIGNAL scene: lightweight canvas dust + amber glow + DOM parallax */
var scene=document.getElementById('signalScene'),canvas=document.getElementById('signalCanvas'),
    orb=document.getElementById('signalOrb'),readout=document.getElementById('signalReadout'),
    tip=document.getElementById('miniTip'),mx=0.5,my=0.5,lightShift=0,depthBoost=0;
var ctx=canvas?canvas.getContext('2d'):null,parts=[],W=0,H=0,DPR=1;
function sizeCanvas(){
  if(!canvas||!scene)return;
  var r=scene.getBoundingClientRect();
  DPR=Math.min(window.devicePixelRatio||1,1.5);
  W=Math.max(50,r.width);H=Math.max(50,r.height);
  canvas.width=W*DPR;canvas.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);
}
function seedParts(){
  parts=[];var n=(window.innerWidth<640)?18:60;
  for(var i=0;i<n;i++)parts.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.8,s:.0004+Math.random()*.0012,o:.2+Math.random()*.5});
  if(readout)readout.textContent='CAM 0.0 · LIGHT 0.5 · DUST '+n;
}
function drawScene(){
  if(!ctx||!sceneOn||reduce){return;}
  ctx.clearRect(0,0,W,H);
  var gx=(mx*W),gy=(my*H*0.7);
  var g=ctx.createRadialGradient(gx,gy,0,gx,gy,Math.max(W,H)*.5);
  g.addColorStop(0,'rgba(255,178,36,'+(0.20+lightShift*0.12-scrollCam*0.05+(window.__promptEnergy||0)*0.10)+')');
  g.addColorStop(1,'rgba(255,178,36,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#FFE1A8';
  for(var i=0;i<parts.length;i++){var p=parts[i];
    p.y-=p.s;if(p.y<0)p.y=1;
    var px=(p.x*W)+(mx-0.5)*20*(1+p.r),py=p.y*H-scrollCam*24;
    ctx.globalAlpha=p.o;ctx.beginPath();ctx.arc(px,py,p.r,0,7);ctx.fill();
  }
  ctx.globalAlpha=1;
}
var rafOn=false;
function loop(){drawScene();if(sceneOn&&!reduce)requestAnimationFrame(loop);else rafOn=false;}
function kick(){if(!rafOn&&sceneOn&&!reduce){rafOn=true;requestAnimationFrame(loop);}}
sceneOn=true;
if(scene&&canvas){
  sizeCanvas();seedParts();
  if(reduce){drawScene();}
  else{kick();}
  window.addEventListener('resize',function(){sizeCanvas();seedParts();});
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){sceneOn=es[0].isIntersecting;if(sceneOn)kick();},{threshold:0.05}).observe(scene);
  }
  if(!reduce&&!coarse){
    scene.addEventListener('pointermove',function(e){
      var r=scene.getBoundingClientRect();
      mx=(e.clientX-r.left)/r.width;my=(e.clientY-r.top)/r.height;
      scene.querySelectorAll('[data-depth]').forEach(function(el){
        var d=parseFloat(el.dataset.depth)*(1+depthBoost);
        el.style.transform='translate3d('+((mx-0.5)*d*300)+'px,'+((my-0.5)*d*200-scrollCam*30)+'px,0)';
      });
      var mini=document.getElementById('miniSite');
      if(mini)mini.style.transform='rotateY('+((mx-0.5)*6)+'deg) rotateX('+((0.5-my)*4)+'deg)';
      if(readout)readout.textContent='CAM '+scrollCam.toFixed(1)+' · LIGHT '+(0.5+lightShift).toFixed(1)+' · DUST '+parts.length;
      kick();
    });
  }
  scene.querySelectorAll('[data-hot]').forEach(function(h){
    h.addEventListener('click',function(){
      var k=h.dataset.hot;
      if(k==='light'){lightShift=(lightShift+0.25)%1;if(tip)tip.textContent='SIGNAL WARMED — ARCHITECTURE REVEALED';}
      if(k==='depth'){depthBoost=(depthBoost+0.5)%1.5;if(tip)tip.textContent='DEPTH PUSHED — LAYERS SEPARATE';}
      if(k==='cta'&&tip){tip.textContent='THIS IS WHAT SCENICA BUILDS — CONTINUE ↓';}
      kick();
    });
  });
}

/* === 3. shared miniature-site engine (presets + showcase + pipeline artifact) === */
var THEME={
  velvet:{bg:'#171014',ink:'#F2E4D8',acc:'#C98A5A'},
  blueprint:{bg:'#0e1620',ink:'#D7E6F5',acc:'#6EE7C8'},
  vitrine:{bg:'#FFFFFF',ink:'#111111',acc:'#111111'},
  monograph:{bg:'#F4EFE6',ink:'#1A1712',acc:'#8a6a1f'},
  concrete:{bg:'#1c1c1e',ink:'#EDEDEA',acc:'#FFB224'},
  signal:{bg:'#0e0b06',ink:'#FFF3D6',acc:'#FFB224'},
  atelier:{bg:'#241d14',ink:'#F5EFE3',acc:'#E8B04B'},
  nocturne:{bg:'#14110c',ink:'#F4EFE6',acc:'#FFB224'}
};
function themeShell(host,t){
  var shell=host.querySelector('.ms-shell');
  if(!shell)return;
  shell.style.setProperty('--ms-bg',t.bg);
  shell.style.setProperty('--ms-ink',t.ink);
  shell.style.setProperty('--ms-acc',t.acc);
}
function minisiteHTML(cfg){
  var tabs=cfg.nav.map(function(n,i){return '<button class="ms-tab'+(i?'':' is-on')+'" data-v="'+i+'">'+n+'</button>';}).join('');
  var rows='';for(var i=0;i<cfg.rows;i++)rows+='<span></span>';
  var panels=cfg.panels.map(function(p,i){return '<div class="ms-panel mono" data-v="'+i+'"'+(i?' hidden':'')+'><span>'+p[0]+'</span><span>'+p[1]+'</span></div>';}).join('');
  return '<div class="ms-shell" data-type="'+cfg.type+'" data-align="'+cfg.align+'" data-upper="'+(cfg.upper?1:0)+'" data-nav="'+cfg.navS+'">'
    +'<div class="ms-bar mono"><span class="ms-brand">'+cfg.brand+'</span>'
    +'<nav class="ms-nav" aria-label="'+cfg.aria+'">'+tabs+'</nav>'
    +'<button class="ms-cta" aria-pressed="false">'+cfg.cta+'</button></div>'
    +'<div class="ms-hero"><p class="ms-kicker mono">'+cfg.kicker+'</p>'
    +'<p class="ms-title">'+cfg.title.split('\n').join('<br>')+'</p>'
    +'<p class="ms-sub">'+cfg.sub+'</p>'
    +'<div class="ms-blocks">'+rows+'</div></div>'
    +'<div class="ms-panels">'+panels+'</div>'
    +'<p class="ms-foot mono">'+cfg.foot+'</p>'
    +'</div>';
}
function mountMinisite(host,cfg){
  host.innerHTML=minisiteHTML(cfg);
  themeShell(host,THEME[cfg.world]||THEME.nocturne);
  var tabs=Array.prototype.slice.call(host.querySelectorAll('.ms-tab'));
  var panels=Array.prototype.slice.call(host.querySelectorAll('.ms-panel'));
  tabs.forEach(function(tab){tab.addEventListener('click',function(){
    tabs.forEach(function(x){x.classList.toggle('is-on',x===tab);});
    panels.forEach(function(p){p.hidden=p.dataset.v!==tab.dataset.v;});
    if(cfg.onNav)cfg.onNav(Number(tab.dataset.v));
  });});
  var cta=host.querySelector('.ms-cta');
  if(cta)cta.addEventListener('click',function(){
    var on=cta.getAttribute('aria-pressed')!=='true';
    cta.setAttribute('aria-pressed',on?'true':'false');
    cta.classList.toggle('is-on',on);
    cta.textContent=on?cfg.ctaOn:cfg.cta;
    if(cfg.onCta)cfg.onCta(on);
  });
}

/* === 4. evolving pipeline: pinned, scroll-controlled, one site === */
var PROMPT='A cinematic architecture portfolio inspired by brutalist concrete and warm evening light.';
var STAGE_NAMES=['Pick a preset','Describe','Generate','Animate','Build','Deploy'];
var stageMeta=['SYSTEM: NOCTURNE · TOKENS LOCKED','BRIEF 42 WORDS · STRUCTURED','KEYFRAME 1 · AVIF STILL','MEDIUM: CSS · DRIFT 6S','SITE 1.9MB · LCP 2.1S','LIVE · ROLLBACK READY'];
var B=[0,.165,.33,.495,.66,.825,1];
var stageBtns=Array.prototype.slice.call(document.querySelectorAll('.stage-btns button'));
var stageItems=Array.prototype.slice.call(document.querySelectorAll('.evolve-list .stage'));
var evStage=document.getElementById('evolveStage'),urlEl=document.getElementById('evolveUrl'),
    metaEl=document.getElementById('evolveMeta'),counter=document.getElementById('pipeCounter'),
    liveBadge=document.getElementById('evLiveBadge'),scrub=document.getElementById('pipeScrub');

function buildPipeline(){
  if(!evStage)return;
  evStage.innerHTML=
   '<div class="ev-layer ev-wire">'
    +'<span class="mono ev-statusline" id="evStatus"></span>'
    +'<nav class="ev-nav" aria-label="Preview navigation">'
    +'<button class="ev-tab is-on" data-v="0">Works</button>'
    +'<button class="ev-tab" data-v="1">Studio</button>'
    +'<button class="ev-tab" data-v="2">Visit</button></nav>'
    +'<div class="ev-hero" id="evHero">'
    +'<p class="mono ev-kicker" id="evKicker">ATELIER NORR — ARCHITECTURE</p>'
    +'<p class="serif ev-h1" id="evH1">Light you<br>can touch.</p></div>'
    +'<div class="ev-blocks" id="evBlocks"><span></span><span></span><span></span></div>'
    +'<p class="mono ev-meta" id="evMetaLine">GRID · RHYTHM · AMBER 1 — A PREVIEW, NOT AN IMAGE</p>'
    +'<div class="ev-cta-row" id="evCtaRow">'
    +'<button class="mini-chip" id="evMotion" aria-pressed="true">motion: on</button>'
    +'<a class="mini-cta" href="pricing.html">Choose a plan to ship →</a></div>'
   +'</div>'
   +'<div class="ev-layer ev-brief"><p class="mono">STRUCTURED BRIEF — TYPED LIVE</p><span class="ev-prompt mono" id="evType"></span></div>'
   +'<div class="ev-layer ev-key ev-drift" id="evDrift"><p class="serif ev-keyline">Beyond<br>Boundaries</p><span class="mono">KEYFRAME 01 · PALETTE + TYPE FROZEN</span></div>'
   +'<div class="ev-layer ev-build">'
    +'<section class="ev-sec" data-v="0"><h4 class="mono">WORKS — 12 PROJECTS</h4><span>VOGUE HOUSE · OSLO 2026</span><span>MONOLITH GALLERY · 2025</span><span>NORR PAVILION · 2024</span></section>'
    +'<section class="ev-sec" data-v="1" hidden><h4 class="mono">STUDIO</h4><span>3 PRACTITIONERS · ENKELVEN 20</span><button class="mini-chip" id="evTour">Book a tour →</button></section>'
    +'<section class="ev-sec" data-v="2" hidden><h4 class="mono">VISIT</h4><span>GALLERY HOURS — THU–SUN</span><span>DIRECTIONS · ENKELVEN 20, OSLO</span></section>'
   +'</div>'
   +'<div class="ev-layer ev-live"><p class="mono ev-url">atelier-norr.scenica.site ● LIVE</p><span class="mono">index.html · tokens.css · frames/ · meta.json</span><span class="mono">CUSTOM DOMAIN READY · ROLLBACK v12</span></div>'
   +'<div class="ev-scrim" aria-hidden="true"></div>';
  var tabs=Array.prototype.slice.call(evStage.querySelectorAll('.ev-tab'));
  var secs=Array.prototype.slice.call(evStage.querySelectorAll('.ev-sec'));
  tabs.forEach(function(tab){tab.addEventListener('click',function(){
    if(tab.getAttribute('aria-disabled')==='true')return;
    tabs.forEach(function(x){x.classList.toggle('is-on',x===tab);});
    secs.forEach(function(s){s.hidden=s.dataset.v!==tab.dataset.v;});
  });});
  var tour=document.getElementById('evTour');
  if(tour)tour.addEventListener('click',function(){
    var on=tour.getAttribute('aria-pressed')!=='true';
    tour.setAttribute('aria-pressed',on?'true':'false');
    tour.textContent=on?'✓ Tour requested':'Book a tour →';
  });
  var mv=document.getElementById('evMotion');
  if(mv)mv.addEventListener('click',function(){
    var dr=document.getElementById('evDrift');if(!dr)return;
    var off=dr.classList.toggle('ev-frozen');
    mv.textContent=off?'motion: off':'motion: on';
    mv.setAttribute('aria-pressed',off?'false':'true');
  });
}
function stageAt(p){
  for(var i=0;i<B.length-1;i++){if(p<B[i+1])return i;}
  return 5;
}
function smooth(a,b,t){return Math.max(0,Math.min(1,(t-a)/(b-a)));}
function updateUI(stage,p){
  stageBtns.forEach(function(b,j){b.setAttribute('aria-selected',j===stage?'true':'false');});
  stageItems.forEach(function(s,j){s.classList.toggle('is-active',j===stage);});
  if(counter)counter.textContent='0'+(stage+1)+' / 06';
  if(urlEl)urlEl.textContent='atelier-norr.scenica.site — STAGE 0'+(stage+1);
  if(metaEl)metaEl.textContent=stageMeta[stage];
  if(liveBadge)liveBadge.hidden=stage!==5;
  if(scrub)scrub.value=String(Math.round(p*100));
  var st=document.getElementById('evStatus');
  if(st)st.textContent='0'+(stage+1)+' · '+STAGE_NAMES[stage].toUpperCase()+' — '+(stage===5?'URL LIVE':'SAME ARTIFACT');
  var t=document.getElementById('evType');
  if(t)t.textContent=PROMPT.slice(0,Math.round(PROMPT.length*smooth(.175,.27,p)));
  var tabs=evStage?Array.prototype.slice.call(evStage.querySelectorAll('.ev-tab')):[];
  var enabled=stage>=4;
  tabs.forEach(function(x){
    if(enabled){x.removeAttribute('aria-disabled');x.style.opacity='';}
    else{x.setAttribute('aria-disabled','true');x.style.opacity='.35';}
  });
}
function initStatic(){
  buildPipeline();
  var cur=0;
  function vis(sel,on){var el=evStage.querySelector(sel);if(el)el.style.opacity=on?1:0;}
  function show(i){
    cur=i;
    updateUI(i,B[i]+(B[i+1]-B[i])/2);
    vis('#evCtaRow',i>=3);vis('.ev-brief',i===1);vis('.ev-key',i===2||i===3);vis('.ev-live',i===5);vis('.ev-build',i>=4);
    var b=document.getElementById('evType');
    if(b)b.textContent=(i===1)?PROMPT:'';
    var bl=document.getElementById('evBlocks'),ml=document.getElementById('evMetaLine');
    if(bl)bl.style.opacity=(i===2||i===3)?.12:1;
    if(ml)ml.style.opacity=(i===2||i===3)?0:1;
    if(scrub)scrub.value=Math.round((B[i]+(B[i+1]-B[i])/2)*100);
  }
  var play=document.getElementById('pipePlay'),playing=null;
  stageBtns.forEach(function(b){b.addEventListener('click',function(){if(playing){clearInterval(playing);playing=null;play.textContent='▶ play';}show(Number(b.dataset.stage));});});
  stageItems.forEach(function(s){s.style.cursor='pointer';s.addEventListener('click',function(){if(playing){clearInterval(playing);playing=null;play.textContent='▶ play';}show(Number(s.dataset.stage));});});
  if(scrub)scrub.addEventListener('input',function(){
    var prog=Number(scrub.value)/100,stage=stageAt(prog);
    if(playing){clearInterval(playing);playing=null;if(play)play.textContent='▶ play';}
    show(stage);
  });
  if(play)play.addEventListener('click',function(){
    if(playing){clearInterval(playing);playing=null;play.textContent='▶ play';return;}
    play.textContent='⏸ pause';
    var s=cur;
    playing=setInterval(function(){s++;if(s>5){clearInterval(playing);playing=null;play.textContent='▶ play';return;}show(s);},900);
  });
  show(0);
}
function initPinned(){
  if(!window.gsap||!window.ScrollTrigger||!evStage||window.matchMedia('(prefers-reduced-motion: reduce)').matches){initStatic();return;}
  gsap.registerPlugin(ScrollTrigger);
  buildPipeline();
  var pinspace=document.getElementById('evoPinspace'),sceneEl=document.getElementById('evoScene');
  if(!pinspace||!sceneEl){initStatic();return;}
  var evBrief=evStage.querySelector('.ev-brief'),evKey=evStage.querySelector('.ev-key'),
      evCta=document.getElementById('evCtaRow'),evBuild=evStage.querySelector('.ev-build'),
      evLive=evStage.querySelector('.ev-live'),evBlocks=document.getElementById('evBlocks'),
      evMeta=document.getElementById('evMetaLine');
  gsap.set([evBrief,evKey,evCta,evBuild,evLive],{opacity:0});
  var tl=gsap.timeline({
    scrollTrigger:{
      trigger:pinspace,start:'top top',end:'bottom bottom',pin:sceneEl,
      pinSpacing:false,scrub:1,anticipatePin:1,
      onUpdate:function(self){updateUI(stageAt(self.progress),self.progress);}
    }
  });
  tl.to(evBrief,{opacity:1,duration:.05,ease:'none'},.175)
    .to(evBrief,{opacity:0,duration:.06,ease:'none'},.27)
    .to(evKey,{opacity:1,duration:.06,ease:'none'},.34)
    .to(evBlocks,{opacity:.12,duration:.04,ease:'none'},.37)
    .to(evMeta,{opacity:0,duration:.04,ease:'none'},.38)
    .to(evCta,{opacity:1,duration:.05,ease:'none'},.50)
    .to(evKey,{opacity:0,duration:.06,ease:'none'},.645)
    .to(evBlocks,{opacity:1,duration:.05,ease:'none'},.67)
    .to(evMeta,{opacity:1,duration:.05,ease:'none'},.67)
    .to(evBuild,{opacity:1,duration:.05,ease:'none'},.685)
    .fromTo('.evolve-stage .ev-sec',{y:14,opacity:0},{y:0,opacity:1,duration:.05,stagger:.02,ease:'none'},.70)
    .to(evLive,{opacity:1,duration:.05,ease:'none'},.835);
  var st=tl.scrollTrigger;
  document.documentElement.style.scrollBehavior='auto';
  var play=document.getElementById('pipePlay'),run=null;
  function seek(i){
    if(run){gsap.killTweensOf(window);run=null;}
    var y0=st.start+(st.end-st.start)*((B[i]+B[i+1])/2);
    gsap.to(window,{scrollTo:{y:y0,autoKill:true},duration:1.05,ease:'power2.inOut'});
  }
  stageBtns.forEach(function(b){b.addEventListener('click',function(){seek(Number(b.dataset.stage));});});
  stageItems.forEach(function(s){s.style.cursor='pointer';s.addEventListener('click',function(){seek(Number(s.dataset.stage));});});
  if(scrub)scrub.addEventListener('input',function(){
    if(run){clearInterval(run);run=null;if(play)play.textContent='▶ play';}
    st.scroll(st.start+(st.end-st.start)*(Number(scrub.value)/100));
  });
  if(play)play.addEventListener('click',function(){
    if(run){clearInterval(run);run=null;play.textContent='▶ play';return;}
    play.textContent='⏸ pause';
    var i=0;
    run=setInterval(function(){i++;if(i>5){clearInterval(run);run=null;play.textContent='▶ play';return;}seek(i);},1500);
  });
  updateUI(0,0);
}
initPinned();

(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var anchors=document.querySelectorAll('a[href^="#"]');
  for(var i=0;i<anchors.length;i++)(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('href');
      if(!id||id.length<2)return;
      var t=document.querySelector(id);
      if(!t)return;
      e.preventDefault();
      if(window.gsap&&window.ScrollToPlugin&&!reduce){
        window.gsap.to(window,{scrollTo:{y:t.offsetTop-8,autoKill:true},duration:.9,ease:'power2.inOut'});
      }else{
        window.scrollTo(0,t.offsetTop-8);
      }
    });
  })(anchors[i]);
})();

/* pipeline preview hover response (compact parallax, non-coarse, non-reduced) */
(function(){
  var st=document.getElementById('evolveStage');
  if(!st||reduce||coarse)return;
  var wire=st.querySelector('.ev-wire'),key=st.querySelector('.ev-key');
  st.addEventListener('pointermove',function(e){
    var r=st.getBoundingClientRect();
    var nx=(e.clientX-r.left)/r.width-0.5,ny=(e.clientY-r.top)/r.height-0.5;
    if(wire)wire.style.transform='translate3d('+(nx*6)+'px,'+(ny*4)+'px,0)';
    if(key)key.style.transform='translate3d('+(nx*-3)+'px,'+(ny*-2)+'px,0)';
  });
  st.addEventListener('pointerleave',function(){
    if(wire)wire.style.transform='';
    if(key)key.style.transform='';
  });
})();

/* === 5. TRY A WORLD — experience-level presets on one shared engine === */
var WORLDS={
  monograph:{bg:'#F4EFE6',ink:'#1A1712',acc:'#8a6a1f',type:'sans',align:'left',upper:0,navS:'underline',rows:3,motion:0,meta:'GROTESK · PAPER · HAIRLINES · STILL'},
  velvet:{bg:'#171014',ink:'#F2E4D8',acc:'#C98A5A',type:'serif',align:'center',upper:0,navS:'pill',rows:2,motion:1,meta:'SERIF · PLUSH · LOW LIGHT · SLOW'},
  concrete:{bg:'#1c1c1e',ink:'#EDEDEA',acc:'#FFB224',type:'sans',align:'left',upper:1,navS:'bare',rows:3,motion:0,meta:'BRUTALIST · RAW EDGES · GRID · STATIC'},
  signal:{bg:'#0e0b06',ink:'#FFF3D6',acc:'#FFB224',type:'serif',align:'left',upper:0,navS:'underline',rows:3,motion:1,meta:'AMBER 2 · EXPRESSIVE · DRIFT 3S'},
  vitrine:{bg:'#FFFFFF',ink:'#111111',acc:'#181818',type:'sans',align:'center',upper:0,navS:'ghost',rows:1,motion:0,meta:'MINIMAL · PRODUCT · AIR · STILL'},
  atelier:{bg:'#241d14',ink:'#F5EFE3',acc:'#E8B04B',type:'serif',align:'left',upper:0,navS:'underline',rows:3,motion:1,meta:'ART-DIRECTED · WARM · GRAIN'},
  blueprint:{bg:'#0e1620',ink:'#D7E6F5',acc:'#6EE7C8',type:'mono',align:'left',upper:1,navS:'bare',rows:4,motion:0,meta:'TECHNICAL · PRECISE · MONO LEAD'},
  nocturne:{bg:'#14110c',ink:'#F4EFE6',acc:'#FFB224',type:'serif',align:'center',upper:0,navS:'underline',rows:3,motion:1,meta:'SERIF · WARM VOID · AMBER 1 · DRIFT 6S'}
};
var wpHost=document.getElementById('worldPreview'),wpName=document.getElementById('worldName'),
    motionOff=reduce;
function wpCfg(w){
  var m=WORLDS[w];
  return {world:w,brand:'ATELIER NORR',aria:'Preset preview navigation',nav:['Works','Studio','Visit'],
    cta:'Book visit',ctaOn:'✓ Request sent',
    kicker:'ARCHITECTURE — '+w.toUpperCase(),
    title:'Concrete that\nholds light.',
    sub:'An architecture portfolio re-graded to this world. Switch the nav to browse inside.',
    rows:m.rows,
    panels:[['12 PROJECTS · SERIES 003','VOGUE HOUSE · OSLO 2026'],['THREE PRACTITIONERS','ENKELVEN 20 · OSLO'],['OPEN THU–SUN','BOOK A ROOM VISIT']],
    foot:m.meta,
    type:m.type,align:m.align,upper:m.upper,navS:m.navS};
}
function renderWorld(w){
  if(!wpHost||!WORLDS[w])return;
  var m=WORLDS[w];
  wpHost.dataset.type=m.type;wpHost.dataset.align=m.align;wpHost.dataset.upper=m.upper?1:0;wpHost.dataset.nav=m.navS;
  var cfg=wpCfg(w);
  cfg.onCta=function(){};
  mountMinisite(wpHost,cfg);
  var foot='<span id="worldMeta">'+m.meta+'</span>';
  if(m.motion){foot+='<span><button class="mini-chip" id="worldMotion" aria-pressed="'+(!motionOff).toString()+'">motion: '+(motionOff?'off':'on')+'</button></span>';}
  wpHost.insertAdjacentHTML('beforeend','<div class="wp-foot mono">'+foot+'</div>');
  wpHost.classList.toggle('no-motion',motionOff||!m.motion);
  var wm=document.getElementById('worldMotion');
  if(wm)wm.addEventListener('click',function(){
    motionOff=!motionOff;
    wpHost.classList.toggle('no-motion',motionOff);
    wm.setAttribute('aria-pressed',(!motionOff).toString());
    wm.textContent='motion: '+(motionOff?'off':'on');
  });
  var wBtns=Array.prototype.slice.call(document.querySelectorAll('.world-btns button'));
  wBtns.forEach(function(b){b.setAttribute('aria-selected',b.dataset.world===w?'true':'false');});
  if(wpName)wpName.textContent='ACTIVE: '+w.toUpperCase();
  window.__scenicaTheme=w;
}
var wBtns=Array.prototype.slice.call(document.querySelectorAll('.world-btns button'));
wBtns.forEach(function(b){b.addEventListener('click',function(){renderWorld(b.dataset.world);});});
renderWorld('nocturne');

/* === 6. SHOWCASE — interactive miniature sites, one engine === */
var SHOWS={
  velvet:{world:'velvet',brand:'MAISON LUEUR',aria:'Demo site navigation',nav:['Collection','Atelier','Visit'],
    cta:'Book a tasting',ctaOn:'✓ Tasting requested',kicker:'CANDLES · POURED SLOW',
    title:'Light you\ncan touch.',sub:'Scented candles, one flame per room.',
    rows:2,panels:[['SOIR 01 · NOIR','SABLE · CEDRE · AMBRE'],['THE ATELIER · 12 NOTES','HAND-POURED · BEESWAX'],['SHOWROOM THU–SUN','SAMPLING BY APPOINTMENT']],
    foot:'HOVER · SWITCH NAV · THE CTA REACTS · SCROLL INSIDE'},
  blueprint:{world:'blueprint',brand:'STUDIO GRID',aria:'Demo site navigation',nav:['Index','System','Contact'],
    cta:'Start a project',ctaOn:'✓ Brief requested',kicker:'ENGINEERING · DRAWING',
    title:'Drawn to\nthe grid.',sub:'Structures measured twice, drawn once.',
    rows:3,panels:[['INDEX · A–Z','PROJECT LIST · 24 ENTRIES'],['SYSTEM · SPEC','TOLERANCES ±0.5MM'],['CONTACT','MAIL@STUDIOGRID.SITE']],
    foot:'SWITCH THE NAV · HOVER THE GRID · THE CTA REACTS'},
  vitrine:{world:'vitrine',brand:'OBJET 01',aria:'Demo site navigation',nav:['Object','Detail','Acquire'],
    cta:'Acquire',ctaOn:'✓ Reserved',kicker:'EDITION OF 40',
    title:'One object.\nPerfect light.',sub:'A single piece, staged in controlled light.',
    rows:1,panels:[['OBJET 01 · SERIES B','CAST GLASS · 2026'],['DETAIL · SPEC','H 220 · Ø 90 · 1.2KG'],['ACQUIRE · EDITION','40 PIECES · NUMBERED']],
    foot:'ONLY ONE OBJECT · STILL BY DESIGN · THE CTA REACTS'}
};
['showVelvet','showBlueprint','showVitrine'].forEach(function(id){
  var host=document.getElementById(id);
  if(host)mountMinisite(host,SHOWS[host.parentElement.dataset.site||id.replace('show','').toLowerCase()]);
});

/* 7. reveals (progressive enhancement) */
document.querySelectorAll('.hero-copy > *, .sec-head, .ba-after, .builder-mock, .world-preview, .evolve-frame').forEach(function(el){el.classList.add('reveal');});
if(!reduce&&window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach(function(el){
    gsap.from(el,{opacity:0,y:16,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
  });
  gsap.to('.bridge-glow',{opacity:.4,ease:'none',scrollTrigger:{trigger:'.world-bridge',start:'top bottom',end:'bottom top',scrub:true}});
}
})();

/* === funnel: idea → signup → plan → builder (mocked, deterministic) === */
(function(){
"use strict";
var form=document.getElementById('promptForm'),input=document.getElementById('promptInput'),
    funnel=document.getElementById('funnel'),kicker=document.getElementById('funnelKicker'),
    ideaEl=document.getElementById('funnelIdea'),body=document.getElementById('funnelBody');
if(!form)return;
var S={idea:localStorage.getItem('scenica_idea')||'',plan:localStorage.getItem('scenica_plan')||'trial'};
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function show(idea){funnel.hidden=false;ideaEl.textContent='\u201C'+idea+'\u201D';}
function stepSignup(){
  kicker.textContent='YOUR IDEA IS READY — CREATE YOUR WORKSPACE';
  body.innerHTML='<label class="sr" for="fEmail">Work email</label><input type="email" id="fEmail" placeholder="you@studio.com"><button class="cta-btn" id="fGo">Create workspace →</button><p class="funnel-note">FREE TRIAL · 120 CREDITS · WATERMARKED PREVIEW · NO CARD · MOCKED — NO ACCOUNTS YET</p><p class="funnel-error" id="fErr" hidden></p>';
  document.getElementById('fGo').addEventListener('click',function(){
    var v=document.getElementById('fEmail').value.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){var e=document.getElementById('fErr');e.textContent='Enter a valid email to continue (mocked — nothing is sent).';e.hidden=false;return;}
    stepPlan();
  });
}
function stepPlan(){
  kicker.textContent='CHOOSE HOW MUCH YOU WANT TO BUILD';
  var plans=[['trial','Trial','Free · 120 credits · 1 watermarked preview'],['creator','Creator',' $29/mo · 3,000 credits · ~8 sites'],['studio','Studio','$59/mo · 8,000 credits · ~20 sites']];
  body.innerHTML='<div class="funnel-plans">'+plans.map(function(p){return '<button class="funnel-plan" data-p="'+p[0]+'" aria-pressed="'+(S.plan===p[0])+'"><b>'+p[1]+'</b><span class="mono">'+p[2]+'</span></button>';}).join('')+'</div><button class="cta-btn" id="fPlan">Continue →</button><p class="funnel-note">NO CHARGE TODAY · SWITCH OR CANCEL ANYTIME · <a href="pricing.html" style="color:var(--sc-signal)">SEE FULL PRICING</a></p>';
  body.querySelectorAll('.funnel-plan').forEach(function(b){b.addEventListener('click',function(){S.plan=b.dataset.p;localStorage.setItem('scenica_plan',S.plan);body.querySelectorAll('.funnel-plan').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});});});
  document.getElementById('fPlan').addEventListener('click',stepBuilder);
}
function stepBuilder(){
  kicker.textContent='YOUR BUILDER PREVIEW — MOCKED';
  var name=S.plan==='studio'?'Studio':(S.plan==='creator'?'Creator':'Trial');
  body.innerHTML='<p class="funnel-note">WORKSPACE READY · PLAN: '+name.toUpperCase()+' · BRIEF LOADED</p><div class="ev-landing"><span class="serif" style="font-size:26px">Atelier Norr — from your words</span><span>BRIEF: '+esc(S.idea).slice(0,90)+'…</span><span>KEYFRAME QUEUED · TOKENS: NOCTURNE</span></div><a class="cta-btn" href="#pipeline">Open the live demo ↓</a>';
}
form.addEventListener('submit',function(e){
  e.preventDefault();
  var v=input.value.trim();
  if(v.length<8){input.focus();input.setAttribute('aria-invalid','true');return;}
  S.idea=v;localStorage.setItem('scenica_idea',v);
  show(v);stepSignup();
  document.getElementById('fEmail').focus();
});
document.querySelectorAll('.prompt-ex').forEach(function(b){b.addEventListener('click',function(){input.value=b.dataset.ex;input.dispatchEvent(new Event('input'));input.focus();});});
input.addEventListener('input',function(){window.__promptEnergy=Math.min(1,input.value.length/80);});
if(S.idea){input.value=S.idea;}
})();

/* === cinematic media: procedural 120-frame scroll scrub (demo frames) === */
(function(){
"use strict";
var cv=document.getElementById('mediaCanvas');if(!cv)return;
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var ctx=cv.getContext('2d'),prog=0.12,W=0,H=0,on=true;
var label=document.getElementById('mediaFrame'),scrub=document.getElementById('mediaScrub');
function size(){var r=cv.parentElement.getBoundingClientRect();var d=Math.min(devicePixelRatio||1,1.5);W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);draw();}
function draw(){
  var sky=ctx.createLinearGradient(0,0,0,H);
  sky.addColorStop(0,'rgb('+(20+prog*40|0)+','+(14+prog*20|0)+','+(10+prog*8|0)+')');
  sky.addColorStop(1,'#0C0B09');
  ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,178,36,'+(0.5+prog*0.4)+')';
  ctx.beginPath();ctx.arc(W*(0.3+prog*0.4),H*(0.5-prog*0.25),26+prog*20,0,7);ctx.fill();
  ctx.fillStyle='#060504';ctx.beginPath();ctx.moveTo(0,H);
  for(var x=0;x<=W;x+=8){ctx.lineTo(x,H*0.72- Math.sin(x*0.02+prog*9)*H*0.06 - prog*H*0.1 + (x/W)*H*0.08);}
  ctx.lineTo(W,H);ctx.fill();
  ctx.fillStyle='rgba(245,239,227,'+(0.12+prog*0.5)+')';
  ctx.font='12px monospace';ctx.fillText('SCENE DUSK · GRAIN 6%',16,H-16);
  if(label)label.textContent='FRAME '+String(1+Math.round(prog*119)).padStart(3,'0')+' / 120 · AVIF · '+Math.round(40+prog*40)+'KB';
}
function setP(p){prog=Math.max(0,Math.min(1,p));if(scrub)scrub.value=Math.round(prog*100);draw();}
if(scrub)scrub.addEventListener('input',function(){setP(scrub.value/100);});
if('IntersectionObserver' in window){new IntersectionObserver(function(es){on=es[0].isIntersecting;},{threshold:0.1}).observe(cv);}
if(window.ScrollTrigger&&window.gsap&&!reduce){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({trigger:'.media-stage',start:'top bottom',end:'bottom top',scrub:true,onUpdate:function(s){if(on)setP(0.08+s.progress*0.84);}});
}
window.addEventListener('resize',size);size();setP(0.12);
})();