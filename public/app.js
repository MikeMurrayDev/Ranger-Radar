function handleAnimalSubmit(event) {
  // var animalId = document.getElementById('animal_dropdown').selectedIndex;
  // var animalValue = document.getElementsByTagName("option")[animalId].value;
  // console.log('Animal Value: ', animalValue);

  // var captive = document.getElementById('captive_dropdown').nodeValue;
  // var captiveValue = document.getElementsByTagName("option")[captive].value;
  // console.log('captiveValue: ', captiveValue);

  // var mappable = document.getElementById('mappable_dropdown').nodeValue;
  // var mappableValue = document.getElementsByTagName("option")[mappable].value;
  // console.log('mappableValue: ', mappableValue);

  // var threatened = document.getElementById('threatened_dropdown').nodeValue;
  // var threatenedValue = document.getElementsByTagName("option")[threatened].value;
  // console.log('threatenedValue: ', threatenedValue);

  // var startDate = document.getElementById('start_date').value;
  // var startDateValue = document.getElementsByTagName("option")[startDate].value;
  // console.log('startDateValue: ', startDateValue);

  // var endDate = document.getElementById('end_date').value;
  // var endDateValue = document.getElementsByTagName("option")[endDate].value;
  // console.log('endDateValue: ', endDateValue);
  
  event.preventDefault();

  // var URLBase = "https://api.inaturalist.org/v1/observation?";
  
  // var finalURL = URLBase + 'taxon_id=' + animalValue + '&captive=' + captiveValue + '&mappable=' + mappableValue + '&threatened=' + 
  //   threatenedValue + '&d1=' + startDateValue + '&d2=' + endDateValue;

  // console.log('FINAL URL: ', finalURL);
  
  let fetchData = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('https://api.inaturalist.org/v1/observations?taxon_id=43693&captive=false&mappable=true&threatened=true&d1=2019-01-01&d2=2019-11-09')
  .then(res => res.json())
  .then(data => {
    var locations = data.results.map(el => el.location);
    // console.log('HEYO: ', locations);

    var observed = data.results.map(el => el.observed_on);
    // console.log('YOHE: ', observed);
  });

  fetch('http://rangerradar.pythonanywhere.com/sightings', fetchData)
  .then(res => res.json())
  .then(console.log('hi: ', res.json))
  .then(data => {
    var locations = data.map(el => el.lat);
    console.log('HEYO: ', locations);

    var observed = data.map(el => el.long);
    console.log('YOHE: ', observed);
  });
}