/**
 * ALAN SALVA PORTFOLIO - OPTIMIZED JAVASCRIPT
 * Author: Alan Salva
 * Version: 2.0.0
 * Last Updated: 2025
 */

'use strict';

// =================================
// CONFIGURATION & CONSTANTS
// =================================
const CONFIG = {
  projectsPerLoad: 3,
  loadDelay: 1000,
  defaultLanguage: 'en',
  storageKey: 'selectedLanguage'
};

const SELECTORS = {
  projectsGrid: '#projects-grid',
  loadingIndicator: '#loading-indicator',
  currentLangBtn: '#currentLang',
  langDropdown: '#langDropdown',
  languageSwitcher: '.language-switcher',
  mobileMenuInput: '#mobile-menu-toggle',
  navbarMenu: '.navbar__menu'
};

// =================================
// PROJECT DATA
// =================================
const projectsData = [
  {
    title: "Web Scraping - Tugurium",
    description: "Scraping of static website using Requests, Pandas, git, github and BeautifulSoup",
    link: "https://github.com/tyhrr/script-web",
    technologies: ["Python", "BeautifulSoup", "Pandas", "Git"]
  },
  {
    title: "Personal Portfolio",
    description: "Personal WebSite, using HTML, CSS, JS and hosting in github pages",
    link: "https://github.com/tyhrr/portfolio-optimized",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "CV Processor",
    description: "Extractor de informacion de CV en formato PDF,PNG,JPG",
    link: "https://github.com/tyhrr/CV_processor",
    technologies: ["Python", "PDF Processing", "OCR"]
  }
];

// =================================
// TRANSLATION DATA
// =================================
const translations = {
  en: {
    'nav-motivation': 'Motivation',
    'nav-resume': 'Resume',
    'nav-contact': 'Contact',
    'nav-about-me': 'About Me',
    'nav-projects': 'Projects',
    'nav-about-website': 'About Website',
    'hero-greeting': 'HELLO',
    'hero-intro': "I'm",
    'hero-role': 'Web Developer',
    'hero-description': "Welcome to my personal portfolio! I'm Alan, a Python developer and data analysis student. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms. I am seeking an opportunity to enhance and expand my knowledge and skills in the field of development and artificial intelligence.",
    'hero-resume': 'Resume',
    'about-me-title': 'About Me',
    'about-me-description': "I'm a passionate Python Developer and IT Support specialist with experience in web development, data analysis, and technical support. Currently studying Development with Python and constantly expanding my knowledge in artificial intelligence and software development.",
    'work-experience-title': 'Work Experience',
    'education-title': 'Education',
    'skills-title': 'Skills & Technologies',
    'languages-title': 'Languages',
    'projects-title': 'My Projects',
    'about-website-title': 'About This Website',
    'about-website-description': 'A complete journey from concept to deployment - documenting the evolution of this portfolio',
    'tech-stack-title': 'Technologies & Tools Used',
    'loading-text': 'Loading more projects...',
    'see-more': 'See more'
  },
  es: {
    'nav-motivation': 'Motivación',
    'nav-resume': 'Currículum',
    'nav-contact': 'Contacto',
    'nav-about-me': 'Sobre Mí',
    'nav-projects': 'Proyectos',
    'nav-about-website': 'Sobre el Sitio',
    'hero-greeting': 'HOLA',
    'hero-intro': 'Soy',
    'hero-role': 'Desarrollador Web',
    'hero-description': '¡Bienvenido a mi portafolio personal! Soy Alan, desarrollador Python y estudiante de análisis de datos. He trabajado en una variedad de proyectos web, desde blogs personales hasta plataformas de comercio electrónico. Busco una oportunidad para mejorar y expandir mis conocimientos y habilidades en el campo del desarrollo y la inteligencia artificial.',
    'hero-resume': 'Currículum',
    'about-me-title': 'Sobre Mí',
    'about-me-description': 'Soy un desarrollador Python apasionado y especialista en soporte técnico con experiencia en desarrollo web, análisis de datos y soporte técnico. Actualmente estudiando Desarrollo con Python y expandiendo constantemente mis conocimientos en inteligencia artificial y desarrollo de software.',
    'work-experience-title': 'Experiencia Laboral',
    'education-title': 'Educación',
    'skills-title': 'Habilidades y Tecnologías',
    'languages-title': 'Idiomas',
    'projects-title': 'Mis Proyectos',
    'about-website-title': 'Sobre Este Sitio Web',
    'about-website-description': 'Un viaje completo desde el concepto hasta el despliegue - documentando la evolución de este portafolio',
    'tech-stack-title': 'Tecnologías y Herramientas Utilizadas',
    'loading-text': 'Cargando más proyectos...',
    'see-more': 'Ver más'
  },
  hr: {
    'nav-motivation': 'Motivacija',
    'nav-resume': 'Životopis',
    'nav-contact': 'Kontakt',
    'nav-about-me': 'O Meni',
    'nav-projects': 'Projekti',
    'nav-about-website': 'O Web Stranici',
    'hero-greeting': 'POZDRAV',
    'hero-intro': 'Ja sam',
    'hero-role': 'Web Developer',
    'hero-description': 'Dobrodošli u moj osobni portfelj! Ja sam Alan, Python developer i student analize podataka. Radio sam na raznim web projektima, od osobnih blogova do e-commerce platformi. Tražim priliku da poboljšam i proširim svoje znanje i vještine u području razvoja i umjetne inteligencije.',
    'hero-resume': 'Životopis',
    'about-me-title': 'O Meni',
    'about-me-description': 'Strastveni sam Python developer i stručnjak za IT podršku s iskustvom u web developmentu, analizi podataka i tehničkoj podršci. Trenutno studiram Development s Pythonom i stalno proširujem svoje znanje u umjetnoj inteligenciji i razvoju softvera.',
    'work-experience-title': 'Radno Iskustvo',
    'education-title': 'Obrazovanje',
    'skills-title': 'Vještine i Tehnologije',
    'languages-title': 'Jezici',
    'projects-title': 'Moji Projekti',
    'about-website-title': 'O Ovoj Web Stranici',
    'about-website-description': 'Potpuno putovanje od koncepta do implementacije - dokumentiranje evolucije ovog portfelja',
    'tech-stack-title': 'Korištene Tehnologije i Alati',
    'loading-text': 'Učitavam više projekata...',
    'see-more': 'Saznaj više'
  }
};

const languageNames = {
  en: 'EN',
  es: 'ES',
  hr: 'HR'
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

  static createElement(tag, className = '', content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
  }

  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  static getStoredValue(key, defaultValue = null) {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch (error) {
      console.warn('localStorage not available:', error);
      return defaultValue;
    }
  }

  static setStoredValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }
}

// =================================
// PROJECT MANAGER CLASS
// =================================
class ProjectManager {
  constructor() {
    this.currentIndex = 0;
    this.isLoading = false;
    this.projectsGrid = Utils.$(SELECTORS.projectsGrid);
    this.loadingIndicator = Utils.$(SELECTORS.loadingIndicator);
    
    this.init();
  }

  init() {
    this.loadInitialProjects();
    this.setupScrollListener();
    this.setupProjectNavigation();
  }

  loadInitialProjects() {
    this.loadMoreProjects();
  }

  async loadMoreProjects() {
    if (this.isLoading || this.currentIndex >= projectsData.length) return;

    this.isLoading = true;
    this.showLoading();

    try {
      await this.simulateLoading();
      this.renderProjects();
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      this.isLoading = false;
      this.hideLoading();
    }
  }

  simulateLoading() {
    return new Promise(resolve => {
      setTimeout(resolve, CONFIG.loadDelay);
    });
  }

  renderProjects() {
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(
      this.currentIndex + CONFIG.projectsPerLoad,
      projectsData.length
    );

    for (let i = this.currentIndex; i < endIndex; i++) {
      const project = projectsData[i];
      const projectElement = this.createProjectElement(project);
      fragment.appendChild(projectElement);
    }

    this.projectsGrid.appendChild(fragment);
    this.currentIndex = endIndex;

    // Update project links with current language
    this.updateProjectLinks();
  }

  createProjectElement(project) {
    const projectCard = Utils.createElement('div', 'project-card');
    
    const currentLang = LanguageManager.getCurrentLanguage();
    const seeMoreText = translations[currentLang]?.['see-more'] || 'See more';

    projectCard.innerHTML = `
      <div class="project-card__content">
        <h3 class="project-card__title">
          <i class="fas fa-rocket" aria-hidden="true"></i>
          ${project.title}
        </h3>
        <p class="project-card__description">${project.description}</p>
        <a href="${project.link}" 
           class="project-card__link" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="View ${project.title} project">
          ${seeMoreText}
        </a>
      </div>
    `;

    return projectCard;
  }

  updateProjectLinks() {
    const currentLang = LanguageManager.getCurrentLanguage();
    const seeMoreText = translations[currentLang]?.['see-more'] || 'See more';
    
    Utils.$$('.project-card__link').forEach(link => {
      link.textContent = seeMoreText;
    });
  }

  setupScrollListener() {
    const handleScroll = Utils.throttle(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      if (scrollPercent > 80) {
        this.loadMoreProjects();
      }
    }, 250);

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  setupProjectNavigation() {
    const projectsLink = Utils.$('a[href="#projects"]');
    if (projectsLink) {
      projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToProjects();
      });
    }
  }

  scrollToProjects() {
    const projectsSection = Utils.$('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  showLoading() {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = 'block';
      this.loadingIndicator.setAttribute('aria-hidden', 'false');
    }
  }

  hideLoading() {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = 'none';
      this.loadingIndicator.setAttribute('aria-hidden', 'true');
    }
  }
}

// =================================
// LANGUAGE MANAGER CLASS
// =================================
class LanguageManager {
  constructor() {
    this.currentLanguage = Utils.getStoredValue(CONFIG.storageKey, CONFIG.defaultLanguage);
    this.currentLangBtn = Utils.$(SELECTORS.currentLangBtn);
    this.langDropdown = Utils.$(SELECTORS.langDropdown);
    this.languageSwitcher = Utils.$(SELECTORS.languageSwitcher);
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.changeLanguage(this.currentLanguage);
  }

  setupEventListeners() {
    // Main language button click
    if (this.currentLangBtn) {
      this.currentLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleDropdown();
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (this.languageSwitcher && !this.languageSwitcher.contains(e.target)) {
        this.closeDropdown();
      }
    });

    // Close dropdown on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDropdown();
      }
    });
  }

  updateDropdownOptions(selectedLang) {
    if (!this.langDropdown) return;

    const allLanguages = ['en', 'es', 'hr'];
    const otherLanguages = allLanguages.filter(lang => lang !== selectedLang);
    
    this.langDropdown.innerHTML = '';
    
    otherLanguages.forEach(lang => {
      const button = Utils.createElement('button', 'lang-option');
      button.setAttribute('data-lang', lang);
      button.setAttribute('role', 'menuitem');
      button.textContent = languageNames[lang];
      
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.changeLanguage(lang);
        this.closeDropdown();
      });
      
      this.langDropdown.appendChild(button);
    });
  }

  changeLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Language ${lang} not supported`);
      return;
    }

    this.currentLanguage = lang;
    Utils.setStoredValue(CONFIG.storageKey, lang);
    
    // Update UI
    this.updateLanguageButton(lang);
    this.updateDropdownOptions(lang);
    this.updateTranslations(lang);
    this.updateAriaLabels(lang);
    
    // Update projects
    if (window.projectManager) {
      window.projectManager.updateProjectLinks();
    }
  }

  updateLanguageButton(lang) {
    if (this.currentLangBtn) {
      this.currentLangBtn.innerHTML = `
        ${languageNames[lang]} 
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
      `;
    }
  }

  updateTranslations(lang) {
    Utils.$$('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      const translation = translations[lang]?.[key];
      
      if (translation) {
        element.textContent = translation;
      }
    });
  }

  updateAriaLabels(lang) {
    // Update ARIA labels based on language
    const langMappings = {
      en: {
        'language-selector': 'Language selector',
        'toggle-menu': 'Toggle mobile menu'
      },
      es: {
        'language-selector': 'Selector de idioma',
        'toggle-menu': 'Alternar menú móvil'
      },
      hr: {
        'language-selector': 'Selektor jezika',
        'toggle-menu': 'Prebaci mobilni meni'
      }
    };

    const labels = langMappings[lang] || langMappings.en;
    
    if (this.languageSwitcher) {
      this.languageSwitcher.setAttribute('aria-label', labels['language-selector']);
    }
  }

  toggleDropdown() {
    if (this.languageSwitcher) {
      const isActive = this.languageSwitcher.classList.contains('active');
      this.languageSwitcher.classList.toggle('active');
      
      if (this.currentLangBtn) {
        this.currentLangBtn.setAttribute('aria-expanded', !isActive);
      }
    }
  }

  closeDropdown() {
    if (this.languageSwitcher) {
      this.languageSwitcher.classList.remove('active');
      
      if (this.currentLangBtn) {
        this.currentLangBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  static getCurrentLanguage() {
    return Utils.getStoredValue(CONFIG.storageKey, CONFIG.defaultLanguage);
  }
}

// =================================
// NAVIGATION MANAGER CLASS
// =================================
class NavigationManager {
  constructor() {
    this.mobileMenuInput = Utils.$(SELECTORS.mobileMenuInput);
    this.navbarMenu = Utils.$(SELECTORS.navbarMenu);
    
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupSmoothScroll();
    this.setupCurrentYear();
  }

  setupMobileMenu() {
    if (this.mobileMenuInput) {
      this.mobileMenuInput.addEventListener('change', (e) => {
        const isOpen = e.target.checked;
        document.body.style.overflow = isOpen ? 'hidden' : '';
        
        if (this.navbarMenu) {
          this.navbarMenu.setAttribute('aria-hidden', !isOpen);
        }
      });
    }

    // Close mobile menu when clicking on nav links
    Utils.$$('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (this.mobileMenuInput) {
          this.mobileMenuInput.checked = false;
          document.body.style.overflow = '';
        }
      });
    });
  }

  setupSmoothScroll() {
    Utils.$$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = Utils.$(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
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
// PERFORMANCE MANAGER CLASS
// =================================
class PerformanceManager {
  constructor() {
    this.init();
  }

  init() {
    this.preloadCriticalResources();
    this.setupLazyLoading();
    this.optimizeAnimations();
  }

  preloadCriticalResources() {
    const criticalImages = [
      'assets/img/banner.jpg',
      'assets/img/fotoperfil.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      Utils.$$('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  optimizeAnimations() {
    // Reduce animations for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--transition-base', '0.01ms');
      document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    }
  }
}

// =================================
// APPLICATION INITIALIZATION
// =================================
class App {
  constructor() {
    this.managers = {};
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.bootstrap());
    } else {
      this.bootstrap();
    }
  }

  bootstrap() {
    try {
      this.initializeManagers();
      this.setupErrorHandling();
      this.logAppInfo();
    } catch (error) {
      console.error('Failed to initialize application:', error);
    }
  }

  initializeManagers() {
    this.managers.performance = new PerformanceManager();
    this.managers.navigation = new NavigationManager();
    this.managers.language = new LanguageManager();
    this.managers.project = new ProjectManager();

    // Make project manager globally available for language updates
    window.projectManager = this.managers.project;
  }

  setupErrorHandling() {
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });
  }

  logAppInfo() {
    const isDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    
    if (isDev) {
      console.log('🚀 Alan Salva Portfolio initialized successfully');
      console.log('📊 Managers loaded:', Object.keys(this.managers));
    }
  }
}

// =================================
// APPLICATION STARTUP
// =================================
new App();