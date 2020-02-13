export class MapService{
  async getMarkedMap(locations){
    try {
      let url = `https://maps.googleapis.com/maps/api/staticmap?center=Epicodus+Seattle+WA&zoom=8&size=600x600&maptype=roadmap
      &markers=color:blue%7Clabel:1%7CEpicodus+Seattle,WA&markers=color:green%7Clabel:2%7CEdmonds,WA
      &markers=color:red%7Clabel:0%7CIssaquah,WA&key=${process.env.API_KEY}`
      let response = await fetch(url);
      console.log(response);
      return response;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}