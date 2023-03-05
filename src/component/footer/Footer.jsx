import React from 'react'
import { Container } from 'react-bootstrap'
import FooterContainer1 from './FooterContainer1'
import FooterContainer2 from './FooterContainer2'

export default function Footer() {
  return (
    <>
    <hr />
    <Container>
      <footer className='footer'>
        <FooterContainer1/>
        <hr className='my-5'/>
        <FooterContainer2/>
      </footer>
    </Container>

    </>
  )
}
