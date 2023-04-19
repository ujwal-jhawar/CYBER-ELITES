var map = null;
            window.onload = function() {
                var centre = new L.LatLng(28.549948, 77.268241);
                map=new MapmyIndia.Map('map',{center:centre,zoomControl: true,hybrid:true });
                    /*1.create a MapmyIndia Map by simply calling new MapmyIndia.Map() and passsing it at the minimum div object, all others are optional...
                    2.all leaflet mapping functions can be called simply on the L object
                    3.MapmyIndia may extend and in future modify the customised/forked Leaflet object to enhance mapping functionality for developers, which will be clearly documented in the MapmyIndia API documentation section.*/
             

                var event_div = document.getElementById("event-log");
                /***map-events****/
                map.on("dblclick", function(e) {
                    var pt = e.latlng;/*event returns lat lng of clicked point*/
                   event_div.innerHTML= "dbclick:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>" + event_div.innerHTML;
                });
                map.on("click", function(e) {
                    var pt = e.latlng;/*event returns lat lng of clicked point*/
                   event_div.innerHTML= "click:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>" + event_div.innerHTML;
                });
                map.on("resize", function(e) {
                    event_div.innerHTML="map resized</br>" + event_div.innerHTML;
                });
                map.on("mouseup", function(e) {
                    var pt = e.latlng;/*event returns lat lng of current point*/
                    event_div.innerHTML = "mouseup:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>" + event_div.innerHTML;
                });
                map.on("mousedown", function(e) {
                    var pt = e.latlng;/*event returns lat lng of current point*/
                    event_div.innerHTML = "mousedown:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>" + event_div.innerHTML;
                });
            };
            
            function mapmyindia_current_zoom_level() {
                var zoom = map.getZoom();/*returns the current zoom level*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "Current zoom level:" + zoom + "</br>"+event_div.innerHTML;
            }
            function mapmyindia_current_center_location() {
                var pt = map.getCenter();/*returns the center of map*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "Current Center:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>"+event_div.innerHTML;
            }
            function mapmyindia_current_bound() {
                var bounds = map.getBounds();/*Returns the rectangle in WGS coordinates that is currently displayed in the containing HTML element i.e Map.*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "current bound:</br> north east lat:" + bounds.getNorthEast().lat + "</br> north east lng:" + bounds.getNorthEast().lng + "</br>south west lat:" + bounds.getSouthWest().lat + "</br>south west lng:" + bounds.getSouthWest().lng + "</br>"+event_div.innerHTML;
            }
            function mapmyindia_map_pan() {
               var pt=new L.LatLng(28.559835482012822,77.28323936462401);
               var event_div = document.getElementById("event-log");
               event_div.innerHTML='';
               event_div.innerHTML= "Map pan to:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>"+event_div.innerHTML;    
               map.panTo(pt);/*Pans the map to a given lat long */
            }
            function mapmyindia_set_center_and_zoom_level() {
                var pt = new L.LatLng(28.549948, 77.268241);/*WGS location object*/
                map.setView(pt, 8);/*function that modifies both center map position and zoom leveL.*/
            }
            function mapmyindia_array_of_location_fit_into_bound() {
                var latitudeArr = [28.549948, 28.552232, 28.551748, 28.551738, 28.548602, 28.554603, 28.545639, 28.544339, 28.553196, 28.545842];
                var longitudeArr = [77.268241, 77.268941, 77.269022, 77.270164, 77.271546, 77.268305, 77.26480, 77.26424, 77.265407, 77.264195];
                var maxlat = Math.max.apply(null, latitudeArr);
                var maxlon = Math.max.apply(null, longitudeArr);
                var minlat = Math.min.apply(null, latitudeArr);
                var minlon = Math.min.apply(null, longitudeArr);
                var southWest = L.latLng(maxlat, maxlon);/*south-west WGS location object*/
                var northEast = L.latLng(minlat, minlon);/*north-east WGS location object*/
                var bounds = L.latLngBounds(southWest, northEast);/*This class represents bounds on the Earth sphere, defined by south-west and north-east corners.i.e Creates a new WGS bounds.*/
                map.fitBounds(bounds);/*Sets the center map position and level so that all markers is the area of the map that is displayed in the map area*/
                
            }
            function mapmyindia_move_to_center() {
                var pt = new L.LatLng(28.549948, 77.268241);/*WGS location object*/
                map.setView(pt);/* new map position to be in the middle of the HTML element where map is drawn.*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "Map pan to:</br> lat:" + pt.lat + "</br>lng:" + pt.lng + "</br>"+event_div.innerHTML; 
            }
            function mapmyindia_zoom_in() {
                map.zoomIn();/*Zooms in one zoom step, unless current zoom level is the minimal zoom level. */

                var zoom=map.getZoom();/*zoom must be number that is set as new zoom level between 1 and 16*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "Zoom level set to: "+ zoom +event_div.innerHTML; 
            }
            function mapmyindia_zoom_out() {
                map.zoomOut();/*Zooms out one zoom step, unless current zoom level is the maximal zoom level. */
                var zoom=map.getZoom();/*zoom must be number that is set as new zoom level between 1 and 16*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "Zoom level set to: "+ zoom +event_div.innerHTML; 
            }
            function mapmyindia_set_zoom() {
                var zoom=12;
                map.setZoom(zoom);/*zoom must be number that is set as new zoom level between 1 and 16*/
                var event_div = document.getElementById("event-log");
                event_div.innerHTML='';
                event_div.innerHTML= "Zoom level set to: "+ zoom +event_div.innerHTML; 
            }