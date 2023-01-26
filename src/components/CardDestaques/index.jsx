import React from 'react'
import { Container, Info, Title } from './styles'

const CardDestaques = ({title, unity, data}) => {
  return (
    <Container>
        <Title>{title}</Title>
        <Info><span>{data} </span>{unity}</Info>
    </Container>
  )
}

export default CardDestaques