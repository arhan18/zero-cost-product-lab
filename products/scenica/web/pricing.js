// Scenica pricing — deterministic estimator. No backend. Plan hypothesis from pricing.md.
(function(){
"use strict";
var annual=false,selected=localStorage.getItem('scenica_plan')||'trial';
var PRICES={trial:[0,0],creator:[29,23],studio:[59,47]};
var CREDITS={trial:120,creator:3000,studio:8000};
function $(id){return document.getElementById(id);}
function money(n){return '$'+n+'/mo';}
/* idea banner */
try{
  var q=new URLSearchParams(location.search).get('idea')||localStorage.getItem('scenica_idea')||'';
  if(q){$('ideaBanner').hidden=false;$('ideaQuote').textContent='\u201C'+q+'\u201D';
    var c=$('ctaIdea');if(c){c.hidden=false;c.textContent='PROJECT: '+q.slice(0,80);} }
}catch(e){}
/* header + menu */
var header=$('siteHeader');
window.addEventListener('scroll',function(){var y=scrollY||0;header.classList.toggle('solid',y>48);header.classList.toggle('compact',y>300);},{passive:true});
var btn=$('menuBtn'),menu=$('mobileMenu');
if(btn)btn.addEventListener('click',function(){var o=menu.hasAttribute('hidden');if(o){menu.removeAttribute('hidden');btn.setAttribute('aria-expanded','true');}else{menu.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');}});
/* billing toggle */
var bM=$('billM'),bA=$('billA');
function paintPrices(){
  document.querySelectorAll('.p-month').forEach(function(e){e.hidden=annual;});
  document.querySelectorAll('.p-annual').forEach(function(e){e.hidden=!annual;});
  bM.setAttribute('aria-pressed',String(!annual));bA.setAttribute('aria-pressed',String(annual));
  paintCalc();
}
bM.addEventListener('click',function(){annual=false;paintPrices();});
bA.addEventListener('click',function(){annual=true;paintPrices();});
/* plan select */
function select(p,scroll){
  selected=p;try{localStorage.setItem('scenica_plan',p);}catch(e){}
  document.querySelectorAll('.plan-card').forEach(function(c){c.classList.toggle('sel',c.dataset.plan===p);});
  var badge=$('planBadge');
  if(badge)badge.textContent=p.toUpperCase()+' · '+(CREDITS[p]>=1000?(CREDITS[p]/1000)+'K':CREDITS[p])+' CR';
  var note=$('planNote');
  if(note)note.innerHTML='SELECTED: '+p.toUpperCase()+' · '+money(PRICES[p][annual?1:0])+(annual?', BILLED ANNUALLY':'')+' · <a href="#calc" style="color:var(--sc-signal)">OR BUILD YOUR MONTH ↓</a>';
  paintCalc();
}
document.querySelectorAll('.plan-pick').forEach(function(b){b.addEventListener('click',function(){select(b.dataset.p);document.getElementById('calc').scrollIntoView({behavior:'smooth'});});});
/* calculator */
var sites=$('cSites'),sitesV=$('cSitesV'),expN=$('cExportN'),imgN=$('cImgN');
function val(){
  var s=Number(sites.value);
  var q=Number((document.querySelector('input[name=q]:checked')||{}).value||106);
  var m=Number((document.querySelector('input[name=m]:checked')||{}).value||0);
  var ex=$('cExport').checked?Number(expN.value||0)*10:0;
  var im=$('cImg').checked?Number(imgN.value||0)*4:0;
  return {use:s*(q+m)+ex+im,sites:s};
}
function recommend(use){
  if(use<=120)return 'trial';if(use<=3000)return 'creator';return 'studio';
}
function paintCalc(){
  if(!sites)return;
  sitesV.textContent=sites.value;
  var v=val(),rec=recommend(v.use),inc=CREDITS[rec],price=PRICES[rec][annual?1:0];
  var buildsLeft=rec==='trial'?'0':String(Math.max(0,Math.floor((inc-v.use)/106)));
  $('calcPlan').textContent=rec[0].toUpperCase()+rec.slice(1);
  $('calcWhy').textContent=rec==='studio'&&v.use>8000
    ? 'Covers 8,000 credits/mo — add a Sprint pack or talk Enterprise for the remaining ~'+(v.use-8000)+' cr.'
    : 'Covers ~'+v.use+' credits/mo with room for '+buildsLeft+' more cinematic builds.';
  $('calcUse').textContent=v.use+' cr';
  $('calcInc').textContent=inc+' cr';
  $('calcLeft').textContent=Math.max(0,inc-v.use)+' cr';
  $('calcPrice').textContent=money(price)+(annual?' · annual':'');
  var go=$('calcGo');go.textContent='Continue with '+rec[0].toUpperCase()+rec.slice(1)+' →';
  go.addEventListener('click',function(){select(rec);},{once:true});
}
['cSites','cExport','cImg','cExportN','cImgN'].forEach(function(id){var e=$(id);if(e)e.addEventListener('input',paintCalc);});
document.querySelectorAll('input[name=q],input[name=m]').forEach(function(e){e.addEventListener('change',paintCalc);});
document.querySelectorAll('.top-buy').forEach(function(b){b.addEventListener('click',function(){b.textContent='Added (mocked) ✓';setTimeout(function(){b.textContent='Buy '+b.dataset.t.split('·')[0].trim().toLowerCase()+' · '+b.dataset.t.split('·')[2].trim();},1600);});});
select(selected);paintPrices();
})();
