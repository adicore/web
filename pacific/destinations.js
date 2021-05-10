$.getJSON("https://suggest.travelpayouts.com/weedle?destination_iata=JKT&locale=en&currency=usd&limit=10", function(result){
       console.log(result);
       $.each(result, function(i){
         document.getElementById("flightx").innerHTML +=" "+ result[i].city_name + " ";
       });
     });
