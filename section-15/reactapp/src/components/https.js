
// export async function updateUserPlaces(places) {
//    const response = await fetch('http://localhost:3000/user-places',
//         {   // configurational object(configure the request)
//         method:'PUT',
//         body:JSON.stringify({places:places}), // places(Array format) are not attachable, use  stringify to convert it into json format
//         headers:{// metadata
//             'Content-Type':'application/json'  // data attached will be in json format
//         }
//     })
//     const resData = await response.json();
//     if(!response.ok) {
//         throw new Error("Failed to update user data");
//     }
//     return resData.message;
// }

import axios from 'axios';

export async function updateUserPlaces(places) {
  try {
    const response = await axios.put('http://localhost:3000/user-places', {
      places: places, // The body is sent as JSON by default
    }, {
      headers: {
        'Content-Type': 'application/json', // Adding metadata for JSON content
      },
    });
    return response.data.message; // Return the message from the server response
  } catch (error) {
    // Handle the error more specifically if required
    throw new Error(error.response?.data?.message || "Failed to update user data");
  }
}
