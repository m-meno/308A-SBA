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

async function createDisplay(dataArray){
    const main = document.getElementById(`main`);
    let list = document.createElement(`ul`);
    main.appendChild(list);
    console.log(dataArray);
    dataArray.forEach((el)=>{
        let listItem = document.createElement(`li`);
        listItem.innerHTML = `Breed name: ${el.name}`
        list.appendChild(listItem);
    })



}