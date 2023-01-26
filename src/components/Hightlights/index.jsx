import React from 'react'
import CardDestaques from '../CardDestaques'
import { BoxDestaques, Container } from './styles'

const Hightlights = ({data}) => {
  return (
    <Container>
      <h2>Today’s Hightlights </h2>
      <BoxDestaques>
        <CardDestaques title="Wind Status" unity="mph" data={data.current.wind_mph}/>
        <CardDestaques title="Humidity" unity="%" data={data.current.humidity}/>
        <CardDestaques title="Visibility" unity="miles" data={data.current.vis_miles}/>
        <CardDestaques title="Air Pressure" unity="mb" data={data.current.pressure_mb}/>
      </BoxDestaques>
    </Container>
  )
}

export default Hightlights