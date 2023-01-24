import React from 'react'
import { Container } from './styles'

const CardDestaques = ({title, unity, data}) => {
  return (
    <Container>
        <p>{title}</p>
        <p><span>{data} </span>{unity}</p>
    </Container>
  )
}

export default CardDestaques