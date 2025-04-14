export {handleClick, handleSubmit, addListener};

let form = document.getElementById('breedForm');
form.addEventListener(`submit`, handleSubmit);    

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

function handleClick(e){
    addListener();
    let playerInput = prompt(`Hooray! What breed did you see?`);
    let spottedBreedList = document.getElementById("recordedBreeds");
    let listRecord = spottedBreedList.getElementsByTagName(`li`);
    if (listRecord.length < 4){
        if (playerInput.length == ``){
            alert(`Please enter a dog breed!`);
        } else {
            this.style.color = `red`; 
            let breedsSpotted = document.createElement(`li`);
            spottedBreedList.appendChild(breedsSpotted);
            breedsSpotted.textContent = playerInput;
        }
    } else if (listRecord.length === 4){
        if (playerInput.length == ``){
            alert(`Please enter a dog breed!`);
        } else {
            this.style.color = `red`; 
            let breedsSpotted = document.createElement(`li`);
            spottedBreedList.appendChild(breedsSpotted);
            breedsSpotted.textContent = playerInput;
            alert(`You got DINGO!!!`);
        }
    }
}