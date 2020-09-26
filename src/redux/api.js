
const apiUrl = "http://api.openweathermap.org/data/2.5/onecall?"
const api = process.env.REACT_APP_WEATHER_API_KEY

export const fetchData = async (address) => {
    const {lat, lng} = address
    try {
      const response = await fetch(`${apiUrl}lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${api}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };