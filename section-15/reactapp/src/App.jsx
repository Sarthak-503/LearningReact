import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces } from './components/https.js';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingplace,setErrorUpdatingPlace] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }
  // updating the data in the UI and sending the calling the api 
 async function handleSelectPlace(selectedPlace) {
    
    // alternative way-> first call api-> setLoader(true) if data comes set it to new data, else show an error UI
    // await updateUserPlaces([selectedPlace,...userPlaces]);
    // updating the data in the UI 
    setUserPlaces((prevPickedPlaces) => {
      console.log(prevPickedPlaces);
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    //  we can simply use our userPlaces state here because I have just updated the state in upper code,But as you learned before,
      // the state update will not immediately be available in this next line of code.Instead, it will only be available
      // after the component function executed the next time, which is scheduled by this state update here.
      // calling the api 
    try{
      await updateUserPlaces([selectedPlace,...userPlaces]);
    } catch (error){ // we have to manage 3 states
      setUserPlaces(userPlaces);// if api not send it will again set to old UI
      // This is optimal updating first set new UI, if api not send set UI to old one.
      setErrorUpdatingPlace(error.message);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try{
    await updateUserPlaces( // add userPlaces in dependency array
        userPlaces.filter((place)=> place.id!== selectedPlace.current.id)
      )
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlace({
        message:error.message || 'Failed to delete place'
      })
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError() {
    setErrorUpdatingPlace(null);
  }
  return (
    <>
    <Modal open={errorUpdatingplace} onClose={handleError}>
      {errorUpdatingplace &&(
      <Error title="An error Occured"
      message={errorUpdatingplace.message}
      onConfirm={handleError}
      />
      )}
    </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
