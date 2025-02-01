document.addEventListener("DOMContentLoaded", () => {
    const roles = [
      "Automation Engineer", 
      "Web Developer",
      "Game Developer",
      "Forever Learner",
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
  });
  