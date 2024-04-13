

  function overPrihlasenie() {
    // Tu by ste mali overiť prihlasovacie údaje, napríklad odoslať na server
    // Na demonštraciu len zobrazíme správu
    alert("Prihlásenie bolo úspešné!");
  }
   // Funkcia na vymazanie textu z textového poľa
    function poslatSpravu() {
      // Vynulovanie hodnoty textového poľa
      document.getElementById('spravaText').value = '';
      // Prípadne tu môžete pridať kód na odoslanie správy na server alebo do iného komponentu
      alert("Vaša správa bola odoslaná."); // Len na demonštráciu
    }