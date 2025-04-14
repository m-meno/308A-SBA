
import {loadBreeds} from "./helperfunctions.mjs";

import {handleClick, addListener} from "./eventlistenerfunctions.mjs";



(async function getData(){
    try {
        let res = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
        headers: {
        "x-api-key": `live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2`
        } });
        loadBreeds(res.data);
    } catch(err) {
      console.error(`Error`);
    }
})();

// let form = document.getElementById('breedForm');
// breedForm.addEventListener(`submit`, handleSubmit);   

// let game = document.getElementsByClassName(`dingo`);
// const arr = Array.from(game);

addListener();

handleClick();




//alert(`We are linked!`)

//API Key: live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2
//Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2

//`https://api.thedogapi.com/v1/breeds` ------ gets an array of all dog breed info
//`https://api.thedogapi.com/v1/breeds/${breed.id}` -------- will get dog breed by id
//`https://api.thedogapi.com/v1/images/search` -----random image

// 'x-api-key`:`live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2` -- for options object header

