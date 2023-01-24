import React from 'react'
import { Container, Temp } from './styles'

const WeatherToday = ({data}) => {
  return (
    <Container>
        <h2>{data.location.name}, {data.location.region}-{data.location.country}</h2>
        <p>Today</p>
        <div>
          <img src={data.current.condition.icon} alt={data.current.condition.text} />
          <Temp>{data.current.temp_c}<span>°C</span></Temp>
        </div>
        <p>{data.current.condition.text}</p>
    </Container>
  )
}

export default WeatherToday