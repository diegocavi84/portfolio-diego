// 1. Diccionario de traducciones
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_title: "Software Engineer",
    hero_subtitle: "Cloud & DevOps Enthusiast | Mönchengladbach, Germany",
    section_about: "Sobre mí",
    about_text: "Transición de diseño gráfico y mantenimiento de campos de golf a ingeniería de software. Formación en Masterschool (Cloud Engineering) y prácticas en Webeet implementando infraestructura con Terraform, AWS y GitHub Actions.",
    section_skills: "Habilidades Técnicas",
    section_projects: "Proyectos Destacados",
    section_contact: "Contacto"
  },
  de: {
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    hero_title: "Software Engineer", // Se suele dejar en inglés en tech, o "Softwareentwickler"
    hero_subtitle: "Cloud & DevOps Enthusiast | Mönchengladbach, Deutschland",
    section_about: "Über mich",
    about_text: "Wechsel von Grafikdesign und Greenkeeping zur Softwareentwicklung. Ausbildung am Masterschool (Cloud Engineering) und Praktikum bei Webeet mit Implementierung von Infrastruktur durch Terraform, AWS und GitHub Actions.",
    section_skills: "Technische Fähigkeiten",
    section_projects: "Ausgewählte Projekte",
    section_contact: "Kontakt"
  },
  en: {
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Software Engineer",
    hero_subtitle: "Cloud & DevOps Enthusiast | Mönchengladbach, Germany",
    section_about: "About Me",
    about_text: "Transition from graphic design and golf field maintenance to software engineering. Masterschool training (Cloud Engineering) and internship at Webeet implementing infrastructure with Terraform, AWS, and GitHub Actions.",
    section_skills: "Technical Skills",
    section_projects: "Featured Projects",
    section_contact: "Contact"
  }
};

// 2. Función para cambiar el idioma
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    // Si la traducción existe, la ponemos. Si no, dejamos el original.
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
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
  const savedLang = localStorage.getItem('preferred-lang') || 'es';
  setLanguage(savedLang);
});