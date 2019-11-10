function handleAnimalSubmit(event) {
  event.preventDefault();

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
          lat: -1.5398388646,
          lng: 35.012608336
        },
        zoom: 9
      });

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
