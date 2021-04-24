$.getJSON("https://suggest.travelpayouts.com/weedle?destination_iata=JKT&amp;locale=en&amp;currency=usd&amp;limit=10", function(result){
       console.log(result);
       $.each(result, function(i){
         document.getElementById("flightx").innerHTML +=" "+ result[i]destination.city_name + ", " + result[i]origin.city_name + " ";
       });
     });
