import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { MapService } from './map-service';



$(document).ready(function() {
  let itineraryItems = [];
  function createList(location){
    let list = $("#itineraryList").html();
    list += `<li>${location}</li>`;
    $("#itineraryList").html(list);
  }

  $("#itineraryLocation").click(function(){
    let location = $("#location").val();
    createList(location);
    itineraryItems.push(encodeURI(location));
    console.log(itineraryItems);
  })
  $("#finalSubmit").click(function(){
    (async () => {
      let mapService = new MapService();
      const map = await mapService.getMarkedMap(itineraryItems);
      updateDisplay(map);
    })();

    const updateDisplay = function(map) {
      let image = new Image();
      image.id = "map";
      image.src = map.url;
      $(".mapViewer").html(image);
    }
  })
})