function handleAnimalSubmit(event) {
  
    fetch('https://api.inaturalist.org/v1/observations?taxon_id=43693&captive=false&mappable=true&threatened=true&d1=2019-01-01&d2=2019-11-09')
      .then(res => res.json())
      .then(data => {
        var inaturalistLocations = data.results.map(el => el.location.split(','));
        console.log('HEYO: ', inaturalistLocations);
  
        var observed = data.results.map(el => el.observed_on);
        console.log('YOHE: ', observed);
  
        var map;
  
        map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: -19.16, lng: 15.86
          },
          zoom: 9
        });

        var c1 = corridors[0]
          var c2 = corridors[1]
          var c3 = corridors[2]

          // Construct the polygon.
          var cor1 = new google.maps.Polygon({
            paths: c1,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
          });

          var cor2 = new google.maps.Polygon({
            paths: c2,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
          });

          var cor3 = new google.maps.Polygon({
            paths: c3,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
          });




          cor1.setMap(map);
          cor2.setMap(map);
          cor3.setMap(map);

  
        for (let i = 0; i < inaturalistLocations.length; i++) {
  
          var latLong = {
              lat: Number(inaturalistLocations[i][0]),
              lng: Number(inaturalistLocations[i][1])
            };
  
          var personeIcon = {
            url: './personee.png',
            scaledSize: new google.maps.Size(20, 20),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10, 10)
          }
  
          var personMarker = new google.maps.Marker({
            position: latLong,
            map: map,
            icon: personeIcon
          })
        }
      });
  }