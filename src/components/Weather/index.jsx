import React from 'react'
import Forecast from '../Forecast'
import Hightlights from '../Hightlights'
import WeatherToday from '../WeatherToday'
import { Container, Header } from './styles'

const Weather = ({data}) => {
  
  return (
    <Container>
      <Header>
        <WeatherToday data={data}/>
        <Forecast data={data}/>
      </Header>
      <Hightlights data={data}/>
    </Container>
  )
}

export default Weather