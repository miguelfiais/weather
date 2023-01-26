import React from 'react'
import { Container, Temp } from './styles'

const WeatherToday = ({data}) => {
  return (
    <Container>
        <p>Today</p>
        <div>
          <div>
            <img src={data.current.condition.icon} alt={data.current.condition.text} />
            <p>{data.current.condition.text}</p>
          </div>
          <Temp>{data.current.temp_c}<span>°C</span></Temp>
        </div>
        
        <h3>{data.location.name}-{data.location.region}</h3>
    </Container>
  )
}

export default WeatherToday