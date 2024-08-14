
export async function updateUserPlaces(places) {
   const response = await fetch('http://localhost:3000/user-places',
        {   // configurational object(configure the request)
        method:'PUT',
        body:JSON.stringify({places:places}), // places(Array format) are not attachable, use  stringify to convert it into json format
        headers:{// metadata
            'Content-Type':'application/json'  // data attached will be in json format
        }
    })
    const resData = await response.json();
    if(!response.ok) {
        throw new Error("Failed to update user data");
    }
    return resData.message;
}
