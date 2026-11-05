/**
 * Alan Salva — portfolio
 * Language switching (EN / ES / HR), project rendering and the chart's waypoint links.
 */

'use strict';

const CONFIG = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es', 'hr'],
  storageKey: 'selectedLanguage'
};

// =================================
// PROJECTS
// Screenshots: drop a cover.png into assets/img/projects/<slug>/ and it appears.
// =================================
const projectsData = [
  {
    slug: 'workwavecoast',
    title: 'WorkWaveCoast',
    link: 'https://github.com/tyhrr/workwavecoast',
    technologies: ['JavaScript', 'HTML', 'CSS', 'MongoDB', 'Render', 'GitHub Pages'],
    description: {
      en: 'Web application with an online application form for candidates who want to work on the Croatian coast.',
      es: 'Aplicación web con un formulario de postulación para candidatos que quieren trabajar en la costa croata.',
      hr: 'Web aplikacija s online obrascem za kandidate koji žele raditi na hrvatskoj obali.'
    }
  },
  {
    slug: 'cv-processor',
    title: 'CV Processor',
    link: 'https://github.com/tyhrr/CV_processor',
    technologies: ['Python', 'PDF', 'OCR'],
    description: {
      en: 'Extracts information from CVs in PDF, PNG and JPG format.',
      es: 'Extrae información de currículums en formato PDF, PNG y JPG.',
      hr: 'Izvlači podatke iz životopisa u PDF, PNG i JPG formatu.'
    }
  },
  {
    slug: 'tugurium-scraper',
    title: 'Tugurium scraper',
    link: 'https://github.com/tyhrr/script-web',
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'Pandas'],
    description: {
      en: 'Scraper for a static website built with Requests, BeautifulSoup and Pandas.',
      es: 'Scraper de un sitio web estático hecho con Requests, BeautifulSoup y Pandas.',
      hr: 'Scraper statične web stranice izrađen s Requests, BeautifulSoup i Pandas.'
    }
  }
];

// =================================
// TRANSLATIONS
// =================================
const translations = {
  en: {
    'hosp-title': "Hospitality & customer service",
    'hosp-intro': "Before software: bars, hotels and cafés, where I learned to look after people.",
    'hosp1-title': "Bar & reception",
    'hosp1-desc': "Customer service and beverage outlet, help desk at reception, coffee and drinks.",
    'hosp2-desc': "Customer service and beverage outlet; created signature cocktails, set up the bar and prepared special ingredients for cocktails.",
    'hosp3-desc': "Customer service and beverage outlet.",
    'hosp4-desc': "Designed each seasonal cocktail menu, classics and signature drinks; planned staff shifts and ordered everything the bar needed.",
    'hosp5-desc': "Welcomed and served guests, prepared drinks, coffee and the mise en place.",
    'hosp6-desc': "Content creation, photography and editing, social media management and customer interaction.",
    'hosp-training-title': "Related training",
    'hosp-edu1': "Security and hygiene technician",
    'hosp-edu2': "Bartending and coffee making",
    'country-hr': "Croatia",
    'chart-land-east': 'CROATIA',
    'plan-label': 'Plan {n} · {title}',
    'plan-pending': 'Plan {n} · survey pending',
    'page-title': 'Alan Salva | Technical Support & Python Developer',
    'skip-link': 'Skip to main content',
    'nav-projects': 'Projects',
    'nav-experience': 'Experience',
    'nav-contact': 'Contact',
    'nav-cv': 'CV (PDF)',
    'chart-west': 'Río de la Plata',
    'chart-east': 'Adriatic Sea',
    'chart-inset': 'Plan A · Croatia',
    'hero-role': 'Technical support who also writes the fix.',
    'hero-intro': "I support customers of Booking Manager, MMK Systems' yacht charter software, and build tools in Python and JavaScript. Before that: years of hospitality and customer service in bars and hotels from Argentina to Croatia, and four years of materials engineering with lab work, protocols and data analysis. Self-taught and always training, I work in Spanish, English and some Croatian.",
    'hero-cta': 'Write to me',
    'hero-cv': 'Read my CV (PDF)',
    'projects-title': 'Projects',
    'projects-intro': 'Three things I built along the way.',
    'project-code': 'Code on GitHub',
    'project-shot-alt': 'Screenshot of {title}',
    'experience-title': 'Experience',
    'exp-mmk-period': 'Jan 2026 – present',
    'exp-mmk-title': 'Customer Support Specialist',
    'exp-mmk-desc': "Technical and customer support for Booking Manager, MMK Systems' yacht charter management software. Resolving client cases, configuring prices and contract templates, and reporting bugs to the development team through Jira.",
    'exp1-title': 'Web Developer & Designer',
    'exp1-desc': 'Designing and developing the website of Udruga Vestigium, a non-profit organization. The site gives the community access to resources and support, with a focus on usability and accessibility.',
    'exp2-title': 'Web Developer & Designer',
    'exp2-company': 'Freelance / personal projects',
    'exp2-desc': 'Designed and built websites and developed Python tools, including Selenium-based scrapers that extract information from external web applications.',
    'exp3-title': 'Support Specialist / Technical Assistant',
    'exp3-desc': 'Managed tasks, assisted customers, provided technical support and ensured smooth product implementation. Strong communication and troubleshooting skills.',
    'education-title': 'Training',
    'edu1-title': 'Development with Python',
    'edu2-title': 'Full-stack Development',
    'edu3-title': 'Network Administrator',
    'edu3-institution': 'Municipal Labor Office',
    'edu4-title': 'Materials Engineering',
    'languages-title': 'Languages',
    'lang-spanish': 'Spanish',
    'lang-english': 'English',
    'lang-croatian': 'Croatian',
    'level-native': 'native',
    'level-advanced': 'advanced',
    'level-basic': 'basic',
    'tools-title': 'Tools',
    'contact-title': "Let's talk",
    'contact-lead': 'Email is the quickest way to reach me.',
    'link-cv': 'CV (PDF)',
    'link-motivation': 'Motivation letter (PDF)',
    'link-certifications': 'Certifications (PDF)',
    'colophon': 'Hand-coded in HTML, CSS and JavaScript, in three languages, no frameworks.',
    'new-tab-paren': ' (opens in a new tab)',
    'alt-portrait': 'Portrait of Alan Salva',
    'whatsapp-text': 'Hi Alan, I saw your portfolio and would like to get in touch.',
    'aria-home': 'Alan Salva — back to top',
    'aria-main-nav': 'Main navigation',
    'aria-language': 'Language',
    'aria-waypoints': 'Projects on the chart'
  },
  es: {
    'hosp-title': "Hostelería y atención al cliente",
    'hosp-intro': "Antes del software: bares, hoteles y cafés, donde aprendí a cuidar a la gente.",
    'hosp1-title': "Bar y recepción",
    'hosp1-desc': "Atención al cliente y servicio de bar, apoyo en recepción, café y bebidas.",
    'hosp2-desc': "Atención al cliente y servicio de bar; creación de cócteles de autor, montaje de la barra y preparación de ingredientes especiales para cócteles.",
    'hosp3-desc': "Atención al cliente y servicio de bar.",
    'hosp4-desc': "Diseño de cada carta de cócteles de temporada, clásicos y de autor; planificación de turnos del personal y pedidos de todo lo necesario para la barra.",
    'hosp5-desc': "Recepción y atención de clientes, preparación de bebidas, café y mise en place.",
    'hosp6-desc': "Creación de contenido, fotografía y edición, gestión de redes e interacción con clientes.",
    'hosp-training-title': "Formación relacionada",
    'hosp-edu1': "Técnico en seguridad e higiene",
    'hosp-edu2': "Coctelería y barismo",
    'country-hr': "Croacia",
    'chart-land-east': 'CROACIA',
    'plan-label': 'Plano {n} · {title}',
    'plan-pending': 'Plano {n} · relevamiento pendiente',
    'page-title': 'Alan Salva | Soporte técnico y desarrollo Python',
    'skip-link': 'Saltar al contenido principal',
    'nav-projects': 'Proyectos',
    'nav-experience': 'Trayectoria',
    'nav-contact': 'Contacto',
    'nav-cv': 'CV (PDF)',
    'chart-west': 'Río de la Plata',
    'chart-east': 'Mar Adriático',
    'chart-inset': 'Plano A · Croacia',
    'hero-role': 'Soporte técnico que también escribe la solución.',
    'hero-intro': "Doy soporte a los clientes de Booking Manager, el software de chárter náutico de MMK Systems, y construyo herramientas en Python y JavaScript. Antes: años de hostelería y atención al cliente en bares y hoteles de Argentina a Croacia, y cuatro años de ingeniería en materiales con trabajo de laboratorio, protocolos y análisis de datos. Autodidacta y en formación constante, trabajo en español, inglés y algo de croata.",
    'hero-cta': 'Escríbeme',
    'hero-cv': 'Ver mi CV (PDF)',
    'projects-title': 'Proyectos',
    'projects-intro': 'Tres cosas que construí por el camino.',
    'project-code': 'Código en GitHub',
    'project-shot-alt': 'Captura de {title}',
    'experience-title': 'Trayectoria',
    'exp-mmk-period': 'Ene 2026 – actualidad',
    'exp-mmk-title': 'Especialista en atención al cliente',
    'exp-mmk-desc': 'Soporte técnico y atención al cliente de Booking Manager, el software de gestión de chárter náutico de MMK Systems. Resolución de casos de clientes, configuración de precios y plantillas de contrato, y reporte de errores al equipo de desarrollo mediante Jira.',
    'exp1-title': 'Desarrollador y diseñador web',
    'exp1-desc': 'Diseño y desarrollo del sitio web de Udruga Vestigium, una organización sin fines de lucro. El sitio acerca recursos y apoyo a la comunidad, con foco en la usabilidad y la accesibilidad.',
    'exp2-title': 'Desarrollador y diseñador web',
    'exp2-company': 'Freelance / proyectos personales',
    'exp2-desc': 'Diseñé y construí sitios web y desarrollé herramientas en Python, entre ellas scrapers con Selenium que extraen información de aplicaciones web externas.',
    'exp3-title': 'Especialista de soporte / Asistente técnico',
    'exp3-desc': 'Gestión de tareas, atención a clientes, soporte técnico y acompañamiento en la implementación de productos. Buenas habilidades de comunicación y resolución de problemas.',
    'education-title': 'Formación',
    'edu1-title': 'Desarrollo con Python',
    'edu2-title': 'Desarrollo full-stack',
    'edu3-title': 'Administrador de redes',
    'edu3-institution': 'Oficina Municipal de Empleo',
    'edu4-title': 'Ingeniería en Materiales',
    'languages-title': 'Idiomas',
    'lang-spanish': 'Español',
    'lang-english': 'Inglés',
    'lang-croatian': 'Croata',
    'level-native': 'nativo',
    'level-advanced': 'avanzado',
    'level-basic': 'básico',
    'tools-title': 'Herramientas',
    'contact-title': 'Hablemos',
    'contact-lead': 'El correo es la forma más rápida de contactarme.',
    'link-cv': 'CV (PDF)',
    'link-motivation': 'Carta de motivación (PDF)',
    'link-certifications': 'Certificaciones (PDF)',
    'colophon': 'Hecho a mano en HTML, CSS y JavaScript, en tres idiomas y sin frameworks.',
    'new-tab-paren': ' (se abre en una pestaña nueva)',
    'alt-portrait': 'Retrato de Alan Salva',
    'whatsapp-text': 'Hola Alan, vi tu portafolio y me gustaría contactarte.',
    'aria-home': 'Alan Salva — volver arriba',
    'aria-main-nav': 'Navegación principal',
    'aria-language': 'Idioma',
    'aria-waypoints': 'Proyectos en la carta'
  },
  hr: {
    'hosp-title': "Ugostiteljstvo i rad s gostima",
    'hosp-intro': "Prije softvera: barovi, hoteli i kafići, gdje sam naučio brinuti o ljudima.",
    'hosp1-title': "Bar i recepcija",
    'hosp1-desc': "Rad s gostima i usluživanje pića, pomoć na recepciji, kava i pića.",
    'hosp2-desc': "Rad s gostima i usluživanje pića; izrada autorskih koktela, priprema šanka i posebnih sastojaka za koktele.",
    'hosp3-desc': "Rad s gostima i usluživanje pića.",
    'hosp4-desc': "Osmišljavanje sezonske koktel karte, klasičnih i autorskih koktela; planiranje smjena osoblja i narudžba svega potrebnog za šank.",
    'hosp5-desc': "Doček i usluživanje gostiju, priprema pića, kave i mise en placea.",
    'hosp6-desc': "Izrada sadržaja, fotografija i obrada, upravljanje društvenim mrežama i komunikacija s korisnicima.",
    'hosp-training-title': "Povezano obrazovanje",
    'hosp-edu1': "Tehničar zaštite na radu",
    'hosp-edu2': "Barmenstvo i priprema kave",
    'country-hr': "Hrvatska",
    'chart-land-east': 'HRVATSKA',
    'plan-label': 'Plan {n} · {title}',
    'plan-pending': 'Plan {n} · snimanje u tijeku',
    'page-title': 'Alan Salva | Tehnička podrška i Python razvoj',
    'skip-link': 'Preskoči na glavni sadržaj',
    'nav-projects': 'Projekti',
    'nav-experience': 'Iskustvo',
    'nav-contact': 'Kontakt',
    'nav-cv': 'Životopis (PDF)',
    'chart-west': 'Río de la Plata',
    'chart-east': 'Jadransko more',
    'chart-inset': 'Plan A · Hrvatska',
    'hero-role': 'Tehnička podrška koja sama napiše i rješenje.',
    'hero-intro': "Pružam podršku korisnicima Booking Managera, softvera tvrtke MMK Systems za čarter plovila, i izrađujem alate u Pythonu i JavaScriptu. Prije toga: godine u ugostiteljstvu i radu s gostima, u barovima i hotelima od Argentine do Hrvatske, te četiri godine studija inženjerstva materijala s laboratorijskim radom, protokolima i analizom podataka. Samouk sam i stalno učim, a radim na španjolskom, engleskom i pomalo hrvatskom.",
    'hero-cta': 'Pišite mi',
    'hero-cv': 'Pogledajte životopis (PDF)',
    'projects-title': 'Projekti',
    'projects-intro': 'Tri stvari koje sam izgradio usput.',
    'project-code': 'Kôd na GitHubu',
    'project-shot-alt': 'Snimka zaslona: {title}',
    'experience-title': 'Iskustvo',
    'exp-mmk-period': 'Sij 2026. – danas',
    'exp-mmk-title': 'Specijalist za korisničku podršku',
    'exp-mmk-desc': 'Tehnička i korisnička podrška za Booking Manager, softver tvrtke MMK Systems za upravljanje čarterom plovila. Rješavanje korisničkih slučajeva, postavljanje cijena i predložaka ugovora te prijava grešaka razvojnom timu putem Jire.',
    'exp1-title': 'Web developer i dizajner',
    'exp1-desc': 'Dizajn i izrada web stranice udruge Vestigium, neprofitne organizacije. Stranica zajednici pruža resurse i podršku, s naglaskom na jednostavnost korištenja i pristupačnost.',
    'exp2-title': 'Web developer i dizajner',
    'exp2-company': 'Freelance / osobni projekti',
    'exp2-desc': 'Dizajnirao sam i izrađivao web stranice te razvijao alate u Pythonu, uključujući scrapere temeljene na Seleniumu koji izvlače podatke iz vanjskih web aplikacija.',
    'exp3-title': 'Specijalist za podršku / Tehnički asistent',
    'exp3-desc': 'Upravljanje zadacima, pomoć korisnicima, tehnička podrška i osiguravanje uspješne implementacije proizvoda. Izražene komunikacijske vještine i rješavanje problema.',
    'education-title': 'Obrazovanje',
    'edu1-title': 'Razvoj u Pythonu',
    'edu2-title': 'Full-stack razvoj',
    'edu3-title': 'Mrežni administrator',
    'edu3-institution': 'Općinski ured za zapošljavanje',
    'edu4-title': 'Inženjerstvo materijala',
    'languages-title': 'Jezici',
    'lang-spanish': 'Španjolski',
    'lang-english': 'Engleski',
    'lang-croatian': 'Hrvatski',
    'level-native': 'materinski',
    'level-advanced': 'napredno',
    'level-basic': 'osnovno',
    'tools-title': 'Alati',
    'contact-title': 'Razgovarajmo',
    'contact-lead': 'E-pošta je najbrži način da me kontaktirate.',
    'link-cv': 'Životopis (PDF)',
    'link-motivation': 'Motivacijsko pismo (PDF)',
    'link-certifications': 'Certifikati (PDF)',
    'colophon': 'Ručno izrađeno u HTML-u, CSS-u i JavaScriptu, na tri jezika, bez frameworka.',
    'new-tab-paren': ' (otvara se u novoj kartici)',
    'alt-portrait': 'Portret Alana Salve',
    'whatsapp-text': 'Pozdrav Alane, vidio/la sam tvoj portfolio i želio/la bih te kontaktirati.',
    'aria-home': 'Alan Salva — natrag na vrh',
    'aria-main-nav': 'Glavna navigacija',
    'aria-language': 'Jezik',
    'aria-waypoints': 'Projekti na karti'
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const t = (lang, key) => translations[lang]?.[key] ?? translations.en[key] ?? '';

const storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (error) { /* storage unavailable: language just isn't remembered */ }
  }
};

const ARROW_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

// =================================
// PROJECTS
// =================================
function renderProjects(lang) {
  const list = $('#projects-list');
  if (!list) return;

  const fragment = document.createDocumentFragment();

  projectsData.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = 'project';
    article.id = `project-${project.slug}`;
    article.dataset.project = project.slug;

    const shot = document.createElement('figure');
    shot.className = 'inset project__shot';
    const img = document.createElement('img');
    img.src = `assets/img/projects/${project.slug}/cover.png`;
    img.alt = t(lang, 'project-shot-alt').replace('{title}', project.title);
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 1600;
    img.height = 1000;
    const label = document.createElement('figcaption');
    label.className = 'inset__label';
    const fill = key => t(lang, key).replace('{n}', index + 1).replace('{title}', project.title);
    label.textContent = fill('plan-label');
    img.addEventListener('error', () => {
      shot.classList.add('is-empty');
      label.textContent = fill('plan-pending');
      img.remove();
    }, { once: true });
    shot.append(img, label);

    const body = document.createElement('div');
    body.className = 'project__body';

    const head = document.createElement('div');
    head.className = 'project__head';
    const mark = document.createElement('span');
    mark.className = 'project__mark';
    mark.setAttribute('aria-hidden', 'true');
    mark.textContent = String(index + 1);
    const title = document.createElement('h3');
    title.className = 'project__title';
    title.textContent = project.title;
    head.append(mark, title);

    const desc = document.createElement('p');
    desc.className = 'project__desc';
    desc.textContent = project.description[lang] || project.description.en;

    const stack = document.createElement('p');
    stack.className = 'project__stack';
    stack.textContent = project.technologies.join(' · ');

    const link = document.createElement('a');
    link.className = 'project__link';
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = `<span></span>${ARROW_SVG}`;
    link.firstChild.textContent = t(lang, 'project-code');
    const hidden = document.createElement('span');
    hidden.className = 'sr-only';
    hidden.textContent = `: ${project.title}${t(lang, 'new-tab-paren')}`;
    link.appendChild(hidden);

    body.append(head, desc, stack, link);
    article.append(shot, body);
    fragment.appendChild(article);
  });

  list.replaceChildren(fragment);
  linkWaypoints();
}

// Light the matching waypoint on the chart while a project is hovered or focused, and vice versa.
function linkWaypoints() {
  const setLit = (slug, on) => {
    $$(`[data-project="${slug}"]`).forEach(el => {
      const target = el.closest('.waypoint') || el.closest('.project') || el;
      target.classList.toggle('is-lit', on);
    });
  };

  $$('.project, .waypoint a').forEach(el => {
    const slug = el.dataset.project;
    if (!slug || el.dataset.bound) return;
    el.dataset.bound = 'true';
    el.addEventListener('pointerenter', () => setLit(slug, true));
    el.addEventListener('pointerleave', () => setLit(slug, false));
    el.addEventListener('focusin', () => setLit(slug, true));
    el.addEventListener('focusout', () => setLit(slug, false));
  });
}

// =================================
// LANGUAGE
// =================================
function applyLanguage(lang) {
  if (!translations[lang]) lang = CONFIG.defaultLanguage;

  document.documentElement.lang = lang;
  document.title = t(lang, 'page-title');
  storage.set(CONFIG.storageKey, lang);

  $$('[data-key]').forEach(el => {
    const text = t(lang, el.dataset.key);
    if (text) el.textContent = text;
  });

  $$('[data-aria-key]').forEach(el => {
    const text = t(lang, el.dataset.ariaKey);
    if (text) el.setAttribute('aria-label', text);
  });

  $$('[data-alt-key]').forEach(el => {
    const text = t(lang, el.dataset.altKey);
    if (text) el.setAttribute('alt', text);
  });

  $$('.lang__btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  const whatsapp = $('#whatsapp-link');
  if (whatsapp) {
    whatsapp.href = `https://wa.me/385957926694?text=${encodeURIComponent(t(lang, 'whatsapp-text'))}`;
  }

  renderProjects(lang);
}

function bootstrap() {
  const stored = storage.get(CONFIG.storageKey);
  const initial = CONFIG.supportedLanguages.includes(stored) ? stored : CONFIG.defaultLanguage;

  $$('.lang__btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  linkWaypoints();
  applyLanguage(initial);

  const year = $('#current-year');
  if (year) year.textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
