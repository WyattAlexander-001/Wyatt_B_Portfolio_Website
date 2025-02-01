document.addEventListener("DOMContentLoaded", () => {
    // 1) Typing code
    const roles = [
      "Automation Engineer", 
      "Web Developer",
      "Game Developer",
      "Forever Learner"
    ];
    
    const roleElement = document.getElementById("role");
    if (!roleElement) return; // If there's no #role in the page, do nothing
  
    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;
  
    function typeRole() {
      // Clear the text at the start of a new role
      roleElement.textContent = "";
      letterIndex = 0;
  
      typingInterval = setInterval(() => {
        roleElement.textContent += roles[roleIndex].charAt(letterIndex);
        letterIndex++;
  
        // Once we've typed all letters in the current role...
        if (letterIndex === roles[roleIndex].length) {
          clearInterval(typingInterval);
          // Pause, then move to the next role
          setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typeRole();
          }, 1000); // 1 second pause before typing the next role
        }
      }, 150); // 150ms between each letter
    }
  
    // Start typing the first role
    typeRole();
  
    // 2) Project Filter Code
    const filterButtons = document.querySelectorAll('.project-list li');
    const projectBoxes  = document.querySelectorAll('.project-box');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove "active" from all buttons, then add to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        // Get the filter category
        const category = button.getAttribute('data-filter');
  
        // Show/hide .project-box elements
        projectBoxes.forEach(box => {
          const boxCategory = box.getAttribute('data-category');
          // if "all", show everything; else match category
          if (category === 'all' || boxCategory === category) {
            box.style.display = 'block';
          } else {
            box.style.display = 'none';
          }
        });
      });
    });

    // Grab the "sun" button (dark/light toggle)
    const darkLightBtn = document.querySelector('.dark-light-btn');
    darkLightBtn.addEventListener('click', () => {
        // Toggle the .light-theme class on <html>
        document.documentElement.classList.toggle('light-theme');
    });
  });
  