import React from 'react'
import { BoxForecast, ItemForecast, Text } from './styles'

const Forecast = ({data}) => {
  return (
    <BoxForecast>
      {
        data.forecast.forecastday.map(day => (
          <ItemForecast key={day.date}>
            <Text>{day.date}</Text>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <Text>{day.day.maxtemp_c}°C</Text>
              <Text>{day.day.mintemp_c}°C</Text>
            </div>
          </ItemForecast>
        ))
      }
    </BoxForecast>
  )
}

export default Forecast