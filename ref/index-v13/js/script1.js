/* ===== ALL YOUR CONTENT IS HERE - swap links/text easily ===== */
/* replace picsum links with your own, e.g. 'images/video1.jpg' */
const P=(k,n)=>n.map((t,i)=>({t,img:`https://picsum.photos/seed/${k}${i}/440/950`}));
const DATA = {
  services: [ // each door = one category. c = glow colour, pts = list shown beside the door, items = images in the phone
    {n:'Videography', c:'#f0b44a', pts:['Wedding & event films','Reels and promo videos','Colour grading','Premiere Pro editing'],
     items:P('vid',['Wedding Film','Event Highlights','Promo Reel','Brand Story','Behind the Scenes','Short Film'])},
    {n:'Digital Marketing Creatives', c:'#3aa0ff', pts:['Instagram page handling','Post & story designs','Campaign creatives','Website marketing'],
     items:P('dm',['Instagram Feed','Story Series','Ad Creative','Festival Post','Product Launch','Carousel'])},
    {n:'Photography', c:'#22c55e', pts:['Portraits & weddings','Event albums','Product shoots','Lightroom retouching'],
     items:P('ph',['Portrait','Bridal','Event Album','Product','Street','Candid'])},
    {n:'Branding & Identity', c:'#ef4444', pts:['Logo design','Colour & typography','Brand kits','Print materials'],
     items:P('br',['Logo Suite','Brand Kit','Business Card','Packaging','Poster','Social Kit'])}],
  experience: [
    {t:'Photography & Video', d:'Events, weddings, portraits and promotional films.'},
    {t:'Social Media Management', d:'Instagram page handling, content publishing and growth.'},
    {t:'Digital Marketing', d:'Campaign creatives and website marketing for businesses.'}],
  tools: ['Photoshop','Lightroom','Premiere Pro','After Effects','Illustrator','Canva','CapCut'],
  journey: [
    {y:'Education', d:'Bachelor of Commerce (B.Com)'},
    {y:'Early career', d:'Graphic design and photo editing projects'},
    {y:'Growth', d:'Videography, event albums and social media content'},
    {y:'Today', d:'Freelance visual designer, photographer and video editor'}],
  testimonials: [
    {n:'Client Name', d:'"Creative, quick and professional. Our event album looked stunning."'},
    {n:'Business Owner', d:'"Our Instagram engagement grew after his content designs."'},
    {n:'Happy Customer', d:'"Loved the photos. Highly recommended!"'}],
  social: [{n:'Instagram', u:'https://instagram.com/'},{n:'LinkedIn', u:'https://linkedin.com/'},{n:'WhatsApp', u:'https://wa.me/'}]
};
const $ = s => document.querySelector(s), card = (t,d) => `<div class="card rv"><h3>${t}</h3><p>${d}</p></div>`;

/* render sections from DATA */
$('#doors').innerHTML = DATA.services.map(s=>`<div class="door rv" style="--c:${s.c}"><div class="arch"><div class="glow"></div><div class="leaf"></div></div>${s.n}</div>`).join('');
$('#doors').onclick = e => { const d=e.target.closest('.door'); if(d) openDoor([...d.parentNode.children].indexOf(d)); };
$('#exp').innerHTML = DATA.experience.map(e=>card(e.t,e.d)).join('');
$('#tools').innerHTML = DATA.tools.map(t=>`<span class="rv">${t}</span>`).join('');
$('#journey').innerHTML = DATA.journey.map(j=>`<div class="rv"><b>${j.y}</b><p>${j.d}</p></div>`).join('');
$('#testi').innerHTML = DATA.testimonials.map(t=>card(t.n,t.d)).join('');
$('#social').innerHTML = DATA.social.map(s=>`<a href="${s.u}" target="_blank">${s.n}</a>`).join('');

/* scroll reveal + doors open one by one */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add('in');
  if (e.target.classList.contains('door') && !e.target.previousElementSibling) setTimeout(()=>openDoor(0),700);
  io.unobserve(e.target);
}), {threshold:.25});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* preloader: spin, camera flash, reveal */
setTimeout(()=>$('#pre').classList.add('go'), 2200);
setTimeout(()=>{ $('#pre').classList.add('out'); document.body.classList.add('ready'); }, 3000);
setTimeout(()=>$('#pre').remove(), 4000);

/* lamp: pull the cord to switch light / dark */
$('#lamp').onclick = () => { $('#lamp').classList.add('pull'); setTimeout(()=>$('#lamp').classList.remove('pull'),300); document.body.classList.toggle('dark'); };
setTimeout(()=>{ if(scrollY<50) $('#lamp').click(); }, 6500); // auto-pull once, like the video

/* ===== MOTION CURSOR PACK (desktop only) ===== */
if (matchMedia('(hover:hover)').matches) {
  document.body.insertAdjacentHTML('beforeend','<div id="spot"></div><div id="ring"></div><div id="dot"></div>');
  const ring=$('#ring'), dot=$('#dot'), spot=$('#spot');
  let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my, px=mx, py=my, sx=mx, sy=my, lx=mx, ly=my, show=false, t=0;

  /* split hero name into letters that wave when the cursor is near */
  const h1=$('.hero h1'); h1.innerHTML=[...h1.textContent].map(c=>`<span>${c===' '?'&nbsp;':c}</span>`).join('');
  const letters=[...h1.children], magnets=[...document.querySelectorAll('nav a,.logo,button,.social a,.tools span,#lamp')];

  addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px)`;
    /* sparkle trail */
    if (Math.hypot(mx-lx,my-ly)>28) { lx=mx; ly=my;
      const s=document.createElement('span'); s.className='sp'; s.textContent='✦';
      s.style.cssText=`left:${mx}px;top:${my}px;color:${['#b8975f','#f0b44a','#e9a5a5','#3aa0ff','#22c55e'][Math.random()*5|0]};--x:${(Math.random()-.5)*70}px;--y:${20+Math.random()*50}px`;
      document.body.appendChild(s); setTimeout(()=>s.remove(),1000); }
    /* letters wave */
    letters.forEach(l=>{ const r=l.getBoundingClientRect(), d=Math.hypot(mx-(r.left+r.width/2),my-(r.top+r.height/2)), k=Math.max(0,1-d/160);
      l.style.transform=`translateY(${-k*22}px) scale(${1+k*.3})`; l.style.color=k>.35?'var(--gold)':''; });
    /* magnetic pull */
    magnets.forEach(m=>{ const r=m.getBoundingClientRect(), dx=mx-(r.left+r.width/2), dy=my-(r.top+r.height/2);
      m.style.translate=Math.hypot(dx,dy)<90?`${dx*.35}px ${dy*.35}px`:'0 0'; m.style.transition='translate .25s'; });
    /* hero parallax */
    const ax=(mx/innerWidth-.5), ay=(my/innerHeight-.5);
    $('.me').style.translate=`${ax*-30}px ${ay*-16}px`; $('.role').style.translate=`${ax*14}px ${ay*8}px`;
    ring.classList.toggle('big', !!e.target.closest('a,button,#lamp,.tools span'));
  });
  addEventListener('click', e => { const r=document.createElement('i'); r.className='rip'; r.style.left=e.clientX+'px'; r.style.top=e.clientY+'px'; document.body.appendChild(r); setTimeout(()=>r.remove(),800); });


  /* main loop: ring, spotlight and phone all follow with different "weights" */
  (function loop(){
    t+=.04; rx+=(mx-rx)*.15; ry+=(my-ry)*.15; sx+=(mx-sx)*.06; sy+=(my-sy)*.06;
    const vx=mx-px, vy=my-py; px+=vx*.1; py+=vy*.1;
    ring.style.transform=`translate(${rx}px,${ry}px)`; spot.style.transform=`translate(${sx}px,${sy}px)`;
    const c=(v,m)=>Math.max(-m,Math.min(m,v));
    requestAnimationFrame(loop);
  })();
}

/* ===== DOORS -> PHONE SHOWCASE ===== */
let cur=0, cards=[];
function openDoor(i,quiet){
  cur=i; const s=DATA.services[i], pn=$('#dpanel');
  if(!quiet){ document.querySelectorAll('.door').forEach((d,k)=>d.classList.toggle('open',k===i)); $('#doors').classList.add('has');
    pn.classList.remove('in'); pn.innerHTML=`<h3>${s.n}</h3><ul>${s.pts.map(p=>`<li>${p}</li>`).join('')}</ul><a class="btn" href="#works">See ${s.n} works &darr;</a>`;
    requestAnimationFrame(()=>requestAnimationFrame(()=>pn.classList.add('in'))); }
  $('#works').style.setProperty('--door',s.c); $('#cat').textContent=s.n;
  $('#track').innerHTML=s.items.map(w=>`<div class="ph"><img src="${w.img}" alt="${w.t}"></div>`).join(''); cards=[...$('#track').children];
}
openDoor(0,true);
let sp=0, tx=0, ty=0, fx=0, fy=0;
addEventListener('mousemove',e=>{ tx=e.clientX/innerWidth-.5; ty=e.clientY/innerHeight-.5; });
(function showLoop(){
  const sec=$('#works'), r=sec.getBoundingClientRect(), p=Math.max(0,Math.min(1,-r.top/(sec.offsetHeight-innerHeight)));
  sp+=(p-sp)*.1; fx+=(tx-fx)*.08; fy+=(ty-fy)*.08;
  const n=cards.length;
  if(n && r.bottom>0 && r.top<innerHeight){
    const cw=cards[0].offsetWidth, step=cw*1.3, vw=innerWidth, off=vw/2-cw/2-sp*(n-1)*step;
    cards.forEach((c,k)=>{ const mid=off+k*step+cw/2, f=1-Math.min(1,Math.abs(mid-vw/2)/step);
      c.style.transform=`translateX(${off+k*step}px) rotateY(${(vw/2-mid)/vw*30}deg) scale(${.8+.38*f})`; c.style.opacity=.4+.6*f; c.style.zIndex=Math.round(f*10); });
    const idx=Math.round(sp*(n-1)); $('#cap').textContent=DATA.services[cur].items[idx].t;
    $('#cnt').textContent=String(idx+1).padStart(2,'0')+' / '+String(n).padStart(2,'0'); $('#bar').style.width=(sp*100)+'%';
    $('#frame').style.transform=`translate(-50%,-50%) perspective(900px) rotateY(${fx*16}deg) rotateX(${-fy*12}deg) translate(${fx*22}px,${fy*14}px)`;
  }
  requestAnimationFrame(showLoop);
})();
