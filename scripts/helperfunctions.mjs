//export * to "./"

(async function getData(){
    try {
        await fetch(`https://api.thedogapi.com/v1/breeds`, {
        headers: {
        "x-api-key": `live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2`
        } });
    } catch(err) {
      console.error(`Error`)
    }
})();

async function createDisplay(dataArray){
    const main = document.getElementById(`main`)
}