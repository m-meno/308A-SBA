
import {loadBreeds} from "./helperfunctions.mjs";

import {addListener} from "./eventlistenerfunctions.mjs";



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


addListener();



