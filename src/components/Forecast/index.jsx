import React from 'react'
import { BoxForecast, ItemForecast } from './styles'

const Forecast = ({data}) => {
  return (
    <BoxForecast>
      {
        data.forecast.forecastday.map(day => (
          <ItemForecast key={day.date}>
            <p>{day.date}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>{day.day.maxtemp_c}°C</p>
              <p>{day.day.mintemp_c}°C</p>
            </div>
          </ItemForecast>
        ))
      }
    </BoxForecast>
  )
}

export default Forecast