// Ajax Call using XMLHttpRequest 
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true`);
    request.send();
  
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);// data has completely changed 
  
      const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    
  // we have to register a callback on the request object for the load event like this, we are registering beforeend and when the data is come it will execute the fn
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
  };
  
  getCountryData('portugal');
  // getCountryData('usa');
  getCountryData('germany');
  
 /*
//  Callback Hell  using XMLHttpRequest
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    // const [neighbour] = data.borders;
    const neighbour = data.borders?.[0];// optional chaining

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
// sequence of ajax calls 
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

/*

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)  // fetch fn will immediately returns a Promise. In beginneing, Promise=> pending bcz async task of getting data (run in bg), then Promise settled, => lets success 
//     .then(function (response) { // this fn receive an arguement that is result of  fulfilled Promise and this response is the resolved value of the Promise
//       console.log(response); // it is itself a object c/a Response(contains body(Readable stream))
//       return response.json(); // json is availaible on all responses of fetch obj and  json() fn is also asynchronous & this response.json() will itself return a Promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// Can contains callback but not callback hell
// chaining two sequential Ajax call 
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`) // fetch promise only rejects when no internet
    .then(response => {
      // console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);// creating a Error using constructor fn, throw immediately stops execution, throw means Promise is immediately rejected

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      const neighbour = 'dfsdfdef';// For Error 

      if (!neighbour) {
        throw new Error ('No Neighbour Found!!');
      }

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
   
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {  // this err is an object
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    // this catch method here at the end of the chain will basically catch any errorsthat occur in any place in this whole promise chain
    // and no matter where that is.So errors basically propagate down the chain until they are caught,
    .finally(() => {// callback fn always called 
      countriesContainer.style.opacity = 1;
    });
};

// then always returns a promise, no matter if we actually return anything or not.
// But if we do return a value, then that value will become the fulfillment value
// of the return promise.
// then the fulfilled value of the next then method will be fulfilled value of
// this previous promise.

//passing wrong params -> gives 404 error -> throw Error
// But anyway with this 404 erroe, the fetch promise will still get fulfilled. So there is no rejection and so our catch handler
// cannot pick up on this error.It does pick up on this other error (Cannot read the property of undefined), but that's not the one that we actually want to handle.
// In this case we really want to tell the user that no country was found with this name.
*/

/*

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');
*/



// const whereAmI = async function () {  
//     try {
//       // Geolocation
//       const pos = await getPosition();  
//       const { latitude: lat, longitude: lng } = pos.coords;
  
//       // Reverse geocoding
//       const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//       if (!resGeo.ok) throw new Error('Problem getting location data');
  
//       const dataGeo = await resGeo.json();
//       console.log(dataGeo);
  
//       // Country data
//       const res = await fetch(
//         `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//       );
      
//       if (!resGeo.ok) throw new Error('Problem getting country');
      
//       if (!res.ok) throw new Error('Problem getting country');
  
//       const data = await res.json();
//       console.log(data);
//       renderCountry(data[0]);
//     } catch (err) {
//       console.error(`${err} 💥`);  // show 404 -> not depicting what the error actually was, therefore added a Error statement in try block
//     }
//   };
//   whereAmI();
//   console.log('FIRST'); // runs first
  
  
//   const whereAmI = async function (country) {// this fn keep running in the bg while performing the code inside it.
//       const res = await fetch (`https://restcountries.com/v3.1/name/${country}?fullText=true`)   // wait before fetch returns a Promise, So basically await will stop decode execution at this
//       // point of the function until the premise is fulfilled(data has been fetched) but all this is running in bg as this code is in async
//       const data = await res.json();
//       console.log(data);
//   }