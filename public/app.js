function handleAnimalSubmit(event) {
  
  event.preventDefault();

  fetch('https://api.inaturalist.org/v1/observations?taxon_id=43693&captive=false&mappable=true&threatened=true&d1=2019-01-01&d2=2019-11-09')
    .then(res => res.json())
    .then(data => {
      var locations = data.results.map(el => el.location);
      // console.log('HEYO: ', locations);

      var observed = data.results.map(el => el.observed_on);
      // console.log('YOHE: ', observed);
    });

  
}