//export * to "./"

(async function getData(){
    try {
        let res = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
        headers: {
        "x-api-key": `live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2`
        } });
        loadBreeds(res.data);
        console.lof(res.data);
    } catch(err) {
      console.error(`Error`)
    }
})();

let form = document.getElementById('breedForm');
breedForm.addEventListener(`submit`, handleSubmit);    

function loadBreeds(dataArray){
    const main = document.getElementById(`main`);
    let list = document.createElement(`ul`);
    //list.style.listStyleType.
    main.appendChild(list);
    console.log(dataArray);
    dataArray.forEach((el)=>{
        let listItem = document.createElement(`li`);
        listItem.innerHTML = `${el.id}. ${el.name}`;
        list.appendChild(listItem);
        let dogImage = document.createElement(`img`);
        dogImage.src = el.image.url;
        dogImage.style.height = `300px`;
        list.appendChild(dogImage);
        //console.log(el.name, el.id);
    });
}


async function handleSubmit(e){
    e.preventDefault();
    console.log(`Testing`);
    let input = document.getElementById(`breedSearch`);
    //console.log(input.value);
    
    try {
    //    if (input.value.length > 4 || input.value.length == 0) {
    //     alert(`Incorrect search term - please enter at least 4 letters.`);
    //     throw Error(`Incorrect or Empty SearchTerm`);
    //    }

       let res = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${input.value}`);
       let pic = document.getElementById(`dogPhoto`);
       pic.innerHTML = `<img height = "300 em" src= ${res.data[0].url} alt = ${input.value}/>`;


       console.log(res.data);
    } catch(err) {
        console.error(`Error`);
    }
};

let game = document.getElementsByClassName(`dingo`);
const arr = Array.from(game);
    
function addListener(){
    arr.forEach((el)=>{
    el.addEventListener('click', handleClick);    
    });
}

addListener();
//game.addEventListener('click', handleClick);

function handleClick(e){
    addListener();
    let playerInput = prompt(`Hooray! What breed did you see?`);
    if (playerInput.length == ``){
    alert(`Please enter a dog breed!`);
    }
    this.style.color = `red`;

}