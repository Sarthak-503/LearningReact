import { useEffect, useState } from "react";
import Places from "./Places";
import Error from "./Error";
import {sortPlacesByDistance} from '../loc.js'
// const places = localStorage.getItem("places");// run synchronously
export default function AvailablePlaces({ onSelectPlace }) {
  const [availaiblePlaces, setAvailaiblePlaces] = useState([]); // initially no data -> availaible,and api takes time, hence initially we have taken empty array
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    //   fetch("http://localhost:3000/places")
    //   .then((response) => response.json())
    //   .then((resdata) =>
    //     setAvailaiblePlaces(resdata.places)//  if not used useEffect => infinite loop
    // );
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places"); // if fetch fails bcz of no internet , hence we use Error and try- catch block
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        // Not return a Promise,therefore not used await , use callback
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(resData.places,position.coords.latitude,position.coords.longitude)
          setAvailaiblePlaces(sortedPlaces); // data is availaible here
          setIsFetching(false);
        })

        // setAvailaiblePlaces(resData.places);
      } catch (error) {
        // setError(error);// error => obj
        setError({
          message:
            error.message || "Cpould not fetch places, please try again later",
        });
        setIsFetching(false);
      }

      // setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An Error occurred!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availaiblePlaces}
      isLoading={isFetching}
      loadingText="Fetching places Data...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
