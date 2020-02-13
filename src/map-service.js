export class MapService{

  generateURL(locations){
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=Epicodus+Seattle+WA&zoom=8&size=600x600&maptype=roadmap`;
    for(let i = 0; i < locations.length; i++){
      url = url + `&markers=label:${i}%7C${locations[i]}`;
    }
    url += `&key=${process.env.API_KEY}`;
    console.log(url);
    return url;
  }

  async getMarkedMap(locations){
    try {
      let url = this.generateURL(locations);
      let response = await fetch(url);
      console.log(response);
      return response;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}