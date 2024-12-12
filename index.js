var apikey = 'G9ggDwkqNQUZoax8SRh2Qg==1UWmcdvk3zsT5ZPu';
var api = 'https://api.api-ninjas.com/v1/recipe?query=italian wedding soup';

fetch(api,{
      headers: {
            'X-Api-Key' : 'G9ggDwkqNQUZoax8SRh2Qg==1UWmcdvk3zsT5ZPu'
      } 
})
.then(Response => Response.json())
.then(data => {
      console.log(data);
})