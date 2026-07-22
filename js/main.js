// 1. Diccionario de traducciones
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_title: 'De código a producción,<br>sin <span class="accent">fricción.</span>',
    hero_subtitle: "Software Engineer | Cloud & DevOps Enthusiast | Mönchengladbach, Germany",
    section_about: "Sobre mí",
    about_text: "Transición de diseño gráfico y mantenimiento de campos de golf a ingeniería de software. Formación en Masterschool (Cloud Engineering) y prácticas en Webeet implementando infraestructura con Terraform, AWS y GitHub Actions.",
    section_skills: "Habilidades Técnicas",
    section_projects: "Proyectos Destacados",
    section_contact: "Contacto",
    btn_projects: "Ver Proyectos",
    btn_contact: "Contactar",
    project1_comment: "// 🔮 Generador interactivo de cartas astrológicas",
    project1_desc: "Cálculo de signos solares y consumo de API de horóscopos en tiempo real, construido con JavaScript vanilla.",
    project2_comment: "// ☁️ Dashboard serverless de monitoreo",
    project2_desc: "Arquitectura AWS: EventBridge → Lambda → CloudWatch → S3, para métricas de CPU en tiempo real."
  },
  de: {
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    hero_title: 'Vom Code zur Produktion,<br>ohne <span class="accent">Reibung.</span>',
    hero_subtitle: "Software Engineer | Cloud & DevOps Enthusiast | Mönchengladbach, Deutschland",
    section_about: "Über mich",
    about_text: "Wechsel von Grafikdesign und Greenkeeping zur Softwareentwicklung. Ausbildung am Masterschool (Cloud Engineering) und Praktikum bei Webeet mit Implementierung von Infrastruktur durch Terraform, AWS und GitHub Actions.",
    section_skills: "Technische Fähigkeiten",
    section_projects: "Ausgewählte Projekte",
    section_contact: "Kontakt",
    btn_projects: "Projekte ansehen",
    btn_contact: "Kontaktieren",
    project1_comment: "// 🔮 Interaktiver Astrologie-Kartengenerator",
    project1_desc: "Berechnung von Sonnenzeichen und Anbindung an eine Horoskop-API in Echtzeit, gebaut mit Vanilla JavaScript.",
    project2_comment: "// ☁️ Serverloses Monitoring-Dashboard",
    project2_desc: "AWS-Architektur: EventBridge → Lambda → CloudWatch → S3, für CPU-Metriken in Echtzeit."
  },
  en: {
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: 'From code to production,<br>no <span class="accent">friction.</span>',
    hero_subtitle: "Software Engineer | Cloud & DevOps Enthusiast | Mönchengladbach, Germany",
    section_about: "About Me",
    about_text: "Transition from graphic design and golf field maintenance to software engineering. Masterschool training (Cloud Engineering) and internship at Webeet implementing infrastructure with Terraform, AWS, and GitHub Actions.",
    section_skills: "Technical Skills",
    section_projects: "Featured Projects",
    section_contact: "Contact",
    btn_projects: "View Projects",
    btn_contact: "Get in Touch",
    project1_comment: "// 🔮 Interactive astrology chart generator",
    project1_desc: "Sun sign calculation and real-time horoscope API integration, built with vanilla JavaScript.",
    project2_comment: "// ☁️ Serverless monitoring dashboard",
    project2_desc: "AWS architecture: EventBridge → Lambda → CloudWatch → S3, for real-time CPU metrics."
  }
};

// 2. Función para cambiar el idioma
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'hero_title') {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Guardar preferencia en el navegador
  localStorage.setItem('preferred-lang', lang);
  document.getElementById('language-selector').value = lang;
}

// 3. Escuchar el cambio en el selector
const langSelector = document.getElementById('language-selector');

langSelector.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// 4. Al cargar la página, verificar si hay idioma guardado
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred-lang') || 'en';
  setLanguage(savedLang);
});