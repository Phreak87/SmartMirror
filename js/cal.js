
    function Kalender () {
		
 	  var d = new Date(); 
	  var Monat = d.getMonth() + 1; 
	  var Jahr = d.getYear() + 1900;
	  
      Monatsname 	= new Array("Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
      Tag 			= new Array("M", "D", "M", "D", "F", "S", "S");
 
	  // aktuelles Datum für die spätere Hervorhebung ermitteln
      var jetzt = new Date();
      var DieserMonat = jetzt.getMonth() + 1;
      var DiesesJahr = jetzt.getYear() + 1900;
      var DieserTag = jetzt.getDate();
 
	  // ermittle Wochentag des ersten Tags im Monat halte diese Information in Start fest
      var Zeit = new Date(Jahr, Monat - 1, 1);
      var Start = Zeit.getDay() - 1;
      if (Start == 0) {Start = 7;}

      var Stop = 31; if (Monat == 4 || Monat == 6 || Monat == 9 || Monat == 11){Stop=30};
 
	  // ...und der Februar nur 28 Tage...
      if (Monat == 2) {
        Stop = 28;
		// ...außer in Schaltjahren
        if (Jahr %   4 == 0) Stop++;
        if (Jahr % 100 == 0) Stop--;
        if (Jahr % 400 == 0) Stop++;
      }
 
      var tabelle = document.getElementById('Kalender');
	  tabelle.innerHTML = "";
       for (var i = 0; i <= Start-1; i++) {
			var thisday = document.createElement("Div");
			var att = document.createAttribute("class");att.value = "unit older";thisday.setAttributeNode(att);
			thisday.innerHTML = ""
			tabelle.appendChild (thisday);
	   }
       for (var i = 1; i <= Stop; i++) {
			var thisday = document.createElement("Div");
			if (DieserTag == i){
				var att = document.createAttribute("class");att.value = "unit active";thisday.setAttributeNode(att);
			} else {
				var att = document.createAttribute("class");att.value = "unit";thisday.setAttributeNode(att);
			}
			
			thisday.innerHTML = "<b>" + i + "</b>"
			tabelle.appendChild (thisday);
	   }
	   
     }
