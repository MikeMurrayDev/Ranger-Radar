// import axios from 'axios';

// function handleAnimalSubmit(event) {  
//   event.preventDefault();

//   fetch('https://api.inaturalist.org/v1/observations?taxon_id=43693&captive=false&mappable=true&threatened=true&d1=2019-01-01&d2=2019-11-09')
//     .then(res => res.json())
//     .then(data => {
//       var naturalistLocations = data.results.map(el => el.location);
//       var observed = data.results.map(el => el.observed_on);
//     });

//   axios
//     .get('/sightings')
//     .then(response => JSON.stringify(response.data))
//     .then(data => {
//       var movebankLat = data.map(el => el.lat);
//       console.log('Move Lat: ', movebankLat);
//       var movebankLong = data.map(el => el.long);
//       console.log('Move Long: ', movebankLong);
//     });

// }