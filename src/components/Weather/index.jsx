import React from 'react'
import { Container } from './styles'

const Weather = ({data}) => {
  return (
    <Container>
        <div>
            <img src={data.current.condition.icon} alt={data.current.condition.text} />
            <h2>{data.current.condition.text}</h2>
        </div>
        
        <p>Cidade: {data.location.name}, {data.location.region}, {data.location.country} </p>
        <p>Última atualização: {data.current.last_updated}</p>
        <p>Temperatura: {data.current.temp_c}°C</p>
        <p>Sensação térmica: {data.current.feelslike_c}°C</p>
    </Container>
  )
}

export default Weather