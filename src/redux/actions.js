
const apiUrl = "http://api.openweathermap.org/data/2.5/onecall?"
const api = process.env.REACT_APP_WEATHER_API_KEY

export const setWeathers = (weathers) => {
 
    return{
        type: 'SET_WEATHERS',
        weathers: weathers
    }
}

export const fetchWeather = (lat, lng) => {

    return (dispatch) => {

        fetch(`${apiUrl}lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${api}`)
            .then(r => r.json())
            .then(data => {
               dispatch(setWeathers(data)) 
            })
    }
}