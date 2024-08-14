export async function updateUserPlaces(places) {// places(Array format) are not attachable, use  stringify
   const response = await fetch('http://localhost:3000/user-places',
        {   // configurational object
        method:'PUT',
        body:JSON.stringify({places}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const resData = await response.json();
    if(!response.ok) {
        throw new Error("Failed to update user data");
    }
    return resData.message;
}