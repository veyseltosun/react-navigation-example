import React from 'react'
import { useParams } from 'react-router-dom'

const ColorScreen = (props) => {
    const{color} = useParams();
  return (
    <div style={{backgroundColor: color, height:"100vh",  }}>

    </div>
  )
}

export default ColorScreen