import { useState } from "react"
import { BsFillCloudSunFill } from "react-icons/bs";
import Weather from "../Weather";
import * as C from "./styles"


const Form = () => {
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("")

  function takeCity(e) {
    const city = e.target.value
    setSearch(city)
  }

  const getWeather = async (e) => {
    e.preventDefault()
    if(search){
      const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=aada5612c4ba4fa099f171902232201&q=${search}&days=5&aqi=no&alerts=no`).then(response => response.json())
      if(data.error){
        setSearch("")
        return alert(data.error.message)
      }
      setSearch("")
      return setCity(data)
    }
    return alert("Nome da cidade é necessário")
  }

  return (
    <C.Container city={city}>
      <div>
        <h1>Consult the climate of your city</h1>
        <C.Form onSubmit={getWeather}>
          <input type="text" placeholder="search location" value={search} onChange={takeCity} />
          <button type="submit">Search</button>
        </C.Form>
        <BsFillCloudSunFill />
      </div>
        {
          city && (
            <Weather data={city}/>
          )
        }
    </C.Container>
  )
}

export default Form