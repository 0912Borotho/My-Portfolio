// Mobile menu
const menu=$('#menu'),links=$('#links');
menu.onclick=()=>{const o=links.classList.toggle('open');menu.textContent=o?'×':'☰';menu.setAttribute('aria-expanded',o)};
links.querySelectorAll('a').forEach(a=>a.onclick=()=>{links.classList.remove('open');menu.textContent='☰'});

// Scroll progress, nav shadow, active link, timeline fill
const secs=[...links.querySelectorAll('a')].map(a=>({a,s:$(a.getAttribute('href'))})).filter(x=>x.s);
const tl=$('#tl');
function onScroll(){
  const h=document.documentElement,max=h.scrollHeight-h.clientHeight;
  $('#progress').style.transform='scaleX('+(max>0?h.scrollTop/max:0)+')';
  $('#nav').classList.toggle('scrolled',h.scrollTop>20);
  const y=h.scrollTop+140;let cur=null;
  secs.forEach(x=>{if(x.s.offsetTop<=y)cur=x});
  secs.forEach(x=>x.a.classList.toggle('on',x===cur));
  const r=tl.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.7-r.top)/r.height));
  tl.style.setProperty('--fill',(p*100)+'%');
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
