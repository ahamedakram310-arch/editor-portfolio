/* =====================================================================
   YOUR CONTENT - edit the DATA block. Replace picsum links with your own
   files (e.g. 'images/photo1.jpg') and VID with your own video (videos/clip1.mp4)
   ===================================================================== */
const VID = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const IMG = (k,i,w,h) => `https://picsum.photos/seed/${k}${i}/${w}/${h}`;
const mk = (k,names,o={}) => names.map((t,i)=>({t, img:IMG(k,i,o.w||640,o.hs?o.hs[i%o.hs.length]:(o.h||400)), v:o.v?VID:''}));
const DATA = {
  reels: ['Wedding Reel','Event Teaser','Brand Promo','Product Reel','Travel Vlog','Festival Edit'].map((t,i)=>({t, img:IMG('rl',i,450,800), v:VID, ig:''})), // ig: paste an Instagram reel link to show "Open on Instagram"
  services: [ // kind: video | photo | grid  -> decides the layout of the page that opens when the door is clicked
    {n:'Videography', slug:'videography', kind:'video', c:'#f0b44a', btn:'View videos', pts:['Wedding & event films','Reels and promo videos','Colour grading','Premiere Pro editing'],
     items:mk('vid',['Wedding Film','Event Highlights','Promo Reel','Brand Story','Behind the Scenes','Short Film','Birthday Reel','Product Ad','Travel Vlog'],{v:true})},
    {n:'Digital Marketing Creatives', slug:'digital-marketing', kind:'grid', c:'#3aa0ff', btn:'View creatives', pts:['Instagram page handling','Post & story designs','Campaign creatives','Website marketing'],
     items:mk('dm',['Instagram Feed','Story Series','Ad Creative','Festival Post','Product Launch','Carousel','Offer Banner','Reel Cover','Web Banner'],{w:600,h:750})},
    {n:'Photography', slug:'photography', kind:'photo', c:'#22c55e', btn:'View photos', pts:['Portraits & weddings','Event albums','Product shoots','Lightroom retouching'],
     items:mk('ph',['Portrait','Bridal','Event Album','Product','Street','Candid','Family','Fashion','Nature'],{w:600,hs:[800,600,900,700,850,650,750,900,600]})},
    {n:'Branding & Identity', slug:'branding', kind:'grid', c:'#ef4444', btn:'View brands', pts:['Logo design','Colour & typography','Brand kits','Print materials'],
     items:mk('br',['Logo Suite','Brand Kit','Business Card','Packaging','Poster','Social Kit','Flyer','Letterhead','Menu'],{w:600,h:750})}],
  tools: [ // k = logo letters, c = logo colour
    {k:'Ps',n:'Photoshop',c:'#31a8ff'},{k:'Lr',n:'Lightroom',c:'#74b9ff'},{k:'Pr',n:'Premiere Pro',c:'#9999ff'},{k:'Ae',n:'After Effects',c:'#d291ff'},
    {k:'Ai',n:'Illustrator',c:'#ff9a00'},{k:'Cv',n:'Canva',c:'#00c4cc'},{k:'Cc',n:'CapCut',c:'#ffffff'}],
  stats: [ // SAMPLE numbers shown in the hero - change to your real ones
    {n:3,s:'+',l:'Years of experience'},{n:100,s:'+',l:'Projects completed'},{n:30,s:'+',l:'Happy clients'}],
  experience: [
    {t:'Photography & Video', d:'Events, weddings, portraits and promotional films.'},
    {t:'Social Media Management', d:'Instagram page handling, content publishing and growth.'},
    {t:'Digital Marketing', d:'Campaign creatives and website marketing for businesses.'}],
  journey: [ // SAMPLE years - edit to your real story. c = light colour for that stage
    {y:'2019',tag:'2019 - 2022',t:'B.Com Degree',d:'Bachelor of Commerce - the business foundation behind my creative work.',c:'#f0b44a'},
    {y:'2022',tag:'2022',t:'Photography & Photo Editing',d:'Started shooting events and editing in Lightroom and Photoshop.',c:'#e8863a'},
    {y:'2023',tag:'2023',t:'Video Editing & Reels',d:'Premiere Pro edits, event films and Instagram reels.',c:'#58a6ff'},
    {y:'2025',tag:'2025',t:'Social Media & Digital Marketing',d:'Managing Instagram pages and campaign creatives for businesses.',c:'#22c55e'},
    {y:'2026',tag:'2026 - Now',t:'Independent Creative',d:'Freelance visual designer, photographer and video editor.',c:'#f0b44a'}],
  testimonials: [
    {n:'Client Name', d:'"Creative, quick and professional. Our event album looked stunning."'},
    {n:'Business Owner', d:'"Our Instagram engagement grew after his content designs."'},
    {n:'Happy Customer', d:'"Loved the photos. Highly recommended!"'}],
  social: [{n:'Instagram', u:'https://instagram.com/'},{n:'LinkedIn', u:'https://linkedin.com/'},{n:'WhatsApp', u:'https://wa.me/'}]
};
const $ = s => document.querySelector(s), card = (t,d) => `<div class="card rv"><h3>${t}</h3><p>${d}</p></div>`;

/* ---------- render simple sections ---------- */
$('#doors').innerHTML = DATA.services.map(s=>`<div class="door rv" style="--c:${s.c}"><div class="arch"><div class="glow"></div><div class="inner"><h4>${s.n}</h4><ul>${s.pts.map(p=>`<li>${p}</li>`).join('')}</ul><span class="btn sm">${s.btn} &rarr;</span></div><div class="leaf"></div></div>${s.n}</div>`).join('');
$('#reels').innerHTML = DATA.reels.map((r,i)=>`<div class="reel" data-i="${i}"><img src="${r.img}" alt=""><video src="${r.v}" muted loop playsinline preload="none"></video><span class="rt">${r.t}</span><div class="ro"><b>${r.t}</b><span>&#9654; Watch reel</span></div></div>`).join('');
$('#exp').innerHTML = DATA.experience.map(e=>card(e.t,e.d)).join('');
$('#testi').innerHTML = DATA.testimonials.map(t=>card(t.n,t.d)).join('');
$('#fsocial').innerHTML = $('#social').innerHTML = DATA.social.map(s=>`<a href="${s.u}" target="_blank">${s.n}</a>`).join('');
$('#journey').innerHTML = DATA.journey.map(j=>`<div class="jitem"><small>${j.tag}</small><h3>${j.t}</h3><p>${j.d}</p></div>`).join('');
$('#dust').innerHTML = Array.from({length:34},()=>`<i style="left:${Math.random()*100}%;top:${30+Math.random()*70}%;animation-delay:${-Math.random()*8}s;animation-duration:${6+Math.random()*6}s"></i>`).join('');

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.2});
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => io.observe(el));

/* ---------- preloader: black, white camera, flash ---------- */
setTimeout(()=>$('#pre').classList.add('go'), 2500);
setTimeout(()=>{ $('#pre').classList.add('out'); document.body.classList.add('ready'); }, 3200);
setTimeout(()=>$('#pre').remove(), 4400);

/* ---------- lamp: light / dark (site starts dark) ---------- */
function toggleTheme(){ document.body.classList.toggle('dark'); }
$('#lamp').onclick = () => { $('#lamp').classList.add('pull'); setTimeout(()=>$('#lamp').classList.remove('pull'),300); toggleTheme(); };

/* ---------- viewer: photos / videos / reels with next + previous ---------- */
let vw = {list:[],i:0,mode:''}, lastWheel = 0;
function drawViewer(){
  const m = vw.list[vw.i], n = vw.list.length;
  $('#lbc').className = vw.mode;
  $('#lbc').innerHTML = (m.v ? `<video src="${m.v}" autoplay loop controls playsinline></video>` : `<img src="${m.img}" alt="">`)
    + `<p class="lcap">${m.t}<span>${vw.i+1} / ${n}</span>${m.ig?`<a href="${m.ig}" target="_blank">Open on Instagram &#8599;</a>`:''}</p>`;
}
function openViewer(list,i,mode){ vw={list,i,mode}; drawViewer(); $('#lb').classList.add('on'); }
function stepViewer(d){ vw.i=(vw.i+d+vw.list.length)%vw.list.length; drawViewer(); }
function closeViewer(){ $('#lb').classList.remove('on'); $('#lbc').innerHTML=''; }
$('#lbp').onclick=()=>stepViewer(-1); $('#lbn').onclick=()=>stepViewer(1);
$('#lb').onclick=e=>{ if(e.target.id==='lb'||e.target.id==='lbx') closeViewer(); };
$('#lb').addEventListener('wheel',e=>{ if(Date.now()-lastWheel<650) return; lastWheel=Date.now(); stepViewer(e.deltaY>0?1:-1); },{passive:true});
let ty0=0; $('#lb').addEventListener('touchstart',e=>{ ty0=e.touches[0].clientY; },{passive:true});
$('#lb').addEventListener('touchend',e=>{ const d=ty0-e.changedTouches[0].clientY; if(Math.abs(d)>60) stepViewer(d>0?1:-1); });
addEventListener('keydown',e=>{ if(!$('#lb').classList.contains('on')) return;
  if(e.key==='Escape') closeViewer(); else if(['ArrowRight','ArrowDown'].includes(e.key)) stepViewer(1); else if(['ArrowLeft','ArrowUp'].includes(e.key)) stepViewer(-1); });

/* ---------- featured reels: hover preview, click opens reel viewer ---------- */
document.querySelectorAll('.reel').forEach(r=>{ const v=r.querySelector('video');
  r.onmouseenter=()=>v.play().catch(()=>{}); r.onmouseleave=()=>{ v.pause(); v.currentTime=0; };
  r.onclick=()=>openViewer(DATA.reels,+r.dataset.i,'reel'); });

/* ---------- doors: hover opens (CSS), click = flash -> new page ---------- */
$('#doors').onclick = e => { const d=e.target.closest('.door'); if(!d) return; const i=[...d.parentNode.children].indexOf(d);
  if(matchMedia('(hover:none)').matches && !d.classList.contains('open')){ document.querySelectorAll('.door').forEach(x=>x.classList.toggle('open',x===d)); return; }
  location.hash = '#/'+DATA.services[i].slug; };
function flash(cb){ const f=$('#flash2'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); setTimeout(cb,320); }
function renderPage(i){
  const s=DATA.services[i], p=$('#page'); p.style.setProperty('--pc',s.c);
  $('#ptitle').textContent=s.n; $('#pcount').textContent=s.items.length+(s.kind==='video'?' videos':' works'); $('#pbody').className='pbody '+s.kind;
  $('#pbody').innerHTML=s.items.map((m,k)=>`<figure class="pc" data-k="${k}" style="animation-delay:${k*70}ms"><img src="${m.img}" alt="${m.t}">${m.v?`<video src="${m.v}" muted loop playsinline preload="none"></video><span class="play">&#9654;</span>`:''}<figcaption>${m.t}</figcaption></figure>`).join('');
  $('#pbody').querySelectorAll('.pc').forEach(f=>{ const v=f.querySelector('video');
    if(v){ f.onmouseenter=()=>v.play().catch(()=>{}); f.onmouseleave=()=>{ v.pause(); v.currentTime=0; }; }
    f.onclick=()=>openViewer(s.items,+f.dataset.k,'');});
  p.scrollTop=0;
}
let cp=-1;
function route(){
  const i=DATA.services.findIndex(s=>'#/'+s.slug===location.hash); if(i===cp) return; cp=i;
  flash(()=>{ if(i>=0){ renderPage(i); $('#page').classList.add('on'); document.body.classList.add('lock'); }
    else { $('#page').classList.remove('on'); document.body.classList.remove('lock'); $('#pbody').innerHTML=''; } });
}
$('#pback').onclick=()=>{ location.hash='#services'; };
addEventListener('hashchange',route); route();

/* ---------- tools: orbiting logos ---------- */
const RINGS=[{R:132,d:36,a0:30,idx:[0,1,2]},{R:236,d:54,a0:45,idx:[3,4,5,6],rev:true}];
$('#orbit').innerHTML = `<div class="oc"><b id="on">AA</b><span id="os">Tools I use</span></div>` + RINGS.map(rg=>
  `<div class="ring" style="--R:${rg.R}px;--d:${rg.d}s;${rg.rev?'animation-direction:reverse':''}">${rg.idx.map((ti,k)=>{ const t=DATA.tools[ti], a=rg.a0+k*(360/rg.idx.length);
    return `<div class="sl" style="--a:${a}deg"><div class="up"><div class="tool" data-i="${ti}" style="--tc:${t.c};${rg.rev?'animation-direction:normal':''}">${t.k}</div></div></div>`; }).join('')}</div>`).join('');
$('#orbit').addEventListener('mouseover',e=>{ const t=e.target.closest('.tool'); if(!t) return; const d=DATA.tools[t.dataset.i]; $('#on').textContent=d.k; $('#on').style.color=d.c; $('#os').textContent=d.n; });
$('#orbit').addEventListener('mouseout',e=>{ if(e.target.closest('.tool')){ $('#on').textContent='AA'; $('#on').style.color=''; $('#os').textContent='Tools I use'; } });
function fitOrbit(){ const w=$('#orbitw'), k=Math.min(1,w.clientWidth/560); $('#orbit').style.transform=`scale(${k})`; w.style.height=(560*k)+'px'; }
addEventListener('resize',fitOrbit); fitOrbit();

/* ---------- motion cursor pack (desktop only) ---------- */
if (matchMedia('(hover:hover)').matches) {
  document.body.insertAdjacentHTML('beforeend','<div id="spot"></div><div id="ring"></div><div id="dot"></div>');
  const ring=$('#ring'), dot=$('#dot'), spot=$('#spot');
  let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my, sx=mx, sy=my, lx=mx, ly=my;
  const h1=$('.hero h1'); h1.innerHTML=[...h1.textContent].map(c=>`<span>${c===' '?'&nbsp;':c}</span>`).join('');
  const letters=[...h1.children], magnets=[...document.querySelectorAll('nav a,.logo,button,.social a,#lamp,.cta .btn')];
  addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px)`;
    if (Math.hypot(mx-lx,my-ly)>28) { lx=mx; ly=my;
      const s=document.createElement('span'); s.className='sp'; s.textContent='✦';
      s.style.cssText=`left:${mx}px;top:${my}px;color:${['var(--gold)','#f0b44a','#e9a5a5','#3aa0ff','#22c55e'][Math.random()*5|0]};--x:${(Math.random()-.5)*70}px;--y:${20+Math.random()*50}px`;
      document.body.appendChild(s); setTimeout(()=>s.remove(),1000); }
    if (scrollY<900) letters.forEach(l=>{ const r=l.getBoundingClientRect(), d=Math.hypot(mx-(r.left+r.width/2),my-(r.top+r.height/2)), k=Math.max(0,1-d/160);
      l.style.transform=`translateY(${-k*22}px) scale(${1+k*.3})`; l.style.color=k>.35?'var(--gold)':''; });
    magnets.forEach(m=>{ const r=m.getBoundingClientRect(), dx=mx-(r.left+r.width/2), dy=my-(r.top+r.height/2);
      m.style.translate=Math.hypot(dx,dy)<90?`${dx*.35}px ${dy*.35}px`:'0 0'; m.style.transition='translate .25s'; });
    const ax=(mx/innerWidth-.5), ay=(my/innerHeight-.5);
    $('.me').style.translate=`${ax*-30}px ${ay*-16}px`; $('.role').style.translate=`${ax*14}px ${ay*8}px`;
    ring.classList.toggle('big', !!e.target.closest('a,button,#lamp,.door,.reel,.pc,.tool,.btn'));
  });
  addEventListener('click', e => { const r=document.createElement('i'); r.className='rip'; r.style.left=e.clientX+'px'; r.style.top=e.clientY+'px'; document.body.appendChild(r); setTimeout(()=>r.remove(),800); });
  (function loop(){ rx+=(mx-rx)*.15; ry+=(my-ry)*.15; sx+=(mx-sx)*.06; sy+=(my-sy)*.06;
    ring.style.transform=`translate(${rx}px,${ry}px)`; spot.style.transform=`translate(${sx}px,${sy}px)`; requestAnimationFrame(loop); })();
}

/* ---------- creative journey: scroll moves the timeline, light follows ---------- */
let jp=0, jidx=-1;
(function jLoop(){
  const sec=$('#jsec'), r=sec.getBoundingClientRect();
  document.body.classList.toggle('injr', r.top<50 && r.bottom>50);
  if(r.bottom>0 && r.top<innerHeight){
    const p=Math.max(0,Math.min(1,-r.top/(sec.offsetHeight-innerHeight))), items=[...$('#journey').children], n=items.length, ih=innerHeight*.36;
    jp+=(p-jp)*.08; const pos=jp*(n-1);
    $('#journey').style.transform=`translateY(${innerHeight/2-(pos+.5)*ih}px)`;
    items.forEach((it,k)=>{ const f=1-Math.min(1,Math.abs(k-pos)); it.style.opacity=.2+.8*f; it.style.transform=`translateX(${(1-f)*30}px) scale(${.92+.08*f})`; it.classList.toggle('act',f>.6); });
    const idx=Math.round(pos), j=DATA.journey[idx];
    if(idx!==jidx){ jidx=idx; const y=$('#yr'); y.textContent=j.y; y.classList.remove('roll'); void y.offsetWidth; y.classList.add('roll');
      $('.jstick').style.setProperty('--jl',j.c); $('#jc').textContent=String(idx+1).padStart(2,'0')+' / '+String(n).padStart(2,'0'); }
    $('#jf').style.height=jp*100+'%'; $('.jglow').style.setProperty('--gx',(28+Math.sin(jp*7)*12)+'%'); $('.jglow').style.setProperty('--gy',(18+jp*64)+'%');
  }
  requestAnimationFrame(jLoop);
})();

/* ---------- hero photo travels to About (one photo, moves as you scroll) ---------- */
(function(){
  const mv=$('#mover'), im=mv.querySelector('img'), slot=$('#slot'), ps=$('#pslot'); let a,b,sm=0,n=0;
  const box=el=>{ let x=0,y=0,e=el; while(e){ x+=e.offsetLeft; y+=e.offsetTop; e=e.offsetParent; } return {x,y,w:el.offsetWidth,h:el.offsetHeight}; };
  const ar=()=>{ if(im.naturalWidth) document.documentElement.style.setProperty('--ar',im.naturalWidth/im.naturalHeight); };
  const measure=()=>{ a=box(slot); b=box(ps); };
  if(im.complete) ar(); else im.addEventListener('load',ar);
  addEventListener('load',()=>{ ar(); measure(); }); addEventListener('resize',measure);
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  (function loop(){
    if(!(n++%20)) measure();
    const end=Math.max(1,b.y-innerHeight*.25), t=Math.max(0,Math.min(1,scrollY/end));
    sm+=(t-sm)*.12; const e=ease(sm), L=(p,q)=>p+(q-p)*e, bump=Math.sin(e*Math.PI);
    mv.style.width=L(a.w,b.w)+'px'; mv.style.height=L(a.h,b.h)+'px';
    mv.style.transform=`translate(${L(a.x,b.x)}px,${L(a.y,b.y)}px) rotate(${-bump*5}deg) scale(${1+bump*.06})`;
    document.body.classList.toggle('landed', sm>.96);
    requestAnimationFrame(loop);
  })();
})();

/* ---------- hero extras: typing role, stats, sparkles, chip parallax ---------- */
(function(){
  const words=['Visual Designer','Photographer','Video Editor','Graphic Designer','Social Media Creator'], el=$('#typed'); let i=0,j=0,del=false;
  (function type(){ const w=words[i]; j+=del?-1:1; el.textContent=w.slice(0,j); let t=del?40:90;
    if(!del&&j===w.length){ del=true; t=1500; } else if(del&&j===0){ del=false; i=(i+1)%words.length; t=300; } setTimeout(type,t); })();
  const st=x=>`<div class="stat"><b data-n="${x.n}" data-s="${x.s}">0${x.s}</b><span>${x.l}</span></div>`;
  $('#hl').innerHTML=DATA.stats.slice(0,2).map(st).join('');
  $('#hr').innerHTML=st(DATA.stats[2])+'<div class="pill"><i></i>Available for freelance</div>';
  setTimeout(()=>document.querySelectorAll('.stat b').forEach(b=>{ const n=+b.dataset.n, t0=performance.now();
    (function tick(t){ const p=Math.min(1,(t-t0)/1800); b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+b.dataset.s; if(p<1) requestAnimationFrame(tick); })(t0); }),3300);
  $('#hdust').innerHTML=Array.from({length:16},()=>`<i style="left:${Math.random()*100}%;top:${20+Math.random()*80}%;font-size:${8+Math.random()*10}px;animation-delay:${-Math.random()*10}s;animation-duration:${8+Math.random()*8}s">&#10022;</i>`).join('');
  addEventListener('mousemove',e=>{ const x=e.clientX/innerWidth-.5, y=e.clientY/innerHeight-.5;
    document.querySelectorAll('.chip').forEach(c=>{ const d=+c.dataset.d; c.style.translate=`${x*d}px ${y*d}px`; });
    $('.halo').style.translate=`${x*-24}px ${y*-16}px`; });
})();
