// ===================== CURSOR =====================
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);}
animRing();
document.querySelectorAll('a,button,.sidebar-nav-item,.budget-option,.pp-card,.proj-row-header,.project-row-header').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));
});
 
//! ===================== PRELOADER =====================
const BORN_YEAR = 1999;
(function(){
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('pl-bar');
  const counter = document.getElementById('pl-counter');
  const yearEl = document.getElementById('pl-year');
  const plBorn = document.getElementById('pl-born');
  const plLine = document.getElementById('pl-line');
  const texts = ['pl-t1','pl-t2','pl-t3','pl-t4','pl-t5','pl-t6'];
  const imgs = document.querySelectorAll('.pl-img');
 
  let progress = 0;
  let imgIdx = 0;
  imgs[0].classList.add('active');
  const imgInterval = setInterval(()=>{
    imgs[imgIdx].classList.remove('active');
    imgIdx = (imgIdx+1)%imgs.length;
    imgs[imgIdx].classList.add('active');
  },600);
 
  // Animate texts in
  setTimeout(()=>{
    texts.forEach((id,i)=>{
      setTimeout(()=>{
        const el = document.getElementById(id);
        if(el) el.style.transform='translateY(0)';
        el.style.transition=`transform 0.8s cubic-bezier(0.165,0.84,0.44,1) ${i*0.05}s`;
      },i*100);
    });
  },200);
 
  // Line sweep
  setTimeout(()=>{
    plLine.style.opacity='1';
    plLine.style.transition='left 1.2s linear';
    plLine.style.left='100%';
  },400);
 
  // Counter & born date
  setTimeout(()=>{
    document.getElementById('pl-counter').style.opacity='1';
    document.getElementById('pl-counter').style.transition='opacity 0.4s';
    plBorn.style.opacity='1';
    plBorn.style.transition='opacity 0.4s';
    yearEl.textContent = '0';
    const target = BORN_YEAR;
    const dur = 2000;
    const start = Date.now();
    function tick(){
      const t = Math.min(1,(Date.now()-start)/dur);
      const eased = 1-Math.pow(1-t,3);
      const val = Math.round(eased * target);
      yearEl.textContent = val;
      counter.textContent = Math.round(t*100);
      bar.style.width = (t*100)+'%';
      if(t<1) requestAnimationFrame(tick);
      else finish();
    }
    requestAnimationFrame(tick);
  },600);
 
  function finish(){
    clearInterval(imgInterval);
    setTimeout(()=>{
      texts.forEach((id,i)=>{
        setTimeout(()=>{
          const el = document.getElementById(id);
          if(el){el.style.transform='translateY(-110%)';el.style.transition=`transform 0.6s cubic-bezier(0.55,0,1,0.45) ${i*0.04}s`;}
        },i*60);
      });
    },400);
    setTimeout(()=>{
      preloader.style.transition='opacity 0.8s ease';
      preloader.style.opacity='0';
      setTimeout(()=>{preloader.style.display='none';startHeroAnim();},800);
    },1200);
  }
})();
 
//! ===================== HERO ANIMATIONS =====================
function startHeroAnim() {
  const eyebrow  = document.getElementById('h-eyebrow');
  const name     = document.getElementById('h-name');
  const nameInner= name.querySelector('.hero-name-inner');
  const role     = document.getElementById('h-role');
  const desc     = document.getElementById('h-desc');
  const cta      = document.getElementById('h-cta');
  const msBadge  = document.getElementById('ms-hero-badge');
 
  function anim(el, delay, props) {
    if (!el) return;
    setTimeout(() => {
      el.style.transition = `opacity 0.9s cubic-bezier(0.165,0.84,0.44,1),transform 0.9s cubic-bezier(0.165,0.84,0.44,1)`;
      Object.assign(el.style, props);
    }, delay);
  }
 
  const OFFSET = 500; // ← 0.5 s delay after preloader exits
 
  if (msBadge) anim(msBadge, OFFSET + 0,   { opacity: '1', transform: 'translateY(0)' });
  anim(eyebrow,              OFFSET + 120,  { opacity: '1', transform: 'translateY(0)' });
  setTimeout(() => {
    name.style.opacity = '1';
    nameInner.style.transition = 'transform 1s cubic-bezier(0.165,0.84,0.44,1)';
    nameInner.style.transform  = 'translateY(0)';
  }, OFFSET + 320);
  anim(role, OFFSET + 620,  { opacity: '1', transform: 'translateY(0)' });
  anim(desc, OFFSET + 820,  { opacity: '1', transform: 'translateY(0)' });
  anim(cta,  OFFSET + 1020, { opacity: '1', transform: 'translateY(0)' });
}
 


//! ===================== 3D ABOUT CANVAS =====================
(function(){
  const canvas = document.getElementById('about-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
 
  function resize(){canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight;}
  resize();
  new ResizeObserver(resize).observe(canvas);
 
  const nodes = [];
  const count = 60;
  const PRIMARY = '#e7fe52';
  const ACCENT = '#fe7b52';
 
  // GIS grid + orbiting particles
  for(let i=0;i<count;i++){
    nodes.push({
      x:Math.random(),y:Math.random(),z:Math.random(),
      vx:(Math.random()-0.5)*0.002,vy:(Math.random()-0.5)*0.002,
      r:Math.random()*2+0.5,
      color:Math.random()>0.7?ACCENT:PRIMARY,
      opacity:Math.random()*0.6+0.2
    });
  }
 
  // Globe wireframe params
  let rot=0;
  const R = 0;// will use canvas relative
 
  function draw(){
    const W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    rot += 0.005;
 
    const cx=W/2, cy=H/2;
    const rad = Math.min(W,H)*0.32;
 
    // Draw globe wireframe
    ctx.save();
    ctx.strokeStyle = 'rgba(231,254,82,0.15)';
    ctx.lineWidth = 0.5;
 
    // Latitude lines
    for(let lat=-80;lat<=80;lat+=20){
      const y = Math.sin(lat*Math.PI/180)*rad;
      const r2 = Math.cos(lat*Math.PI/180)*rad;
      ctx.beginPath();
      for(let lng=0;lng<=360;lng+=5){
        const a = (lng+rot*180/Math.PI)*Math.PI/180;
        const x3d = Math.cos(a)*r2;
        const z3d = Math.sin(a)*r2;
        const persp = 1.2/(1.2-z3d/rad*0.3);
        const px = cx + x3d*persp;
        const py = cy + y*persp;
        if(lng===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
      }
      ctx.stroke();
    }
 
    // Longitude lines
    for(let lng=0;lng<360;lng+=30){
      const a = (lng+rot*180/Math.PI)*Math.PI/180;
      ctx.beginPath();
      for(let lat=-90;lat<=90;lat+=5){
        const y2 = Math.sin(lat*Math.PI/180)*rad;
        const r2 = Math.cos(lat*Math.PI/180)*rad;
        const x3d = Math.cos(a)*r2;
        const z3d = Math.sin(a)*r2;
        const persp = 1.2/(1.2-z3d/rad*0.3);
        const px = cx + x3d*persp;
        const py = cy + y2*persp;
        if(lat===-90) ctx.moveTo(px,py); else ctx.lineTo(px,py);
      }
      ctx.stroke();
    }
    ctx.restore();
 
    // Grid overlay (GIS feel)
    ctx.save();
    ctx.strokeStyle='rgba(231,254,82,0.04)';
    ctx.lineWidth=0.5;
    const gStep=40;
    for(let x=0;x<W;x+=gStep){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=gStep){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    ctx.restore();
 
    // Particles
    nodes.forEach(n=>{
      n.x += n.vx; n.y += n.vy;
      if(n.x<0||n.x>1) n.vx*=-1;
      if(n.y<0||n.y>1) n.vy*=-1;
    });
 
    // Connections
    ctx.save();
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx=(nodes[i].x-nodes[j].x)*W;
        const dy=(nodes[i].y-nodes[j].y)*H;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<100){
          ctx.strokeStyle=`rgba(231,254,82,${(1-dist/100)*0.15})`;
          ctx.lineWidth=0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x*W,nodes[i].y*H);
          ctx.lineTo(nodes[j].x*W,nodes[j].y*H);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
 
    nodes.forEach(n=>{
      ctx.save();
      ctx.fillStyle=n.color;
      ctx.globalAlpha=n.opacity;
      ctx.beginPath();
      ctx.arc(n.x*W,n.y*H,n.r,0,Math.PI*2);
      ctx.fill();
      ctx.restore();
    });
 
    // Center glow
    const grd = ctx.createRadialGradient(cx,cy,0,cx,cy,rad*0.8);
    grd.addColorStop(0,'rgba(231,254,82,0.04)');
    grd.addColorStop(1,'transparent');
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,W,H);
 
    requestAnimationFrame(draw);
  }
  draw();
})();
 
//! ===================== PROJECTS DATA =====================
const PROJECTS_DATA = [
  {title: 'NestFinder',
  cat: 'Frontend Development',
  year: '2025',
  status: 'completed',
  contrib: 'Full frontend architecture, interactive map integration (Leaflet), apartment designer system (Konva.js), advanced filtering system, comparison feature, saved properties system, responsive UI design, UX optimization, modular JavaScript architecture',
  problem: 'Needed a modern rental platform concept that combines property search, map-based exploration, and interactive design tools for users to visualize and compare living spaces',
  tools: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet.js', 'Konva.js', 'Lucide Icons', 'Google Fonts'],
  site: 'case-study.html?project=nestfinder',
  github: 'https://github.com/hossam43/nest-finder',
  filters: ['all', 'Development']}
  ,
  {title:'CryptoPrecision',cat:'Design',year:'2023',status:'completed',
   contrib:'Landing page design, UI/UX, frontend development, Figma prototyping',
   problem:'Required a visually compelling crypto trading platform landing page that converts visitors',
   tools:['HTML5','CSS3','Adobe Photoshop','Figma'],
   site:'case-study.html?project=crypto-precision',github:'https://github.com/hossam43/crybtobrecison-project', caseStudy: true,
   img:'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=60&fit=crop',
   filters:['all','Design']},

  {title:'ASL Academy',cat:'Development',year:'2023',status:'completed',
   contrib:'Full frontend build, animated preloader, responsive design, SEO optimization, deployment',
   problem:'Needed a fast, modern online presence for a language academy serving students across Egypt',
   tools:['HTML5','CSS3','JavaScript','Figma','GitHub'],
   site:'https://aslacademy.online',github:'https://github.com/hossam43/Asl-academy.git',
   img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=60&fit=crop',
   filters:['all','Development']},

  {title:'Omnifood',cat:'Development',year:'2022',status:'completed',
   contrib:'Responsive landing page, image optimization, SEO, cross-device compatibility',
   problem:'Sophisticated landing page for a food delivery service requiring strong visual impact',
   tools:['HTML5','CSS3','JavaScript','Figma','Squoosh'],
   site:'https://hossam43.github.io/Omnifood-Project/',github:'https://github.com/hossam43/Omnifood-Project',
   img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=60&fit=crop',
   filters:['all','Design','Development']},

  {title:'Medicine Market',cat:'Development',year:'2023',status:'completed',
   contrib:'E-commerce UI, payment gateway integration, user authentication, responsive design',
   problem:'Online marketplace for medical products requiring secure payment and smooth UX',
   tools:['HTML5','CSS3','JavaScript','Figma'],
   site:'case-study.html?project=medicine-market',github:'https://github.com/hossam43/medicine-project',
   img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=60&fit=crop',
   filters:['all','Development']},

  {title:'GIS City Viewer',cat:'Geospatial',year:'2024',status:'in-progress',
   contrib:'Interactive 3D city map, geospatial data visualization, custom map layers',
   problem:'Municipality needed an interactive platform to visualize urban planning data spatially',
   tools:['Mapbox GL','React','Three.js','GeoJSON'],
   site:'case-study.html?project=gis-city-viewer',github:'#',
   img:'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=60&fit=crop',
   filters:['all','Geospatial','3D Experience']},

  {title:'Cloud Dashboard',cat:'Cloud',year:'2024',status:'in-progress',
   contrib:'Infrastructure visualization, real-time monitoring UI, cost optimization analysis',
   problem:'SaaS company needed visual overview of their multi-cloud architecture',
   tools:['React','D3.js','AWS SDK','Chart.js'],
   site:'#',github:'#',
   img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=60&fit=crop',
   filters:['all','Cloud','Development']},

  {title:'Red Builder',cat:'Design',year:'2023',status:'completed',
   contrib:'Real estate landing page, brand identity, image optimization, UI/UX design',
   problem:'Real estate firm needed a premium online presence to attract high-end clients',
   tools:['HTML5','CSS3','JavaScript','Adobe Photoshop'],
   site:'#',github:'#',
   img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=60&fit=crop',
   filters:['all','Design']},

  {title:'FitFlex Gym',cat:'Development',year:'2022',status:'completed',
   contrib:'Responsive website, user-friendly navigation, fast loading, modern aesthetic',
   problem:'Fitness center needed a digital platform to attract new members and showcase services',
   tools:['HTML5','CSS3','JavaScript'],
   site:'#',github:'#',
   img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=60&fit=crop',
   filters:['all','Development']},

  {title:'3D Portfolio Viz',cat:'3D Experience',year:'2024',status:'in-progress',
   contrib:'Custom WebGL scene, Three.js particle systems, GSAP scroll animations',
   problem:'Showcase immersive 3D capabilities for premium clients in creative industries',
   tools:['Three.js','WebGL','GSAP','GLSL'],
   site:'#',github:'#',
   img:'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=60&fit=crop',
   filters:['all','3D Experience']},

  {title:'Geospatial Analytics',cat:'Geospatial',year:'2024',status:'in-progress',
   contrib:'Spatial data pipeline, interactive choropleth maps, filtering system, data storytelling',
   problem:'NGO needed accessible visualization of demographic & environmental data across regions',
   tools:['Leaflet','Python','GeoJSON','D3.js'],
   site:'#',github:'#',
   img:'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=600&q=60&fit=crop',
   filters:['all','Geospatial']},
];
 
// ===================== MAIN PROJECTS LIST =====================
const mainList = document.getElementById('main-projects-list');
PROJECTS_DATA.slice(0,6).forEach((p,i)=>{
  const row = document.createElement('div');
  row.className = 'project-row';
  row.innerHTML = `
    <div class="project-row-header" data-idx="${i}">
      <span class="proj-num">0${i+1}</span>
      <h3 class="proj-title">${p.title}</h3>
      <div class="proj-tags">
        ${p.filters.filter(f=>f!=='all').map(f=>`<span class="proj-tag">${f}</span>`).join('')}
      </div>
      <span class="proj-year">${p.year}</span>
      <svg class="proj-arrow" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/></svg>
    </div>
    <div class="project-row-body" id="prb-${i}">
      <div class="project-row-inner">
        <div class="proj-details">
          <div class="proj-detail-row">
            <span class="proj-detail-label">My Contribution</span>
            <span class="proj-detail-val">${p.contrib}</span>
          </div>
          <div class="proj-detail-row">
            <span class="proj-detail-label">Business Problem Solved</span>
            <span class="proj-detail-val">${p.problem}</span>
          </div>
          <div class="proj-detail-row">
            <span class="proj-detail-label">Tools Used</span>
            <div class="proj-tools">${p.tools.map(t=>`<span class="proj-tool">${t}</span>`).join('')}</div>
          </div>
          <div class="proj-links">
          // If case study link is provided, show "Case Study" instead of "Live Demo"
            <a href="${p.site}" class="proj-link" ${p.caseStudy ? '' : 'target="_blank"'}>
            ${p.caseStudy ? '↗ Case Study' : '↗ Live Demo'}
            </a>
            <a href="${p.github}" class="proj-link" target="_blank">⌥ GitHub</a>
          </div>
        </div>
        <div class="proj-image-box">
          <div class="proj-image-placeholder">
            <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;opacity:0.7;" alt="${p.title}"/>
          </div>
        </div>
      </div>
    </div>`;
  mainList.appendChild(row);
 
  row.querySelector('.project-row-header').addEventListener('click',()=>{
    const body = document.getElementById(`prb-${i}`);
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.project-row-body').forEach(b=>b.classList.remove('open'));
    if(!isOpen) body.classList.add('open');
  });
});
 
// ===================== PROJECTS PAGE =====================
const ppGrid = document.getElementById('pp-grid');
PROJECTS_DATA.forEach((p,i)=>{
  const card = document.createElement('div');
  card.className = 'pp-card';
  card.dataset.filters = JSON.stringify(p.filters);
  card.dataset.img = p.img;
  card.dataset.title = p.title;
  const statClass = p.status==='completed'?'completed':'in-progress';
  const statLabel = p.status==='completed'?'Completed':'In Progress';
  card.innerHTML = `
    <div class="pp-card-cat">${p.cat}</div>
    <h3 class="pp-card-title">${p.title}</h3>
    <div class="pp-card-date">${p.year}</div>
    <div class="pp-card-status ${statClass}">${statLabel}</div>
    <p class="pp-card-contrib">${p.contrib}</p>
    <div class="pp-card-tools">${p.tools.map(t=>`<span class="pp-card-tool">${t}</span>`).join('')}</div>
    <div class="pp-card-links">
      <a href="${p.site}" class="pp-card-link" ${p.caseStudy ? '' : 'target="_blank"'}>
      ${p.caseStudy ? 'Case Study ↗' : 'Live Demo ↗'}
    </a>
      <a href="${p.github}" class="pp-card-link" target="_blank">GitHub ↗</a>
    </div>`;
  ppGrid.appendChild(card);
});
 
// Filter
document.querySelectorAll('.pp-filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.pp-filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.pp-card').forEach(card=>{
      const filters = JSON.parse(card.dataset.filters);
      if(filter==='all'||filters.includes(filter)){
        card.classList.remove('hidden');
        card.style.animation='none';
        card.offsetHeight;
        card.style.animation='fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
 
// Image reveal on hover
const imgReveal = document.getElementById('img-reveal');
const imgRevealImg = document.getElementById('img-reveal-img');
ppGrid.addEventListener('mousemove',e=>{
  const card = e.target.closest('.pp-card');
  if(card && card.dataset.img){
    imgReveal.classList.add('visible');
    imgRevealImg.src = card.dataset.img;
    imgReveal.style.left = e.clientX+'px';
    imgReveal.style.top = e.clientY+'px';
  } else {
    imgReveal.classList.remove('visible');
  }
});
ppGrid.addEventListener('mouseleave',()=>imgReveal.classList.remove('visible'));
 
// Open/close projects page
document.getElementById('more-projects-btn').addEventListener('click',()=>{
  document.getElementById('projects-page').classList.add('open');
  document.body.style.overflow='hidden';
});
document.getElementById('pp-close-btn').addEventListener('click',()=>{
  document.getElementById('projects-page').classList.remove('open');
  document.body.style.overflow='';
});
 
// ===================== SIDEBAR SCROLL SPY =====================
const sections = ['home','about','projects','services','contact'];
const sectionEls = sections.map(s=>document.getElementById('section-'+s));
const navItems = document.querySelectorAll('.sidebar-nav-item');
 
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = entry.target.id.replace('section-','');
      navItems.forEach(ni=>{
        ni.classList.toggle('active', ni.dataset.section===id);
      });
    }
  });
},{threshold:0.3});
sectionEls.forEach(s=>{if(s)observer.observe(s);});
 
// Smooth scroll sidebar links
document.querySelectorAll('[href^="#section-"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
 
// ===================== MOBILE MENU =====================
document.getElementById('mob-menu-btn').addEventListener('click',()=>{
  document.getElementById('mobile-menu').classList.add('open');
});
document.getElementById('mob-menu-close').addEventListener('click',()=>{
  document.getElementById('mobile-menu').classList.remove('open');
});
document.querySelectorAll('#mobile-menu a').forEach(a=>{
  a.addEventListener('click',()=>document.getElementById('mobile-menu').classList.remove('open'));
});
 
// ===================== SCROLL REVEAL =====================
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
 
// ===================== BUDGET SELECTOR =====================
let selectedBudget = '';
document.querySelectorAll('.budget-option').forEach(opt=>{
  opt.addEventListener('click',()=>{
    document.querySelectorAll('.budget-option').forEach(o=>o.classList.remove('selected'));
    opt.classList.add('selected');
    selectedBudget = opt.dataset.val;
  });
});
 
// ===================== CONTACT FORM =====================
document.getElementById('form-submit-btn').addEventListener('click',()=>{
  let valid = true;
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const service = document.getElementById('f-service').value;
  const msg = document.getElementById('f-msg').value.trim();
 
  ['fg-name','fg-email','fg-service','fg-msg'].forEach(id=>{
    document.getElementById(id).classList.remove('has-error');
  });
 
  if(!name){document.getElementById('fg-name').classList.add('has-error');valid=false;}
  if(!email||!/\S+@\S+\.\S+/.test(email)){document.getElementById('fg-email').classList.add('has-error');valid=false;}
  if(!service){document.getElementById('fg-service').classList.add('has-error');valid=false;}
  if(!msg){document.getElementById('fg-msg').classList.add('has-error');valid=false;}
 
  if(valid){
    document.getElementById('contact-form-wrap').style.display='none';
    document.getElementById('form-success').classList.add('show');
  }
});
 
// Style fadeIn animation for filter
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}`;
document.head.appendChild(style);




// -------------------------------------------------------------------------------------

