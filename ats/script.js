const projects = [
  { name: 'ScholarsMerit', description: 'Dynamic online platform committed to fostering holistic growth in education and professional spheres.', logo: 'https://scholarsmerit.com/assets/images/logo-3.svg', category: 'eCommerce', url: 'https://scholarsmerit.com' },
  { name: 'WebOne ScholarsMerit', description: 'Website experience for ScholarsMerit with clean presentation, responsive sections, and smooth navigation.', logo: 'images/Webone_logo.png', category: 'Website', url: 'https://webone.scholarsmerit.com/' },
  { name: 'Koescore', description: 'Test series platform with dynamic partner cards, test management UI, and responsive design for students.', logo: 'https://koescore.com/wp-content/uploads/2024/08/Vector-Smart-Object-1-1.png', category: 'EdTech', url: 'https://koescore.com' },
  { name: 'Luminorr', description: 'Custom-built website focused on performance, clean UI, and conversion-driven user experience.', logo: 'images/luminorr-logo.webp', category: 'Business', url: 'https://luminorr.com' },
  { name: 'TaskOne', description: 'Modern task management platform with intuitive interface and seamless user experience.', logo: 'https://taskone.world/img/taskonelogo_svg.svg', category: 'Productivity', url: 'https://taskone.world' },
  { name: 'TaskOne AI', description: 'AI-focused TaskOne website with modern product messaging, polished layout, and conversion-ready interface.', logo: 'https://taskone.world/img/taskonelogo_svg.svg', category: 'AI Website', url: 'https://ai.taskone.world/' },
  { name: 'iTechWorks', description: 'Tech solutions website with clean design and optimized performance.', logo: 'https://itechworks.com.au/assets/images/itechlogo.svg', category: 'Technology', url: 'https://itechworks.com.au' },
  { name: 'eTech Blogs', description: 'Content platform with engaging UI and optimized content delivery.', logo: 'https://sumits.me/etechblogs/wp-content/uploads/2023/05/eTech_blogs_logo-1.png', category: 'Media', url: 'https://sumits.me/etechblogs' },
  { name: 'Koekraft LMS', description: 'Learning management system with comprehensive course management.', logo: 'https://sumits.me/Koekraftlms/assets/img/logo/logo.svg', category: 'EdTech', url: 'https://sumits.me/Koekraftlms' },
  { name: 'KoeCards', description: 'Digital card platform with brand-focused design.', logo: 'https://scholarsmerit.com/koecards/images/brand/logo.svg', category: 'Branding', url: 'https://scholarsmerit.com/koecards' },
  { name: 'i-Merit', description: 'Professional platform with modern aesthetics.', logo: 'https://www.i-merit.com/wp-content/uploads/2025/02/logo-600x263.png', category: 'Education', url: 'https://i-merit.com' },
  { name: 'Kemfotech', description: 'Technology company website with innovative design.', logo: 'https://www.kemfotech.com/wp-content/uploads/2024/02/kemfotech-logo-01.png', category: 'Technology', url: 'https://www.kemfotech.com' },
  { name: 'Gamut Buildcon', description: 'Construction company website with professional presentation.', logo: 'https://www.gamutbuildcon.com/wp-content/uploads/2025/12/Right-Side-Logo-01-scaled.png', category: 'Real Estate', url: 'https://www.gamutbuildcon.com' },
  { name: 'AccelerateX Ventures', description: 'Venture capital platform with sophisticated design.', logo: '/images/demo-consulting-logo-black.webp', category: 'Finance', url: 'https://acceleratexventures.com' },
  { name: 'Invotech Services', description: 'USA-based digital transformation company specializing in AI-driven solutions.', logo: 'https://invotechservices.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-28-at-17.18.57-1536x492.webp', category: 'AI Solutions', url: 'https://invotechservices.com' },
  { name: 'Rayon Capital', description: 'Financial services platform with trust-driven design.', logo: 'https://rayoncapital.in/wp-content/uploads/2022/10/2-1.jpg', category: 'Finance', url: 'https://rayoncapital.in' },
  { name: 'RGCIRC', description: 'Medical research institute with informative and accessible design.', logo: 'https://www.rgcirc.org/wp-content/uploads/2024/10/RGCIRC-NEW-LOGO.png', category: 'Healthcare', url: 'https://www.rgcirc.org' }
];

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3 / Tailwind', level: 92 },
  { name: 'JavaScript', level: 88 },
  { name: 'Wordpress', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Figma', level: 90 }
  
];
const figmaProjects = [
  { 
    name: 'House of Qutone', 
    description: 'Premium tile collection website with elegant visuals and seamless navigation.', 
    url: 'https://www.figma.com/proto/xTDEiPrVAawhagqzXM0Bq5/House-of-qutone?node-id=28-166' 
  },
  { name: 'Aska Equipments', description: 'Industrial equipment showcase design', url: 'https://www.figma.com/design/VrO8ovqRUZSWudWHTEEE5U/Aska?node-id=0-1&t=hEzXruUXI2pLDAAX-1' },
  { name: 'Koescore Dashboard', description: 'Analytics dashboard with data visualization', url: 'https://www.figma.com/design/DhvZW6jHBW8Ztt0dhYxm0A/Koescore?node-id=0-1&t=H1q4INOH8NiRCBYZ-1' },
  { name: 'Attendance System', description: 'Employee attendance tracking interface', url: 'https://www.figma.com/design/s1gelSnDigShiMr90MOI0K/Attendance-and-Koekraft-and-Koescore?node-id=0-1&t=d9Hmr0fK1QGRFoZF-1' },
  { name: 'Koescore Test Platform', description: 'Student test series platform UI', url: 'https://www.figma.com/design/DhvZW6jHBW8Ztt0dhYxm0A/Koescore?node-id=0-1' },
  {
    name: 'DFlare.AI',
    description: 'Enterprise AI cloud platform UI for secure, scalable AI/ML workloads across on-premise, private cloud, and hybrid environments.',
    url: 'https://www.figma.com/proto/tx7T61lHB0WKLlJoYofhj7/Untitled?node-id=1-4853&p=f&t=7EACLBpJWpVW0PXi-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
  {
    name: 'Cogneet',
    description: 'Digital agency website UI showcasing creative work, strategic solutions, and seamless digital experiences.',
    url: 'https://www.figma.com/proto/5RsXaa4hYKKwXfA1gjhmNk/Untitled?node-id=1-2&p=f&t=7EACLBpJWpVW0PXi-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
  {
    name: 'Univo Tech',
    description: 'High-performance IT infrastructure website UI for RAM, SSDs, hard drives, and graphics card solutions.',
    url: 'https://www.figma.com/proto/HRmROe86mDQeM0IlIBYagt/Untitled?node-id=22-411&p=f&t=ltA9dTBkZkk9q2E1-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
  {
    name: 'Creation Construction Limited',
    description: 'Construction and renovation website UI highlighting professional services, project galleries, and experienced craftsmanship.',
    url: 'https://www.figma.com/proto/1VMsdMt8UbN1x0PavhGo6R/Untitled?node-id=2001-70&p=f&t=qE1sRlheBG7WFlWL-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  }
];
const graphicDesigns = [
  { src: 'images/A clean car is a happy car.jpg', alt: 'A clean car is a happy car design' },
  { src: 'images/DT microworld 2.jpg', alt: 'DT microworld graphic design' },
  { src: 'images/ladies night standee.jpg', alt: 'Ladies night standee design' },
  { src: 'images/Location post with lights.jpg', alt: 'Location post with lights design' },
  { src: 'images/NIKE Poster.jpg', alt: 'Nike poster design' },
  { src: 'images/Revel in the Brilliance of.jpg', alt: 'Revel in the Brilliance design' }
];

const projectGrid = document.querySelector('#projectGrid');
const skillsList = document.querySelector('#skillsList');
const figmaGrid = document.querySelector('#figmaGrid');
const graphicGrid = document.querySelector('#graphicGrid');
const siteNav = document.querySelector('.site-nav');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileToggle = document.querySelector('.mobile-toggle');
const navButtons = document.querySelectorAll('[data-scroll]');

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  mobileMenu.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
  mobileToggle.innerHTML = icon('menu');
  lucide.createIcons();
}

skillsList.innerHTML = skills.map((skill, index) => `
  <div class="skill-item">
    <div class="skill-top">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-level">${skill.level}%</span>
    </div>
    <div class="skill-track">
      <div class="skill-fill" style="width: ${skill.level}%; transition-delay: ${index * 100}ms"></div>
    </div>
  </div>
`).join('');

projectGrid.innerHTML = projects.map(project => `
  <div class="col-md-6 col-lg-4">
    <article class="project-card">
      <div class="project-arrow">${icon('external-link')}</div>
      <div class="logo-slot">
        <div class="logo-box">
          <img src="${project.logo}" alt="${project.name}" loading="lazy" onerror="this.style.display='none'">
        </div>
      </div>
      <span class="category-pill">${project.category}</span>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="small-link">View Project ${icon('external-link')}</a>
    </article>
  </div>
`).join('');

figmaGrid.innerHTML = figmaProjects.map(project => `
  <div class="col-sm-6 col-lg-3">
    <article class="design-card">
      <div class="design-icon">${icon('globe')}</div>
      <h4>${project.name}</h4>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank" rel="noopener noreferrer">View Design ${icon('external-link')}</a>
    </article>
  </div>
`).join('');

graphicGrid.innerHTML = graphicDesigns.map(design => `
  <div class="graphic-tile">
    <img src="${design.src}" alt="${design.alt}" loading="lazy">
  </div>
`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();

navButtons.forEach(button => {
  button.addEventListener('click', () => scrollToSection(button.dataset.scroll));
});

mobileToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', String(isOpen));
  mobileToggle.innerHTML = icon(isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

window.addEventListener('scroll', () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 50);
});

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-link-btn').forEach(button => {
      button.classList.toggle('active', button.dataset.scroll === entry.target.id);
    });
  });
}, { threshold: 0.3 });

document.querySelectorAll('.section-watch').forEach(section => sectionObserver.observe(section));

lucide.createIcons();
