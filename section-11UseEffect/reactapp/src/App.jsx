import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id)=>
AVAILABLE_PLACES.find((place) => place.id === id)
);


function App() {

  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces,setAvailaiblePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  //this code is needed by the application(we need location)but it is notdirectly related to the task as a component fn only have to return jsx code. this callback fn will call at some time in the future, therefore it is a side effect,
 
  //navigator -> obj exposed by browser to js code that runs in browser to fetch location
  // navigator.geolocation.getCurrentPosition((position)=>{
  //   const sortedPlaces = sortPlacesByDistance(
  //     AVAILABLE_PLACES, 
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );

  //   setAvailaiblePlaces(sortedPlaces);// infinite loop
  // })
  // sorted places are not available at the start because this operation of getting the user's location  will take some time.
  // So the first app component render cycle will be finished at the point of time where we have this location.

  // runs after every component execution fn(after jsx code returned)
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
    const sortedPlaces = sortPlacesByDistance(
      AVAILABLE_PLACES, 
      position.coords.latitude,
      position.coords.longitude
    )
    setAvailaiblePlaces(sortedPlaces)
  })

  },[]) // if array removed => infinite loop

  // useEffect(()=>{   // overusing useEffect as the component don't able to finish its whole execution before picked item completely render 
  // as this is synchronous code, hence add it to the top or out of fn component and setPickedPlace[]
  //   const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  //   const storedPlaces = storedIds.map((id)=>
  //   AVAILABLE_PLACES.find((place) => place.id === id)
  //   );
  //   setPickedPlaces(storedPlaces)
  // },[])


  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    // storing list of items in localStorage , this is a navigator(runs only when someone clicks on image to add it) don't need a useEffect
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if(storedIds.indexOf(id) === -1){
      localStorage.setItem('selectedPlaces',JSON.stringify([id,...storedIds]));// stores only string format 
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id)=> id!==selectedPlace.current)) );
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting Places By Distance"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
