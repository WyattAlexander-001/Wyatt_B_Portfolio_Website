document.addEventListener("DOMContentLoaded", () => {
    // 1) Typing Code
    const roles = [
      "Automation Engineer", 
      "Web Developer",
      "Game Developer",
      "Forever Learner"
    ];
    
    const roleElement = document.getElementById("role");
    if (roleElement) {
      let roleIndex = 0;
      let letterIndex = 0;
      let typingInterval;
    
      function typeRole() {
        roleElement.textContent = "";
        letterIndex = 0;
    
        typingInterval = setInterval(() => {
          roleElement.textContent += roles[roleIndex].charAt(letterIndex);
          letterIndex++;
    
          if (letterIndex === roles[roleIndex].length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              roleIndex = (roleIndex + 1) % roles.length;
              typeRole();
            }, 1000);
          }
        }, 150);
      }
    
      typeRole();
    }
    
    // 2) Project Filter Code
    const filterButtons = document.querySelectorAll('.project-list li');
    const projectBoxes  = document.querySelectorAll('.project-box');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    
        const category = button.getAttribute('data-filter');
    
        projectBoxes.forEach(box => {
          const boxCategory = box.getAttribute('data-category');
          box.style.display = (category === 'all' || boxCategory === category) ? 'block' : 'none';
        });
      });
    });
    
    // 3) Dark/Light Toggle
    const darkLightBtn = document.querySelector('.dark-light-btn');
    darkLightBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('light-theme');
    });
    
    // 4) Mobile Menu Toggle
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const navLinks = document.querySelector(".nav-links");
    const nav = document.querySelector("nav");
    
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      
      navLinks.classList.toggle("open");
      nav.classList.toggle("menu-open");
    
      // Toggle hamburger button display based on menu state
      if (navLinks.classList.contains("open")) {
        hamburgerBtn.style.display = "none";
      } else {
        hamburgerBtn.style.display = "block";
      }
    });
    
    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove("open");
        nav.classList.remove("menu-open");
        hamburgerBtn.style.display = "block";
      });
    });
    
    // Close menu if user clicks outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("open") && !navLinks.contains(e.target)) {
        navLinks.classList.remove("open");
        nav.classList.remove("menu-open");
        hamburgerBtn.style.display = "block";
      }
    });
    
    // 5) Reset Mobile State on Resize to Desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove("open");
        nav.classList.remove("menu-open");
        hamburgerBtn.style.display = "none"; // Hamburger hidden on desktop
      }
    });
});
