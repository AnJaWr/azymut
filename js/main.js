

  function verte(button) {
    var card = button.parentElement;
    card.classList.toggle('do-flip');
  
    }

    document.addEventListener("DOMContentLoaded", function() {
      // Funkcja do odkrywania ukrytych adresów e-mail i numerów telefonu
      function revealProtectedContent() {
        var protectedContents = document.querySelectorAll('.protected-content');
  
        protectedContents.forEach(function(element) {
          var content = element.getAttribute('data-content');
          var reversedContent = content.split('').reverse().join('');
          var linkType = element.hasAttribute('data-email') ? 'mailto:' : 'tel:';
          element.innerHTML = '<a href="' + linkType + reversedContent + '">' +  reversedContent + '</a>';
        });
      }
  
      // Wywołaj funkcję do odkrywania ukrytych treści po załadowaniu strony
      revealProtectedContent();})

         function showKontakt() {
      var kontakt = document.getElementById('overlay');
   
      var containers = document.querySelectorAll('.flip-card-3D-wrapper');   
containers.forEach(function (container) {
          container.classList.add("hidden_card") 
          });
      kontakt.classList.add('show');
      console.log("show overlay")
    }

    function closeKontakt() {
      var kontakt = document.getElementById('overlay');
      var containers = document.querySelectorAll('.flip-card-3D-wrapper');   
containers.forEach(function (container) {
          container.classList.remove("hidden_card") 
          });
      kontakt.classList.remove('show');
      console.log("hide overlay")
    }


      button.addEventListener('click', function () {
          
      });
  