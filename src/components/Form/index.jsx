import { useState } from "react"
import { BsFillCloudyFill, BsFillCloudSunFill } from "react-icons/bs";
import Weather from "../Weather";
import * as C from "./styles"


const Form = () => {
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("")

  function takeCity(e) {
    const city = e.target.value
    setSearch(city)
  }

  const getWeather = async () => {
    if(search){
      const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=aada5612c4ba4fa099f171902232201&q=${search}&lang=pt_BR`).then(response => response.json())
      if(data.error){
        setSearch("")
        return alert(data.error.message)
      }
      setSearch("")
      console.log(data)
      return setCity(data)
    }
    return alert("Nome da cidade é necessário")
  }

  return (
    <C.Container city={city}>
      <h1>Saiba tudo sobre a temperatura do dia.</h1>
      <C.Form>
        <input type="text" placeholder="search location" value={search} onChange={takeCity} />
        <button onClick={getWeather}>Search</button>
      </C.Form>
      <BsFillCloudSunFill />
        {
          city && (
            <Weather data={city}/>
          )
        }
    </C.Container>
  )
}

export default Form