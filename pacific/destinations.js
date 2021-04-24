 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var data=JSON.parse(xhttp.responseText);
         data.forEach(function(element) {
      document.getElementById("flightz").innerHTML +=" "+ destination.city_name + ", " + destination.city_name + " ";
    });
      }
  };
  xhttp.open("GET", "https://suggest.travelpayouts.com/weedle?destination_iata=JKT&amp;locale=en&amp;currency=usd&amp;limit=10", true);
  xhttp.send();
