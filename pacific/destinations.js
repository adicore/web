$(function() {
 $.getJSON("https://suggest.travelpayouts.com/weedle?destination_iata=JKT&locale=en&currency=usd&limit=10",
  function(destination) {
   if (destination.country_name && destination.city_name) {
    $('#flightx').html(''+destination.city_name+'');
   }
  }
 );
 });
