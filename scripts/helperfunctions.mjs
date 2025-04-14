export {loadBreeds};
  

function loadBreeds(dataArray){
    const main = document.getElementById(`main`);
    let list = document.createElement(`ul`);
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
    });
}


