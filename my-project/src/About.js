import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  // const myName = useProductContext();
  const data = {
    name: "Khizar Ecommerce"
  }
  return (
    <div>
      {/* {myName} */}
      <HeroSection myData={data}/>
    </div>
  )
}

export default About