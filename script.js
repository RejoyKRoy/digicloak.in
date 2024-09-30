// JavaScript for Smooth Scrolling to Sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = window.innerHeight / 2; // Center the content below the buttons
    const elementPosition = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}
