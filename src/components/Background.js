import React, {Component} from 'react'
import Particles from 'react-particles-js';
import '../styles/Background.css'

const particleParams = {
   particles:
   {
      number:
      {
         value: 100,
         density:
         {
            enable: true,
            value_area: 800
         }
       }
   }
}

class Background extends Component
{
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Particles className='particles' params={particleParams} />
  }
}

export default Background;
