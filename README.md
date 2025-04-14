//API Key: live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2
//Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2

//`https://api.thedogapi.com/v1/breeds` ------ gets an array of all dog breed info
//`https://api.thedogapi.com/v1/breeds/${breed.id}` -------- will get dog breed by id
//`https://api.thedogapi.com/v1/images/search` -----random image

// 'x-api-key`:`live_hudKAJxap4eIfy2oapeBY0rIq9CVN2fvPRXatZUGlqprvho2VPV67IHJGVM7RXh2` -- for options object header


Reflection:

If I had more time I would figure out how to search by breed name instead of the breed id to bring up the associated dog breed photos. I was a bit confused on how to do so because the endpoint is a number. The breed ID happened to be a number in this API, and it is not intuitive or great for user experience to search by number. I would also continue to improve the styling and layout and I would have an option to navigate to a page with the dog breed information. It might be fun to also have an upload button to upload a photo of the dog spotted. Another major thing my current version is lacking is validation that the input in the prompt field is in fact a dog breed listed in the database. Currently, I only have an alert that comes up if the field is empty. 

If I planned better and read through my data array fully before getting started, I think I would have realized my limitations and opted to maybe go with a different API that I would find easier to work with and provide a better user experience. 