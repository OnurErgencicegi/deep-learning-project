document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle,.fa-chevron-down');
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        var dropdownContent = this.nextElementSibling;
        closeOtherDropdowns(dropdownContent);
        toggleDropdown(dropdownContent);
      });
    });
  
    // Kullanıcı menünün dışına tıkladığında dropdown'ları kapatma
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-toggle,.fa-chevron-down')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
          closeDropdown(dropdown);
        });
      }
    };
  
    function toggleDropdown(dropdownContent) {
      dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    }
    
  
    function closeDropdown(dropdownContent) {
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      }
    }

    function closeOtherDropdowns(currentDropdown) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdown) {
          if (dropdown !== currentDropdown) {
            closeDropdown(dropdown);
          }
        });
      }
    
  });
  