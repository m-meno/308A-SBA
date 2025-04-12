//export * to "./"

(async function getData(){
    try {
        let res = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
        headers: {
        "x-api-key": `live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2`
        } });
        createDisplay(res.data);
    } catch(err) {
      console.error(`Error`)
    }
})();

let form = document.getElementById('breedForm');
breedForm.addEventListener(`submit`, handleSubmit);    

function createDisplay(dataArray){
    const main = document.getElementById(`main`);
    let list = document.createElement(`ul`);
    main.appendChild(list);
    console.log(dataArray);
    dataArray.forEach((el)=>{
        let listItem = document.createElement(`li`);
        listItem.innerHTML = `Breed name: ${el.name}`;
        list.appendChild(listItem);
        //console.log(el.name, el.id);
    });
}


async function handleSubmit(e){
    e.preventDefault();
    console.log(`Testing`);
    let input = document.getElementById(`breedSearch`);
    console.log(input.value);
    try {
       if (input.value.length > 4 || input.value.length == 0) {
        alert(`Incorrect search term - please enter at least 4 letters.`);
        throw Error(`Incorrect or Empty SearchTerm`);
       }

       let res = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${input.value}`);

       console.log(res.data);
    } catch(err) {
        console.error(`Error`);
    }
};

