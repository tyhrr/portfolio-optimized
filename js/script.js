/**
 * ALAN SALVA PORTFOLIO
 * Author: Alan Salva
 * Version: 2.1.0
 */

'use strict';

// =================================
// CONFIGURATION & CONSTANTS
// =================================
const CONFIG = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es', 'hr'],
  storageKey: 'selectedLanguage'
};

const SELECTORS = {
  projectsGrid: '#projects-grid',
  projectsCount: '#stat-projects-count',
  currentLangBtn: '#currentLang',
  langDropdown: '#langDropdown',
  languageSwitcher: '.language-switcher',
  navbar: '#navbar',
  mobileMenuBtn: '#mobile-menu-btn',
  navbarMenu: '#navbar-menu'
};

// =================================
// PROJECT DATA (descriptions per language)
// =================================
const projectsData = [
  {
    title: 'Web Scraping – Tugurium',
    link: 'https://github.com/tyhrr/script-web',
    technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Git'],
    description: {
      en: 'Scraper for a static website built with Requests, BeautifulSoup and Pandas.',
      es: 'Scraper de un sitio web estático hecho con Requests, BeautifulSoup y Pandas.',
      hr: 'Scraper statične web stranice izrađen s Requests, BeautifulSoup i Pandas.'
    }
  },
  {
    title: 'Personal Portfolio',
    link: 'https://github.com/tyhrr/portfolio-optimized',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: {
      en: 'This website: hand-coded HTML, CSS and JavaScript in three languages, hosted on GitHub Pages.',
      es: 'Este sitio web: HTML, CSS y JavaScript escritos a mano, en tres idiomas y alojado en GitHub Pages.',
      hr: 'Ova web stranica: ručno pisani HTML, CSS i JavaScript na tri jezika, hostana na GitHub Pages.'
    }
  },
  {
    title: 'CV Processor',
    link: 'https://github.com/tyhrr/CV_processor',
    technologies: ['Python', 'PDF Processing', 'OCR'],
    description: {
      en: 'Extracts information from CVs in PDF, PNG and JPG format.',
      es: 'Extrae información de currículums en formato PDF, PNG y JPG.',
      hr: 'Izvlači podatke iz životopisa u PDF, PNG i JPG formatu.'
    }
  },
  {
    title: 'WorkWaveCoast',
    link: 'https://github.com/tyhrr/workwavecoast',
    technologies: ['JavaScript', 'HTML', 'CSS', 'MongoDB', 'Render', 'GitHub Pages'],
    description: {
      en: 'Web application with an online application form for candidates who want to work on the Croatian coast.',
      es: 'Aplicación web con un formulario de postulación para candidatos que quieren trabajar en la costa croata.',
      hr: 'Web aplikacija s online obrascem za kandidate koji žele raditi na hrvatskoj obali.'
    }
  }
];

// =================================
// TRANSLATION DATA
// =================================
const translations = {
  en: {
    'skip-link': 'Skip to main content',
    'nav-motivation': 'Motivation Letter',
    'nav-certifications': 'Certifications',
    'nav-contact': 'Contact',
    'nav-about-me': 'About Me',
    'nav-projects': 'Projects',
    'nav-about-website': 'About Website',
    'hero-intro': "I'm",
    'hero-role': 'a Python & Web Developer',
    'hero-description': "Welcome to my portfolio! I'm Alan, a Python and web developer based in Croatia and a data analysis student. I've worked on web projects ranging from personal blogs to e-commerce platforms, and I'm looking for an opportunity to keep growing in software development and artificial intelligence.",
    'hero-resume': 'Download CV',
    'about-me-title': 'About Me',
    'about-me-description': "I'm a web developer who enjoys turning ideas into functional, easy-to-use digital products. I've built dynamic websites, e-commerce platforms and data-driven tools with JavaScript and Python, and I'm currently deepening my Python skills and exploring how to integrate AI into web projects.",
    'work-experience-title': 'Work Experience',
    'exp-mmk-period': 'Jan 2026 – Present',
    'exp-mmk-title': 'Customer Support Specialist',
    'exp-mmk-desc': "Technical and customer support for Booking Manager, MMK Systems' yacht charter management software. Resolving client cases, configuring prices and contract templates, and reporting bugs to the development team through Jira.",
    'exp1-title': 'Web Developer & Designer',
    'exp1-desc': 'Designing and developing the website of Udruga Vestigium, a non-profit organization. The site gives the community access to resources and support, with a focus on usability and accessibility.',
    'exp2-title': 'Web Developer & Designer',
    'exp2-company': 'Freelance / personal projects',
    'exp2-desc': 'Designed and built websites and developed Python tools, including Selenium-based scrapers that extract information from external web applications.',
    'exp3-title': 'Support Specialist / Technical Assistant',
    'exp3-desc': 'Managed tasks, assisted customers, provided technical support and ensured smooth product implementation. Strong communication and troubleshooting skills.',
    'education-title': 'Education',
    'edu1-title': 'Development with Python',
    'edu2-title': 'Full-stack Development',
    'edu3-title': 'Network Administrator',
    'edu3-institution': 'Municipal Labor Office',
    'edu3-desc': 'Secretariat of Innovation, Production and Employment.',
    'edu4-title': 'Materials Engineering',
    'skills-title': 'Skills & Technologies',
    'skills-languages': 'Programming Languages',
    'skills-tools': 'Frameworks & Tools',
    'skills-specializations': 'Specializations',
    'spec-web': 'Web Development',
    'spec-data': 'Data Analysis',
    'spec-scraping': 'Web Scraping',
    'spec-support': 'Technical Support',
    'languages-title': 'Languages',
    'lang-spanish': 'Spanish',
    'lang-english': 'English',
    'level-native': 'Native',
    'level-advanced': 'Advanced',
    'projects-title': 'My Projects',
    'about-website-title': 'About This Website',
    'about-website-description': 'A hand-coded, framework-free site: semantic HTML, modern CSS and vanilla JavaScript, available in three languages and hosted on GitHub Pages.',
    'stat-languages': 'Site languages',
    'stat-frameworks': 'Frameworks',
    'stat-projects': 'Featured projects',
    'tech-stack-title': 'Technologies & Tools Used',
    'see-more': 'View on GitHub',
    'new-tab': 'opens in a new tab',
    // aria-labels
    'aria-main-nav': 'Main navigation',
    'aria-home': 'Alan Salva — back to top',
    'aria-language': 'Language: English',
    'aria-open-menu': 'Open menu',
    'aria-close-menu': 'Close menu',
    'aria-social': 'Contact and social links',
    'aria-whatsapp': 'WhatsApp (opens in a new tab)',
    'aria-email': 'Email',
    'aria-linkedin': 'LinkedIn (opens in a new tab)',
    'aria-github': 'GitHub (opens in a new tab)'
  },
  es: {
    'skip-link': 'Saltar al contenido principal',
    'nav-motivation': 'Carta de motivación',
    'nav-certifications': 'Certificaciones',
    'nav-contact': 'Contacto',
    'nav-about-me': 'Sobre mí',
    'nav-projects': 'Proyectos',
    'nav-about-website': 'Sobre el sitio',
    'hero-intro': 'Soy',
    'hero-role': 'desarrollador Python y web',
    'hero-description': '¡Bienvenido a mi portafolio! Soy Alan, desarrollador Python y web radicado en Croacia y estudiante de análisis de datos. He trabajado en proyectos web que van desde blogs personales hasta plataformas de comercio electrónico, y busco una oportunidad para seguir creciendo en desarrollo de software e inteligencia artificial.',
    'hero-resume': 'Descargar CV',
    'about-me-title': 'Sobre mí',
    'about-me-description': 'Soy desarrollador web y disfruto convirtiendo ideas en productos digitales funcionales y fáciles de usar. He construido sitios web dinámicos, plataformas de e-commerce y herramientas basadas en datos con JavaScript y Python, y actualmente estoy profundizando en Python y explorando cómo integrar IA en proyectos web.',
    'work-experience-title': 'Experiencia laboral',
    'exp-mmk-period': 'Ene 2026 – Actualidad',
    'exp-mmk-title': 'Especialista en atención al cliente',
    'exp-mmk-desc': 'Soporte técnico y atención al cliente de Booking Manager, el software de gestión de chárter náutico de MMK Systems. Resolución de casos de clientes, configuración de precios y plantillas de contrato, y reporte de errores al equipo de desarrollo mediante Jira.',
    'exp1-title': 'Desarrollador y diseñador web',
    'exp1-desc': 'Diseño y desarrollo del sitio web de Udruga Vestigium, una organización sin fines de lucro. El sitio acerca recursos y apoyo a la comunidad, con foco en la usabilidad y la accesibilidad.',
    'exp2-title': 'Desarrollador y diseñador web',
    'exp2-company': 'Freelance / proyectos personales',
    'exp2-desc': 'Diseñé y construí sitios web y desarrollé herramientas en Python, entre ellas scrapers con Selenium que extraen información de aplicaciones web externas.',
    'exp3-title': 'Especialista de soporte / Asistente técnico',
    'exp3-desc': 'Gestión de tareas, atención a clientes, soporte técnico y acompañamiento en la implementación de productos. Buenas habilidades de comunicación y resolución de problemas.',
    'education-title': 'Educación',
    'edu1-title': 'Desarrollo con Python',
    'edu2-title': 'Desarrollo full-stack',
    'edu3-title': 'Administrador de redes',
    'edu3-institution': 'Oficina Municipal de Empleo',
    'edu3-desc': 'Secretaría de Innovación, Producción y Empleo.',
    'edu4-title': 'Ingeniería en Materiales',
    'skills-title': 'Habilidades y tecnologías',
    'skills-languages': 'Lenguajes de programación',
    'skills-tools': 'Frameworks y herramientas',
    'skills-specializations': 'Especializaciones',
    'spec-web': 'Desarrollo web',
    'spec-data': 'Análisis de datos',
    'spec-scraping': 'Web scraping',
    'spec-support': 'Soporte técnico',
    'languages-title': 'Idiomas',
    'lang-spanish': 'Español',
    'lang-english': 'Inglés',
    'level-native': 'Nativo',
    'level-advanced': 'Avanzado',
    'projects-title': 'Mis proyectos',
    'about-website-title': 'Sobre este sitio web',
    'about-website-description': 'Un sitio hecho a mano y sin frameworks: HTML semántico, CSS moderno y JavaScript puro, disponible en tres idiomas y alojado en GitHub Pages.',
    'stat-languages': 'Idiomas del sitio',
    'stat-frameworks': 'Frameworks',
    'stat-projects': 'Proyectos destacados',
    'tech-stack-title': 'Tecnologías y herramientas utilizadas',
    'see-more': 'Ver en GitHub',
    'new-tab': 'se abre en una pestaña nueva',
    'aria-main-nav': 'Navegación principal',
    'aria-home': 'Alan Salva — volver arriba',
    'aria-language': 'Idioma: español',
    'aria-open-menu': 'Abrir menú',
    'aria-close-menu': 'Cerrar menú',
    'aria-social': 'Contacto y redes',
    'aria-whatsapp': 'WhatsApp (se abre en una pestaña nueva)',
    'aria-email': 'Correo electrónico',
    'aria-linkedin': 'LinkedIn (se abre en una pestaña nueva)',
    'aria-github': 'GitHub (se abre en una pestaña nueva)'
  },
  hr: {
    'skip-link': 'Preskoči na glavni sadržaj',
    'nav-motivation': 'Motivacijsko pismo',
    'nav-certifications': 'Certifikati',
    'nav-contact': 'Kontakt',
    'nav-about-me': 'O meni',
    'nav-projects': 'Projekti',
    'nav-about-website': 'O stranici',
    'hero-intro': 'Ja sam',
    'hero-role': 'Python i web developer',
    'hero-description': 'Dobrodošli u moj portfolio! Ja sam Alan, Python i web developer sa sjedištem u Hrvatskoj i student analize podataka. Radio sam na web projektima od osobnih blogova do e-commerce platformi i tražim priliku za daljnji razvoj u razvoju softvera i umjetnoj inteligenciji.',
    'hero-resume': 'Preuzmi životopis',
    'about-me-title': 'O meni',
    'about-me-description': 'Web developer sam koji voli pretvarati ideje u funkcionalne digitalne proizvode jednostavne za korištenje. Izrađivao sam dinamične web stranice, e-commerce platforme i alate temeljene na podacima u JavaScriptu i Pythonu, a trenutno produbljujem znanje Pythona i istražujem kako integrirati umjetnu inteligenciju u web projekte.',
    'work-experience-title': 'Radno iskustvo',
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
    'edu3-desc': 'Tajništvo za inovacije, proizvodnju i zapošljavanje.',
    'edu4-title': 'Inženjerstvo materijala',
    'skills-title': 'Vještine i tehnologije',
    'skills-languages': 'Programski jezici',
    'skills-tools': 'Frameworci i alati',
    'skills-specializations': 'Specijalizacije',
    'spec-web': 'Web razvoj',
    'spec-data': 'Analiza podataka',
    'spec-scraping': 'Web scraping',
    'spec-support': 'Tehnička podrška',
    'languages-title': 'Jezici',
    'lang-spanish': 'Španjolski',
    'lang-english': 'Engleski',
    'level-native': 'Materinski',
    'level-advanced': 'Napredno',
    'projects-title': 'Moji projekti',
    'about-website-title': 'O ovoj web stranici',
    'about-website-description': 'Ručno izrađena stranica bez frameworka: semantički HTML, moderni CSS i čisti JavaScript, dostupna na tri jezika i hostana na GitHub Pages.',
    'stat-languages': 'Jezici stranice',
    'stat-frameworks': 'Frameworci',
    'stat-projects': 'Istaknuti projekti',
    'tech-stack-title': 'Korištene tehnologije i alati',
    'see-more': 'Pogledaj na GitHubu',
    'new-tab': 'otvara se u novoj kartici',
    'aria-main-nav': 'Glavna navigacija',
    'aria-home': 'Alan Salva — natrag na vrh',
    'aria-language': 'Jezik: hrvatski',
    'aria-open-menu': 'Otvori izbornik',
    'aria-close-menu': 'Zatvori izbornik',
    'aria-social': 'Kontakt i društvene mreže',
    'aria-whatsapp': 'WhatsApp (otvara se u novoj kartici)',
    'aria-email': 'E-pošta',
    'aria-linkedin': 'LinkedIn (otvara se u novoj kartici)',
    'aria-github': 'GitHub (otvara se u novoj kartici)'
  }
};

const languageNames = {
  en: { short: 'EN', native: 'English' },
  es: { short: 'ES', native: 'Español' },
  hr: { short: 'HR', native: 'Hrvatski' }
};

// =================================
// UTILITY FUNCTIONS
// =================================
class Utils {
  static $(selector) {
    return document.querySelector(selector);
  }

  static $$(selector) {
    return document.querySelectorAll(selector);
  }

  static getStoredValue(key, defaultValue = null) {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }

  static setStoredValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Storage unavailable (private mode, blocked cookies): language just isn't remembered.
    }
  }

  static t(lang, key) {
    return translations[lang]?.[key] ?? translations.en[key] ?? '';
  }
}

// =================================
// PROJECT MANAGER
// =================================
class ProjectManager {
  constructor() {
    this.projectsGrid = Utils.$(SELECTORS.projectsGrid);
    const count = Utils.$(SELECTORS.projectsCount);
    if (count) count.textContent = projectsData.length;
  }

  render(lang) {
    if (!this.projectsGrid) return;

    const fragment = document.createDocumentFragment();
    projectsData.forEach(project => fragment.appendChild(this.createProjectElement(project, lang)));
    this.projectsGrid.replaceChildren(fragment);
  }

  createProjectElement(project, lang) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const content = document.createElement('div');
    content.className = 'project-card__content';

    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.innerHTML = '<i class="fas fa-rocket" aria-hidden="true"></i> ';
    title.append(project.title);

    const description = document.createElement('p');
    description.className = 'project-card__description';
    description.textContent = project.description[lang] || project.description.en;

    const link = document.createElement('a');
    link.className = 'project-card__link';
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = Utils.t(lang, 'see-more');
    const hidden = document.createElement('span');
    hidden.className = 'sr-only';
    hidden.textContent = `: ${project.title} (${Utils.t(lang, 'new-tab')})`;
    link.appendChild(hidden);

    content.append(title, description, link);
    card.appendChild(content);
    return card;
  }
}

// =================================
// LANGUAGE MANAGER
// =================================
class LanguageManager {
  constructor(onChange) {
    this.onChange = onChange;
    this.currentLangBtn = Utils.$(SELECTORS.currentLangBtn);
    this.langDropdown = Utils.$(SELECTORS.langDropdown);
    this.languageSwitcher = Utils.$(SELECTORS.languageSwitcher);

    const stored = Utils.getStoredValue(CONFIG.storageKey, CONFIG.defaultLanguage);
    this.currentLanguage = CONFIG.supportedLanguages.includes(stored) ? stored : CONFIG.defaultLanguage;

    this.setupEventListeners();
    this.changeLanguage(this.currentLanguage);
  }

  setupEventListeners() {
    if (this.currentLangBtn) {
      this.currentLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.isOpen() ? this.closeDropdown() : this.openDropdown();
      });

      this.currentLangBtn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.openDropdown();
          this.focusOption(0);
        }
      });
    }

    if (this.langDropdown) {
      this.langDropdown.addEventListener('keydown', (e) => {
        const options = this.getOptions();
        const index = options.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.focusOption((index + 1) % options.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.focusOption((index - 1 + options.length) % options.length);
        }
      });
    }

    document.addEventListener('click', (e) => {
      if (this.languageSwitcher && !this.languageSwitcher.contains(e.target)) {
        this.closeDropdown();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.closeDropdown();
        this.currentLangBtn?.focus();
      }
    });
  }

  getOptions() {
    return this.langDropdown ? [...this.langDropdown.querySelectorAll('.lang-option')] : [];
  }

  focusOption(index) {
    this.getOptions()[index]?.focus();
  }

  renderDropdownOptions(selectedLang) {
    if (!this.langDropdown) return;

    const items = CONFIG.supportedLanguages
      .filter(lang => lang !== selectedLang)
      .map(lang => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'lang-option';
        button.dataset.lang = lang;
        button.lang = lang;
        button.textContent = languageNames[lang].native;
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          this.changeLanguage(lang);
          this.closeDropdown();
          this.currentLangBtn?.focus();
        });
        li.appendChild(button);
        return li;
      });

    this.langDropdown.replaceChildren(...items);
  }

  changeLanguage(lang) {
    if (!translations[lang]) return;

    this.currentLanguage = lang;
    Utils.setStoredValue(CONFIG.storageKey, lang);
    document.documentElement.lang = lang;

    if (this.currentLangBtn) {
      this.currentLangBtn.innerHTML =
        `<span aria-hidden="true">${languageNames[lang].short}</span> <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>`;
    }
    this.renderDropdownOptions(lang);

    Utils.$$('[data-key]').forEach(element => {
      const text = Utils.t(lang, element.dataset.key);
      if (text) element.textContent = text;
    });

    Utils.$$('[data-aria-key]').forEach(element => {
      const text = Utils.t(lang, element.dataset.ariaKey);
      if (text) element.setAttribute('aria-label', text);
    });

    if (this.onChange) this.onChange(lang);
  }

  isOpen() {
    return this.languageSwitcher?.classList.contains('active');
  }

  openDropdown() {
    this.languageSwitcher?.classList.add('active');
    this.currentLangBtn?.setAttribute('aria-expanded', 'true');
  }

  closeDropdown() {
    this.languageSwitcher?.classList.remove('active');
    this.currentLangBtn?.setAttribute('aria-expanded', 'false');
  }
}

// =================================
// NAVIGATION MANAGER
// =================================
class NavigationManager {
  constructor() {
    this.navbar = Utils.$(SELECTORS.navbar);
    this.menuBtn = Utils.$(SELECTORS.mobileMenuBtn);
    this.menu = Utils.$(SELECTORS.navbarMenu);
    this.lang = CONFIG.defaultLanguage;

    this.setupMobileMenu();
    this.setupCurrentYear();
  }

  setLanguage(lang) {
    this.lang = lang;
    this.updateMenuLabel();
  }

  isOpen() {
    return this.navbar?.classList.contains('is-open');
  }

  updateMenuLabel() {
    if (!this.menuBtn) return;
    const key = this.isOpen() ? 'aria-close-menu' : 'aria-open-menu';
    this.menuBtn.dataset.ariaKey = key;
    this.menuBtn.setAttribute('aria-label', Utils.t(this.lang, key));
  }

  setMenu(open) {
    if (!this.navbar || !this.menuBtn) return;
    this.navbar.classList.toggle('is-open', open);
    this.menuBtn.setAttribute('aria-expanded', String(open));
    this.updateMenuLabel();
  }

  setupMobileMenu() {
    if (!this.menuBtn) return;

    this.menuBtn.addEventListener('click', () => this.setMenu(!this.isOpen()));

    Utils.$$('.nav-link').forEach(link => {
      link.addEventListener('click', () => this.setMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.setMenu(false);
        this.menuBtn.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (this.isOpen() && this.navbar && !this.navbar.contains(e.target)) {
        this.setMenu(false);
      }
    });
  }

  setupCurrentYear() {
    const yearElement = Utils.$('#current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
}

// =================================
// APPLICATION STARTUP
// =================================
function bootstrap() {
  const navigation = new NavigationManager();
  const projects = new ProjectManager();

  new LanguageManager((lang) => {
    projects.render(lang);
    navigation.setLanguage(lang);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
