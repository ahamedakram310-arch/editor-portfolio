/* =====================================================================
   YOUR CONTENT - edit the DATA block. Replace picsum links with your own
   files (e.g. 'images/photo1.jpg') and VID with your own video (videos/clip1.mp4)
   ===================================================================== */
const VID =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const IMG = (k, i, w, h) => `https://picsum.photos/seed/${k}${i}/${w}/${h}`;
const mk = (k, names, o = {}) =>
  names.map((t, i) => ({
    t,
    img: IMG(k, i, o.w || 640, o.hs ? o.hs[i % o.hs.length] : o.h || 400),
    v: o.v ? VID : "",
  }));
/* ---- CONTACT (one place - used in the contact section, footer and WhatsApp link). Replace with your real details ---- */
const C = {
  email: "ahamedakram310@gmail.com",
  phone: "+91 85318 65679",
  bahrain: "+973 3816 3654",
};
const tel = (n) => "tel:" + n.replace(/[^+\d]/g, "");
const DATA = {
  reels: [
    // each reel = one project. ig = the Instagram reel link (plays inside the site). Optional: v:'videos/name.mp4' to use your own video file instead, img:'images/cover.jpg' for a cover photo.
    // Fill t (project), sub, obj (objective), role (your approach), del (deliverables), res (results - only add REAL numbers)
    {
      t: "NMB Catering",
      sub: "Social Media Content & Creative Campaign",
      obj: "Create engaging content to promote the catering brand.",
      role: "Develop a strong visual hook, edit the video and create a brand-focused Reel.",
      del: ["Video editing", "Thumbnail design", "Social media creative"],
      res: "",
      img: "",
      v: "videos/reel1.mp4",
      ig: "https://www.instagram.com/reel/DcfIonfoe1s/",
    },
    {
      t: "Instagram Reel 02",
      sub: "Instagram Reel",
      img: "",
      v: "videos/reel2.mp4",
      ig: "https://www.instagram.com/reel/Ddc11MNymeh/",
    },
    {
      t: "Instagram Reel 03",
      sub: "Instagram Reel",
      img: "",
      v: "videos/reel3.mp4",
      ig: "https://www.instagram.com/reel/DdNZLHFBlPt/",
    },
    {
      t: "Instagram Reel 04",
      sub: "Instagram Reel",
      img: "",
      v: "videos/reel4.mp4",
      ig: "https://www.instagram.com/reel/DXeXbu8iHK2/",
    },
    {
      t: "Instagram Reel 05",
      sub: "Instagram Reel",
      img: "",
      v: "videos/reel5.mp4",
      ig: "https://www.instagram.com/reel/DP5Fgwlj__D/",
    },
    {
      t: "Instagram Reel 06",
      sub: "Instagram Reel",
      img: "",
      v: "videos/reel6.mp4",
      ig: "https://www.instagram.com/reel/Df49jRUyBG0/",
    },
    {
      t: "Instagram Reel 07",
      sub: "Instagram Reel",
      img: "",
      v: "videos/reel7.mp4",
      ig: "https://www.instagram.com/reel/DeEqDVaSSEY/",
    },
  ],
  services: [
    // pts = list shown inside the door, desc = intro shown at the top of the page that opens
    {
      n: "Videography",
      slug: "videography",
      kind: "video",
      c: "#f0b44a",
      btn: "View videos",
      desc: "Professional short-form video editing, promotional videos, branded Reels and creative storytelling.",
      pts: [
        "Wedding & Event shoots",
        "Reels & Promo Videos",
        "Cinematic Storytelling",
        "Colour Grading",
      ],
      items: mk(
        "vid",
        [
          "Wedding Film",
          "Event Highlights",
          "Promo Reel",
          "Brand Story",
          "Behind the Scenes",
          "Short Film",
          "Birthday Reel",
          "Product Ad",
          "Travel Vlog",
        ],
        { v: true },
      ),
    },
    {
      n: "Digital Marketing",
      slug: "digital-marketing",
      kind: "grid",
      c: "#3aa0ff",
      btn: "View creatives",
      desc: "Social media content planning, Instagram Reels strategy, campaign creative development and digital marketing support.",
      pts: [
        "Instagram Page Management",
        "Post & Story Designs",
        "Reels & Viral Content",
        "Paid Ads Campaigns",
        "Brand Identity Design",
        "SEO",
      ],
      items: mk(
        "dm",
        [
          "Instagram Feed",
          "Story Series",
          "Ad Creative",
          "Festival Post",
          "Product Launch",
          "Carousel",
          "Offer Banner",
          "Reel Cover",
          "Web Banner",
        ],
        { w: 600, h: 750 },
      ),
    },
    {
      n: "Photography",
      slug: "photography",
      kind: "photo",
      c: "#22c55e",
      btn: "View photos",
      desc: "Business photography, event coverage and product visuals, carefully edited and retouched.",
      pts: [
        "Business photography",
        "Event coverage",
        "Product visuals",
        "Photo retouching",
      ],
      items: mk(
        "ph",
        [
          "Portrait",
          "Bridal",
          "Event Album",
          "Product",
          "Street",
          "Candid",
          "Family",
          "Fashion",
          "Nature",
        ],
        { w: 600, hs: [800, 600, 900, 700, 850, 650, 750, 900, 600] },
      ),
    },
    {
      n: "Graphic Design & Branding",
      slug: "branding",
      kind: "grid",
      c: "#ef4444",
      btn: "View brands",
      desc: "Social media creatives, promotional posters, brand identity and marketing materials.",
      pts: [
        "Social media creatives",
        "Promotional posters",
        "Brand identity design",
        "Marketing materials",
      ],
      items: mk(
        "br",
        [
          "Logo Suite",
          "Brand Kit",
          "Business Card",
          "Packaging",
          "Poster",
          "Social Kit",
          "Flyer",
          "Letterhead",
          "Menu",
        ],
        { w: 600, h: 750 },
      ),
    },
  ],
  tools: [
    // k = logo letters, c = logo colour
    {
      k: "Ps",
      n: "Photoshop",
      c: "#31a8ff" /*, video:'videos/photoshop.mp4' <- add a screen recording to play it as the background instead of the built-in animation */,
    },
    { k: "Lr", n: "Lightroom", c: "#74b9ff" },
    { k: "Pr", n: "Premiere Pro", c: "#9999ff" },
    { k: "Ae", n: "After Effects", c: "#d291ff" },
    { k: "Ai", n: "Illustrator", c: "#ff9a00" },
    { k: "Cv", n: "Canva", c: "#00c4cc" },
    { k: "Cc", n: "CapCut", c: "#ffffff" },
  ],
  focus: [
    // the cards beside your photo in the hero (no numbers - add real numbers only if you can prove them)
    { t: "Instagram Reels", l: "Short-form video that connects" },
    { t: "Brand Visuals", l: "Posters, creatives & identity" },
    { t: "Social Media", l: "Planning, content & ads" },
  ],
  experience: [
    // optional: when:'2024 - Present' and org:'Company' show on the card once you add them
    {
      t: "Photography & Video",
      d: "Events, weddings, portraits and promotional films.",
      when: "",
      org: "",
    },
    {
      t: "Social Media Management",
      d: "Instagram page management, content publishing and growth.",
      when: "",
      org: "",
    },
    {
      t: "Digital Marketing",
      d: "Campaign creatives and website digital marketing for businesses.",
      when: "",
      org: "",
    },
  ],
  journey: [
    // big word on the left = y, c = light colour. Replace with real dates only if you want them
    {
      y: "Foundation",
      tag: "Step 01",
      t: "Bachelor of Commerce (B.Com)",
      d: "The business foundation behind my creative work.",
      c: "#f0b44a",
    },
    {
      y: "Create",
      tag: "Step 02",
      t: "Photography & Videography",
      d: "Hands-on experience shooting events and people, and editing photographs.",
      c: "#e8863a",
    },
    {
      y: "Edit",
      tag: "Step 03",
      t: "Video Editing & Reels",
      d: "Short-form video editing, promotional videos and Instagram Reels.",
      c: "#58a6ff",
    },
    {
      y: "Grow",
      tag: "Step 04",
      t: "Social Media & Digital Marketing",
      d: "Instagram page management, content publishing and website digital marketing.",
      c: "#22c55e",
    },
    {
      y: "Today",
      tag: "Now",
      t: "Digital Marketing & Creative Content",
      d: "Combining strategy and creativity to help brands build a strong digital presence.",
      c: "#f0b44a",
    },
  ],
  testimonials: [
    // EMPTY = the section hides itself. Add REAL feedback like this: {n:'Client name', r:'Business / project', d:'"What they said"'},
  ],
  certificates: [
    // HOW TO ADD: put the file in the certificates folder, then add a line. Delete the SAMPLE lines.
    // {t:'Certificate name', org:'Issued by', year:'2025', img:'certificates/name.jpg'}   or use pdf:'certificates/name.pdf'
    {
      t: "Your Certificate Title",
      org: "Issuing organisation",
      year: "",
      img: "",
      pdf: "",
      sample: true,
    },
    {
      t: "Your Certificate Title",
      org: "Issuing organisation",
      year: "",
      img: "",
      pdf: "",
      sample: true,
    },
    {
      t: "Your Certificate Title",
      org: "Issuing organisation",
      year: "",
      img: "",
      pdf: "",
      sample: true,
    },
  ],
  social: [
    { n: "Instagram", u: "https://instagram.com/" },
    // { n: "LinkedIn", u: "https://linkedin.com/" },
    { n: "WhatsApp", u: "https://wa.me/" + C.phone.replace(/\D/g, "") },
  ],
};
const $ = (s) => document.querySelector(s),
  card = (t, d, w) =>
    `<div class="card rv"><h3>${t}</h3>${w ? `<small class="cw">${w}</small>` : ""}<p>${d}</p></div>`;

/* ---------- render simple sections ---------- */
$("#doors").innerHTML = DATA.services
  .map(
    (s) =>
      `<div class="door rv" style="--c:${s.c}"><div class="arch"><div class="glow"></div><div class="inner"><h4>${s.n}</h4><ul>${s.pts.map((p) => `<li>${p}</li>`).join("")}</ul><span class="btn sm">${s.btn} &rarr;</span></div><div class="leaf"></div></div>${s.n}</div>`,
  )
  .join("");
const RC = ["#ff3d81", "#7c3aed", "#06b6d4", "#f59e0b", "#22c55e", "#ff6a3d", "#e11d48"];
$("#reels").innerHTML = DATA.reels
  .map(
    (r, i) =>
      `<div class="reel rv" data-i="${i}" style="--rc:${RC[i % RC.length]};--dl:${i * 90}ms">${r.img ? `<img src="${r.img}" alt="">` : `<div class="poster"><i>&#9654;</i></div>`}${r.v ? `<video src="${r.v}#t=0.1" muted loop playsinline preload="metadata"></video>` : ""}<span class="rnum">${String(i + 1).padStart(2, "0")}</span><span class="rtag">&#9654; Reel</span><span class="rt">${r.t}</span><div class="ric"><i>&#9829;</i><i>&#128172;</i><i>&#10148;</i></div><div class="ro"><b>${r.t}</b><span class="wr" data-ig="${r.ig || ""}">&#9654; Watch reel</span><u class="rbar"></u></div></div>`,
  )
  .join("");
$("#rtot").textContent = String(DATA.reels.length).padStart(2, "0");
$("#exp").innerHTML = DATA.experience
  .map((e) => card(e.t, e.d, [e.org, e.when].filter(Boolean).join(" · ")))
  .join("");
$("#fsocial").innerHTML = $("#social").innerHTML = DATA.social
  .map((s) => `<a href="${s.u}" target="_blank">${s.n}</a>`)
  .join("");
$("#journey").innerHTML = DATA.journey
  .map(
    (j) =>
      `<div class="jitem"><small>${j.tag}</small><h3>${j.t}</h3><p>${j.d}</p></div>`,
  )
  .join("");
$("#dust").innerHTML = Array.from(
  { length: 34 },
  () =>
    `<i style="left:${Math.random() * 100}%;top:${30 + Math.random() * 70}%;animation-delay:${-Math.random() * 8}s;animation-duration:${6 + Math.random() * 6}s"></i>`,
).join("");

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.2 },
);
document.querySelectorAll(".rv,.rv-l,.rv-r").forEach((el) => io.observe(el));

/* ---------- preloader: black, white camera, flash ---------- */
setTimeout(() => $("#pre").classList.add("go"), 2500);
setTimeout(() => {
  $("#pre").classList.add("out");
  document.body.classList.add("ready");
}, 3200);
setTimeout(() => $("#pre").remove(), 4400);

/* ---------- lamp: light / dark (site starts dark) ---------- */
function toggleTheme() {
  document.body.classList.toggle("dark");
}
$("#lamp").onclick = () => {
  $("#lamp").classList.add("pull");
  setTimeout(() => $("#lamp").classList.remove("pull"), 300);
  toggleTheme();
};

/* ---------- viewer: photos / videos / reels with next + previous ---------- */
let vw = { list: [], i: 0, mode: "" },
  lastWheel = 0;
function drawViewer() {
  const m = vw.list[vw.i],
    n = vw.list.length;
  $("#lbc").className = vw.mode;
  $("#lbc").innerHTML =
    (m.v
      ? `<video src="${m.v}" autoplay loop controls playsinline onerror="igFallback(this)"></video>`
      : m.ig && /instagram\.com\/(reel|p)\//.test(m.ig)
        ? `<iframe class="igf" src="${m.ig.replace(/\/?(\?.*)?$/, "/")}embed/" allowfullscreen scrolling="no" allow="autoplay; encrypted-media; fullscreen" loading="lazy" title="${m.t}"></iframe>`
        : `<img src="${m.img}" alt="">`) +
    `<p class="lcap">${m.t}<span>${vw.i + 1} / ${n}</span>${m.ig ? `<a href="${m.ig}" target="_blank">Open on Instagram &#8599;</a>` : ""}</p>`;
  startViewerVideo();
}
function igFallback(v) {
  const m = vw.list[vw.i];
  if (!m || !m.ig) return;
  v.outerHTML = `<iframe class="igf" src="${m.ig.replace(/\/?(\?.*)?$/, "/")}embed/" allowfullscreen scrolling="no" allow="autoplay; encrypted-media; fullscreen" title="${m.t}"></iframe>`;
}
function startViewerVideo() {
  const v = $("#lbc video");
  if (!v) return;
  v.muted = false;
  v.play().catch(() => {
    v.muted = true; // browser blocked sound: start muted, viewer can unmute with the controls
    v.play().catch(() => {});
  });
}
function openViewer(list, i, mode) {
  vw = { list, i, mode };
  drawViewer();
  $("#lb").classList.add("on");
  startViewerVideo();
}
function stepViewer(d) {
  vw.i = (vw.i + d + vw.list.length) % vw.list.length;
  drawViewer();
}
function closeViewer() {
  $("#lb").classList.remove("on");
  $("#lbc").innerHTML = "";
}
$("#lbp").onclick = () => stepViewer(-1);
$("#lbn").onclick = () => stepViewer(1);
$("#lb").onclick = (e) => {
  if (e.target.id === "lb" || e.target.id === "lbx") closeViewer();
};
$("#lb").addEventListener(
  "wheel",
  (e) => {
    if (Date.now() - lastWheel < 650) return;
    lastWheel = Date.now();
    stepViewer(e.deltaY > 0 ? 1 : -1);
  },
  { passive: true },
);
let ty0 = 0;
$("#lb").addEventListener(
  "touchstart",
  (e) => {
    ty0 = e.touches[0].clientY;
  },
  { passive: true },
);
$("#lb").addEventListener("touchend", (e) => {
  const d = ty0 - e.changedTouches[0].clientY;
  if (Math.abs(d) > 60) stepViewer(d > 0 ? 1 : -1);
});
addEventListener("keydown", (e) => {
  if (!$("#lb").classList.contains("on")) return;
  if (e.key === "Escape") closeViewer();
  else if (["ArrowRight", "ArrowDown"].includes(e.key)) stepViewer(1);
  else if (["ArrowLeft", "ArrowUp"].includes(e.key)) stepViewer(-1);
});

/* ---------- featured reels: hover preview, click opens reel viewer ---------- */
document.querySelectorAll(".reel").forEach((r) => {
  const v = r.querySelector("video");
  if (v) v.addEventListener("error", () => v.remove()); // file missing -> keep the cover
  r.onclick = (e) => {
    const w = e.target.closest(".wr");
    if (w) {
      // "Watch reel" button -> the Instagram reel
      e.stopPropagation();
      if (w.dataset.ig) window.open(w.dataset.ig, "_blank", "noopener");
      return;
    }
    openViewer(DATA.reels, +r.dataset.i, "reel"); // click the video -> play with sound
  };
});
// cards play muted: the hovered / highlighted one plays, the others rest
setInterval(() => {
  document.querySelectorAll("#reels .reel").forEach((r) => {
    const v = r.querySelector("video");
    if (!v) return;
    const on = r.matches(":hover") || r.classList.contains("auto");
    if (on && v.paused) v.play().catch(() => {});
    else if (!on && !v.paused) v.pause();
  });
}, 250);

/* ---------- doors: hover opens (CSS), click = flash -> new page ---------- */
$("#doors").onclick = (e) => {
  const d = e.target.closest(".door");
  if (!d) return;
  const i = [...d.parentNode.children].indexOf(d);
  if (matchMedia("(hover:none)").matches && !d.classList.contains("open")) {
    document
      .querySelectorAll(".door")
      .forEach((x) => x.classList.toggle("open", x === d));
    return;
  }
  location.hash = "#/" + DATA.services[i].slug;
};
function flash(cb) {
  const f = $("#flash2");
  f.classList.remove("go");
  void f.offsetWidth;
  f.classList.add("go");
  setTimeout(cb, 320);
}
function renderPage(i) {
  const s = DATA.services[i],
    p = $("#page");
  p.style.setProperty("--pc", s.c);
  $("#ptitle").textContent = s.n;
  $("#pdesc").textContent = s.desc || "";
  $("#pcount").textContent =
    s.items.length + (s.kind === "video" ? " videos" : " works");
  $("#pbody").className = "pbody " + s.kind;
  $("#pbody").innerHTML = s.items
    .map(
      (m, k) =>
        `<figure class="pc" data-k="${k}" style="animation-delay:${k * 70}ms"><img src="${m.img}" alt="${m.t}">${m.v ? `<video src="${m.v}" muted loop playsinline preload="none"></video><span class="play">&#9654;</span>` : ""}<figcaption>${m.t}</figcaption></figure>`,
    )
    .join("");
  $("#pbody")
    .querySelectorAll(".pc")
    .forEach((f) => {
      const v = f.querySelector("video");
      if (v) {
        f.onmouseenter = () => v.play().catch(() => {});
        f.onmouseleave = () => {
          v.pause();
          v.currentTime = 0;
        };
      }
      f.onclick = () => openViewer(s.items, +f.dataset.k, "");
    });
  p.scrollTop = 0;
}
let cp = -1;
function route() {
  const i = DATA.services.findIndex((s) => "#/" + s.slug === location.hash);
  if (i === cp) return;
  cp = i;
  flash(() => {
    if (i >= 0) {
      renderPage(i);
      $("#page").classList.add("on");
      document.body.classList.add("lock");
    } else {
      $("#page").classList.remove("on");
      document.body.classList.remove("lock");
      $("#pbody").innerHTML = "";
    }
  });
}
$("#pback").onclick = () => {
  location.hash = "#services";
};
addEventListener("hashchange", route);
route();

/* ---------- tools: orbiting logos ---------- */
const RINGS = [
  { R: 132, d: 36, a0: 30, idx: [0, 1, 2] },
  { R: 236, d: 54, a0: 45, idx: [3, 4, 5, 6], rev: true },
];
$("#orbit").innerHTML =
  `<div class="oc"><b id="on">AA</b><span id="os">Tools I use</span></div>` +
  RINGS.map(
    (rg) =>
      `<div class="ring" style="--R:${rg.R}px;--d:${rg.d}s;${rg.rev ? "animation-direction:reverse" : ""}">${rg.idx
        .map((ti, k) => {
          const t = DATA.tools[ti],
            a = rg.a0 + k * (360 / rg.idx.length);
          return `<div class="sl" style="--a:${a}deg"><div class="up"><div class="tool" data-i="${ti}" style="--tc:${t.c};${rg.rev ? "animation-direction:normal" : ""}">${t.k}</div></div></div>`;
        })
        .join("")}</div>`,
  ).join("");
$("#orbit").addEventListener("mouseover", (e) => {
  const t = e.target.closest(".tool");
  if (!t) return;
  const d = DATA.tools[t.dataset.i];
  $("#on").textContent = d.k;
  $("#on").style.color = d.c;
  $("#os").textContent = d.n;
});
$("#orbit").addEventListener("mouseout", (e) => {
  if (e.target.closest(".tool")) {
    $("#on").textContent = "AA";
    $("#on").style.color = "";
    $("#os").textContent = "Tools I use";
  }
});
function fitOrbit() {
  const w = $("#orbitw"),
    k = Math.min(1, w.clientWidth / 560);
  $("#orbit").style.transform = `scale(${k})`;
  w.style.height = 560 * k + "px";
}
addEventListener("resize", fitOrbit);
fitOrbit();

/* ---------- motion cursor pack (desktop only) ---------- */
if (matchMedia("(hover:hover)").matches) {
  document.body.insertAdjacentHTML(
    "beforeend",
    '<div id="spot"></div><div id="ring"></div><div id="dot"></div>',
  );
  const ring = $("#ring"),
    dot = $("#dot"),
    spot = $("#spot");
  let mx = innerWidth / 2,
    my = innerHeight / 2,
    rx = mx,
    ry = my,
    sx = mx,
    sy = my,
    lx = mx,
    ly = my;
  const h1 = $(".hero h1");
  h1.innerHTML = [...h1.textContent]
    .map((c) => `<span>${c === " " ? "&nbsp;" : c}</span>`)
    .join("");
  const letters = [...h1.children],
    magnets = [
      ...document.querySelectorAll(
        "nav a,.logo,button,.social a,#lamp,.cta .btn",
      ),
    ];
  addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
    if (Math.hypot(mx - lx, my - ly) > 28) {
      lx = mx;
      ly = my;
      const s = document.createElement("span");
      s.className = "sp";
      s.textContent = "✦";
      s.style.cssText = `left:${mx}px;top:${my}px;color:${["var(--gold)", "#f0b44a", "#e9a5a5", "#3aa0ff", "#22c55e"][(Math.random() * 5) | 0]};--x:${(Math.random() - 0.5) * 70}px;--y:${20 + Math.random() * 50}px`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
    if (scrollY < 900)
      letters.forEach((l) => {
        const r = l.getBoundingClientRect(),
          d = Math.hypot(
            mx - (r.left + r.width / 2),
            my - (r.top + r.height / 2),
          ),
          k = Math.max(0, 1 - d / 160);
        l.style.transform = `translateY(${-k * 22}px) scale(${1 + k * 0.3})`;
        l.style.color = k > 0.35 ? "var(--gold)" : "";
      });
    magnets.forEach((m) => {
      const r = m.getBoundingClientRect(),
        dx = mx - (r.left + r.width / 2),
        dy = my - (r.top + r.height / 2);
      m.style.translate =
        Math.hypot(dx, dy) < 90 ? `${dx * 0.35}px ${dy * 0.35}px` : "0 0";
      m.style.transition = "translate .25s";
    });
    const ax = mx / innerWidth - 0.5,
      ay = my / innerHeight - 0.5;
    $(".me").style.translate = `${ax * -30}px ${ay * -16}px`;
    $(".role").style.translate = `${ax * 14}px ${ay * 8}px`;
    ring.classList.toggle(
      "big",
      !!e.target.closest("a,button,#lamp,.door,.reel,.pc,.tool,.btn"),
    );
  });
  addEventListener("click", (e) => {
    const r = document.createElement("i");
    r.className = "rip";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 800);
  });
  (function loop() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    sx += (mx - sx) * 0.06;
    sy += (my - sy) * 0.06;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    spot.style.transform = `translate(${sx}px,${sy}px)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- creative journey: scroll moves the timeline, light follows ---------- */
let jp = 0,
  jidx = -1;
(function jLoop() {
  const sec = $("#jsec"),
    r = sec.getBoundingClientRect();
  document.body.classList.toggle("injr", r.top < 50 && r.bottom > 50);
  if (r.bottom > 0 && r.top < innerHeight) {
    const p = Math.max(
        0,
        Math.min(1, -r.top / (sec.offsetHeight - innerHeight)),
      ),
      items = [...$("#journey").children],
      n = items.length,
      ih = innerHeight * 0.36;
    jp += (p - jp) * 0.08;
    const pos = jp * (n - 1);
    const wh = $(".jwrap").clientHeight || innerHeight;
    $("#journey").style.transform =
      `translateY(${wh / 2 - (pos + 0.5) * ih}px)`;
    items.forEach((it, k) => {
      const f = 1 - Math.min(1, Math.abs(k - pos));
      it.style.opacity = 0.2 + 0.8 * f;
      it.style.transform = `translateX(${(1 - f) * 30}px) scale(${0.92 + 0.08 * f})`;
      it.classList.toggle("act", f > 0.6);
    });
    const idx = Math.round(pos),
      j = DATA.journey[idx];
    if (idx !== jidx) {
      jidx = idx;
      const y = $("#yr");
      y.textContent = j.y;
      y.classList.remove("roll");
      void y.offsetWidth;
      y.classList.add("roll");
      $(".jstick").style.setProperty("--jl", j.c);
      $("#jc").textContent =
        String(idx + 1).padStart(2, "0") + " / " + String(n).padStart(2, "0");
    }
    $("#jf").style.height = jp * 100 + "%";
    $(".jglow").style.setProperty("--gx", 28 + Math.sin(jp * 7) * 12 + "%");
    $(".jglow").style.setProperty("--gy", 18 + jp * 64 + "%");
  }
  requestAnimationFrame(jLoop);
})();

/* ---------- hero photo travels to About (one photo, moves as you scroll) ---------- */
(function () {
  const mv = $("#mover"),
    im = mv.querySelector("img"),
    slot = $("#slot"),
    ps = $("#pslot");
  let a,
    b,
    sm = 0,
    n = 0;
  const box = (el) => {
    let x = 0,
      y = 0,
      e = el;
    while (e) {
      x += e.offsetLeft;
      y += e.offsetTop;
      e = e.offsetParent;
    }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  };
  const ar = () => {
    if (im.naturalWidth)
      document.documentElement.style.setProperty(
        "--ar",
        im.naturalWidth / im.naturalHeight,
      );
  };
  const measure = () => {
    a = box(slot);
    b = box(ps);
  };
  if (im.complete) ar();
  else im.addEventListener("load", ar);
  addEventListener("load", () => {
    ar();
    measure();
  });
  addEventListener("resize", measure);
  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  (function loop() {
    if (!(n++ % 20)) measure();
    const mob = matchMedia("(max-width:800px)").matches,
      end = Math.max(1, b.y - innerHeight * 0.25),
      t = mob ? 0 : Math.max(0, Math.min(1, scrollY / end));
    sm += (t - sm) * 0.12;
    const e = ease(sm),
      L = (p, q) => p + (q - p) * e,
      bump = Math.sin(e * Math.PI);
    mv.style.width = L(a.w, b.w) + "px";
    mv.style.height = L(a.h, b.h) + "px";
    mv.style.transform = `translate(${L(a.x, b.x)}px,${L(a.y, b.y)}px) rotate(${-bump * 5}deg) scale(${1 + bump * 0.06})`;
    document.body.classList.toggle("landed", mob || sm > 0.96);
    requestAnimationFrame(loop);
  })();
})();

/* ---------- hero extras: focus cards, sparkles, chip parallax ---------- */
(function () {
  const fc = (x) => `<div class="stat"><b>${x.t}</b><span>${x.l}</span></div>`;
  $("#hl").innerHTML = DATA.focus.slice(0, 2).map(fc).join("");
  $("#hr").innerHTML =
    fc(DATA.focus[2]) + '<div class="pill"><i></i>Open to new projects</div>';
  $("#hdust").innerHTML = Array.from(
    { length: 16 },
    () =>
      `<i style="left:${Math.random() * 100}%;top:${20 + Math.random() * 80}%;font-size:${8 + Math.random() * 10}px;animation-delay:${-Math.random() * 10}s;animation-duration:${8 + Math.random() * 8}s">&#10022;</i>`,
  ).join("");
  addEventListener("mousemove", (e) => {
    const x = e.clientX / innerWidth - 0.5,
      y = e.clientY / innerHeight - 0.5;
    document.querySelectorAll(".chip").forEach((c) => {
      const d = +c.dataset.d;
      c.style.translate = `${x * d}px ${y * d}px`;
    });
    $(".halo").style.translate = `${x * -24}px ${y * -16}px`;
  });
})();

/* ===== FEATURED REELS: auto-cycling highlight ===== */
(function () {
  const box = $("#reels"),
    rs = [...box.children],
    cs = $("#case");
  let a = 0,
    over = false,
    shown = -1;
  const pad = (i) => String(i + 1).padStart(2, "0");
  function showCase(i) {
    if (i === shown) return;
    shown = i;
    const r = DATA.reels[i];
    cs.style.setProperty("--rc", RC[i % RC.length]);
    const rows = [
      ["Objective", r.obj],
      ["Role & creative approach", r.role],
      ["Result", r.res],
    ].filter((x) => x[1]);
    cs.className = "case";
    void cs.offsetWidth;
    cs.className = "case swap" + (rows.length ? "" : " solo");
    cs.innerHTML = `<div><p class="ck">Project ${pad(i)}</p><h3>${r.t}</h3><p class="csub">${r.sub || ""}</p>${r.del ? `<div class="ctags">${r.del.map((d) => `<span>${d}</span>`).join("")}</div>` : ""}</div>${rows.length ? `<dl>${rows.map((x) => `<dt>${x[0]}</dt><dd>${x[1]}</dd>`).join("")}</dl>` : ""}`;
  }
  const mark = (i) => {
    rs.forEach((r, k) => r.classList.toggle("auto", k === i && !over));
    $("#rn").textContent = pad(i);
    showCase(i);
  };
  box.addEventListener("mouseenter", () => {
    over = true;
    rs.forEach((r) => r.classList.remove("auto"));
  });
  box.addEventListener("mouseleave", () => {
    over = false;
    mark(a);
  });
  box.addEventListener("mouseover", (e) => {
    const r = e.target.closest(".reel");
    if (r) {
      const i = +r.dataset.i;
      $("#rn").textContent = pad(i);
      showCase(i);
    }
  });
  mark(0);
  setInterval(() => {
    if (over) return;
    a = (a + 1) % rs.length;
    mark(a);
  }, 3600);
})();

/* ===== TOOLS: click a logo -> background becomes that software ===== */
const FR =
  '<rect x="20" y="20" width="760" height="410" rx="16" fill="#0a0d16" stroke="currentColor" stroke-opacity=".7" stroke-width="2"/><circle cx="46" cy="42" r="5" fill="#ff5f57"/><circle cx="64" cy="42" r="5" fill="#febc2e"/><circle cx="82" cy="42" r="5" fill="#28c840"/><path d="M20 60H780" stroke="currentColor" stroke-opacity=".3"/>';
const GR = (id) =>
  `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="currentColor"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs>`;
const PAL = [
  "currentColor",
  "#ec4899",
  "#06b6d4",
  "#f59e0b",
  "#22c55e",
  "#7c3aed",
];
const SCENES = {
  Ps: () =>
    FR +
    GR("gA") +
    `<g fill="currentColor" opacity=".55">${[76, 112, 148, 184, 220].map((y) => `<rect x="36" y="${y}" width="26" height="26" rx="6"/>`).join("")}</g><rect x="80" y="76" width="470" height="334" rx="8" fill="url(#gA)"/><path d="M80 370L190 240 270 310 370 180 550 350V410H80Z" fill="#0a0d16" opacity=".6"/><circle cx="460" cy="140" r="34" fill="#fff" opacity=".75"/><path id="pS" d="M120 150C200 90 280 210 360 130S480 100 520 190" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-dasharray="560" stroke-dashoffset="560"><animate attributeName="stroke-dashoffset" values="560;0;0;560" keyTimes="0;.6;.9;1" dur="4s" repeatCount="indefinite"/></path><circle r="10" fill="none" stroke="#fff" stroke-width="2.5"><animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1;1;0" keyTimes="0;.6;.9;1" calcMode="linear"><mpath href="#pS"/></animateMotion></circle>${[0, 1, 2, 3].map((i) => `<rect x="572" y="${82 + i * 80}" width="188" height="68" rx="10" fill="currentColor" opacity="${i == 1 ? 0.5 : 0.16}"/><rect x="582" y="${92 + i * 80}" width="48" height="48" rx="6" fill="url(#gA)"/><rect x="644" y="${104 + i * 80}" width="100" height="8" rx="4" fill="#fff" opacity=".5"/><rect x="644" y="${122 + i * 80}" width="60" height="6" rx="3" fill="#fff" opacity=".3"/>`).join("")}`,
  Lr: () =>
    FR +
    GR("gB") +
    `<rect x="40" y="76" width="480" height="270" rx="8" fill="url(#gB)"/><circle cx="380" cy="150" r="46" fill="#fff" opacity=".5"/><path d="M40 300L180 200 280 280 380 210 520 320V346H40Z" fill="#0a0d16" opacity=".55"/><polygon points="560,170 580,120 610,90 640,140 670,100 700,150 740,170" fill="currentColor" opacity=".55"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M560 ${200 + i * 32}H750" stroke="#fff" stroke-opacity=".3" stroke-width="3"/><circle cx="600" cy="${200 + i * 32}" r="8" fill="currentColor"><animate attributeName="cx" values="${600 + i * 10};740;580;${600 + i * 10}" dur="${3 + i * 0.7}s" repeatCount="indefinite"/></circle>`).join("")}${[0, 1, 2, 3, 4].map((i) => `<rect x="${40 + i * 96}" y="362" width="88" height="54" rx="6" fill="url(#gB)" opacity="${i == 2 ? 1 : 0.5}"/>`).join("")}`,
  Pr: () =>
    FR +
    GR("gC") +
    `<rect x="40" y="76" width="380" height="190" rx="8" fill="url(#gC)"/><path d="M200 140L252 171 200 202Z" fill="#fff" opacity=".9"/><rect x="440" y="76" width="320" height="190" rx="8" fill="currentColor" opacity=".1"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="456" y="${96 + i * 34}" width="${200 - i * 20}" height="8" rx="4" fill="#fff" opacity=".35"/>`).join("")}${[
      [60, 150],
      [240, 200],
      [100, 120],
      [330, 180],
    ]
      .map(
        (c, i) =>
          `<rect x="${c[0]}" y="${290 + i * 30}" width="${c[1]}" height="22" rx="5" fill="${PAL[i]}" opacity=".85"/><rect x="${c[0] + c[1] + 12}" y="${290 + i * 30}" width="${120 + i * 30}" height="22" rx="5" fill="${PAL[i + 2]}" opacity=".6"/>`,
      )
      .join(
        "",
      )}<g><rect width="3" height="140" y="276" fill="#fff"/><path d="M-7 276H10L1.5 290Z" fill="#fff"/><animateTransform attributeName="transform" type="translate" values="50 0;750 0" dur="5s" repeatCount="indefinite"/></g>`,
  Ae: () =>
    FR +
    GR("gD") +
    `<rect x="40" y="76" width="400" height="230" rx="8" fill="url(#gD)" opacity=".9"/><circle cy="190" fill="#fff" opacity=".85"><animate attributeName="cx" values="100;380;100" dur="4s" repeatCount="indefinite"/><animate attributeName="r" values="18;48;18" dur="4s" repeatCount="indefinite"/></circle><g transform="translate(240 190)"><rect x="-34" y="-34" width="68" height="68" rx="12" fill="none" stroke="#fff" stroke-width="4"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/></rect></g><rect x="460" y="76" width="300" height="230" rx="8" fill="currentColor" opacity=".1"/>${[0, 1, 2, 3].map((i) => `<rect x="40" y="${324 + i * 24}" width="720" height="18" rx="4" fill="currentColor" opacity=".12"/><rect x="${70 + i * 50}" y="${324 + i * 24}" width="${300 - i * 30}" height="18" rx="4" fill="currentColor" opacity=".5"/><rect x="${200 + i * 60}" y="${327 + i * 24}" width="10" height="10" fill="#fff" transform="rotate(45 ${205 + i * 60} ${332 + i * 24})"/>`).join("")}<g><rect width="3" height="110" y="320" fill="#fff"/><animateTransform attributeName="transform" type="translate" values="60 0;740 0" dur="4.5s" repeatCount="indefinite"/></g>`,
  Ai: () =>
    FR +
    `<rect x="80" y="76" width="440" height="334" rx="6" fill="#f2f2f6"/><path d="M130 330C150 120 260 110 300 220S420 340 480 130" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-dasharray="700" stroke-dashoffset="700"><animate attributeName="stroke-dashoffset" values="700;0;0;700" keyTimes="0;.6;.9;1" dur="4.5s" repeatCount="indefinite"/></path>${[
      [130, 330],
      [300, 220],
      [480, 130],
    ]
      .map(
        (p, i) =>
          `<rect x="${p[0] - 6}" y="${p[1] - 6}" width="12" height="12" fill="#fff" stroke="currentColor" stroke-width="2"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${0.15 + i * 0.2};${0.25 + i * 0.2};.9;1" dur="4.5s" repeatCount="indefinite"/></rect>`,
      )
      .join(
        "",
      )}<path d="M300 220L360 160M300 220L240 280" stroke="currentColor" stroke-dasharray="4 4"/>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${560 + (i % 3) * 66}" y="${90 + Math.floor(i / 3) * 66}" width="56" height="56" rx="10" fill="${PAL[i]}" opacity=".85"/>`).join("")}`,
  Cv: () =>
    FR +
    [0, 1, 2, 3, 4, 5]
      .map((i) => {
        const x = 60 + (i % 3) * 240,
          y = 84 + Math.floor(i / 3) * 170;
        return `<g transform="translate(${x} ${y})"><rect width="220" height="150" rx="14" fill="${PAL[i]}" opacity=".8"/><circle cx="50" cy="50" r="22" fill="#fff" opacity=".7"/><rect x="90" y="40" width="100" height="10" rx="5" fill="#fff" opacity=".8"/><rect x="90" y="60" width="70" height="8" rx="4" fill="#fff" opacity=".5"/><animateTransform attributeName="transform" type="translate" values="${x} ${y};${x} ${y - 12};${x} ${y}" dur="${2.5 + i * 0.4}s" repeatCount="indefinite"/></g>`;
      })
      .join(""),
  Cc: () =>
    FR +
    GR("gE") +
    `<rect x="320" y="76" width="160" height="236" rx="22" fill="url(#gE)"/><path d="M380 170L424 194 380 218Z" fill="#fff"/>${[0, 1, 2].map((i) => `<rect x="${60 + i * 30}" y="${332 + i * 26}" width="${200 + i * 60}" height="20" rx="5" fill="${PAL[i]}" opacity=".8"/><rect x="${300 + i * 80}" y="${332 + i * 26}" width="${160 + i * 40}" height="20" rx="5" fill="${PAL[i + 3]}" opacity=".6"/>`).join("")}<g><rect width="3" height="96" y="324" fill="#fff"/><animateTransform attributeName="transform" type="translate" values="50 0;740 0" dur="4.5s" repeatCount="indefinite"/></g>`,
};
const matchMediaTouch = () => matchMedia("(hover:none)").matches;
let activeTool = -1;
const tsec = $("#tools"),
  tbg = $("#tbg");
function toolOn(i, x, y) {
  const t = DATA.tools[i];
  activeTool = i;
  tsec.style.setProperty("--tc", t.c);
  tsec.classList.add("on");
  const f = document.createElement("div");
  f.className = "tflood";
  f.style.cssText = `--tc:${t.c};--fx:${x}px;--fy:${y}px`;
  tbg.appendChild(f);
  setTimeout(
    () =>
      [...tbg.querySelectorAll(".tflood")]
        .slice(0, -1)
        .forEach((n) => n.remove()),
    1200,
  );
  tbg.querySelectorAll(".tscene").forEach((n) => {
    n.classList.add("out");
    setTimeout(() => n.remove(), 600);
  });
  const s = document.createElement("div");
  s.className = "tscene";
  s.style.color = t.c;
  s.innerHTML = t.video
    ? `<video src="${t.video}" autoplay muted loop playsinline></video>`
    : `<svg viewBox="0 0 800 450">${SCENES[t.k]()}</svg>`;
  tbg.appendChild(s);
  $("#tmq").innerHTML =
    `<span>${(t.k + " ").repeat(16)}</span><span class="r">${(t.n.toUpperCase() + " &bull; ").repeat(8)}</span>`;
  $("#tname").textContent = t.n;
  $("#tsub").textContent =
    (matchMediaTouch() ? "Tap" : "Hover") + " another logo to switch software";
}
function toolOff() {
  activeTool = -1;
  tsec.classList.remove("on");
  $("#tname").textContent = "";
  $("#tsub").textContent =
    (matchMediaTouch() ? "Tap" : "Hover") +
    " a logo to step inside the software";
  tbg.querySelectorAll(".tflood,.tscene").forEach((n) => {
    n.classList.add("out");
    setTimeout(() => n.remove(), 700);
  });
}
/* desktop: HOVER a logo -> background becomes that software, leave the orbit -> back to normal. touch screens: tap */
let offT;
if (matchMedia("(hover:hover)").matches) {
  $("#orbit").addEventListener("mouseover", (e) => {
    const t = e.target.closest(".tool");
    if (!t) return;
    clearTimeout(offT);
    const i = +t.dataset.i;
    if (i === activeTool) return;
    const r = tsec.getBoundingClientRect(),
      b = t.getBoundingClientRect();
    toolOn(i, b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top);
  });
  $("#orbitw").addEventListener("mouseenter", () => clearTimeout(offT));
  $("#orbitw").addEventListener("mouseleave", () => {
    offT = setTimeout(toolOff, 450);
  });
} else {
  $("#orbit").addEventListener("click", (e) => {
    const t = e.target.closest(".tool");
    if (!t) return;
    const i = +t.dataset.i,
      r = tsec.getBoundingClientRect();
    if (activeTool === i) toolOff();
    else toolOn(i, e.clientX - r.left, e.clientY - r.top);
  });
}
$("#tclose").onclick = toolOff;

/* ===== TESTIMONIALS: colourful rows, speed up while you scroll ===== */
const TG = [
  ["#7c3aed", "#ec4899"],
  ["#06b6d4", "#3b82f6"],
  ["#f97316", "#ef4444"],
  ["#10b981", "#14b8a6"],
  ["#f59e0b", "#f43f5e"],
  ["#8b5cf6", "#06b6d4"],
];
const tcard = (t, i) => {
  const g = TG[i % 6];
  return `<div class="tcard" style="--g1:${g[0]};--g2:${g[1]}"><span class="qm">&ldquo;</span><div class="who"><i class="av">${t.n[0]}</i><div><b>${t.n}</b><small>${t.r || ""}</small></div></div><p>${t.d}</p><div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div>`;
};
const setA = DATA.testimonials.map(tcard).join(""),
  setB = DATA.testimonials
    .slice()
    .reverse()
    .map((t, i) => tcard(t, i + 2))
    .join("");
if (DATA.testimonials.length) {
  $("#mt1").innerHTML = setA + setA;
  $("#mt2").innerHTML = setB + setB;
} else {
  $("#testimonials").remove();
}
(function () {
  let last = scrollY,
    vel = 0;
  (function loop() {
    vel += (scrollY - last - vel) * 0.12;
    last = scrollY;
    const rate = 1 + Math.max(-7, Math.min(7, vel * 0.4));
    document.querySelectorAll(".mtrack").forEach((t) => {
      const a = t.getAnimations()[0];
      if (a) a.playbackRate = rate;
    });
    requestAnimationFrame(loop);
  })();
})();

$("#tsub").textContent =
  (matchMediaTouch() ? "Tap" : "Hover") + " a logo to step inside the software";

/* ===== CONTACT (clickable) ===== */
$("#cform").action = "mailto:" + C.email;
const clink = (i, l, v, href) =>
  `<li><i>${i}</i><div><small>${l}</small><a href="${href}">${v}</a></div></li>`;
$("#clist").innerHTML =
  clink("&#9993;", "Email", C.email, "mailto:" + C.email) +
  clink("&#9742;", "Phone / WhatsApp", C.phone, tel(C.phone)) +
  clink("&#9742;", "Bahrain Phone", C.bahrain, tel(C.bahrain)) +
  "<li><i>&#10022;</i><div><small>Availability</small>Open for new projects</div></li>";
$("#fcontact").innerHTML =
  `<a href="mailto:${C.email}">${C.email}</a><a href="${tel(C.phone)}">Phone: ${C.phone}</a><a href="${tel(C.bahrain)}">Bahrain Phone: ${C.bahrain}</a>`;

/* ===== CERTIFICATES ===== */
const CCOL = ["#7c3aed", "#06b6d4", "#f59e0b", "#ec4899", "#22c55e", "#ff6a3d"];
$("#certs").innerHTML = DATA.certificates
  .map(
    (c, i) =>
      `<div class="cert rv" data-i="${i}" style="--cc:${CCOL[i % 6]}">${c.sample ? '<b class="rib">SAMPLE</b>' : ""}<div class="cimg">${c.img ? `<img src="${c.img}" alt="${c.t}">` : `<div class="sheet"><i>&#10022;</i><u>CERTIFICATE</u><em>of Achievement</em><span></span><span></span></div>`}</div><div class="meta"><h4>${c.t}</h4><span>${c.org || ""}${c.year ? " &middot; " + c.year : ""}</span>${c.img ? "<em>View certificate &#8599;</em>" : c.pdf ? "<em>Open PDF &#8599;</em>" : ""}</div></div>`,
  )
  .join("");
document.querySelectorAll(".cert.rv").forEach((el) => io.observe(el));
document.querySelectorAll(".cert").forEach((el) => {
  const c = DATA.certificates[+el.dataset.i];
  el.onmousemove = (e) => {
    const r = el.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-6px)`;
  };
  el.onmouseleave = () => {
    el.style.transform = "";
  };
  el.onclick = () => {
    if (c.img) {
      const list = DATA.certificates
        .filter((k) => k.img)
        .map((k) => ({
          t: k.t + (k.org ? " - " + k.org : ""),
          img: k.img,
          v: "",
        }));
      openViewer(
        list,
        list.findIndex((k) => k.img === c.img),
        "",
      );
    } else if (c.pdf) window.open(c.pdf, "_blank");
  };
});
