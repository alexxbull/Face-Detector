import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header'
import Logo from '../components/Logo'
import ImageLinkForm from '../components/ImageLinkForm'
import FaceDetector from '../components/FaceDetector'
import Footer from '../components/Footer'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './SignIn'
import Register from './Register'
const app = new Clarifai.App({
   apiKey: '3519616be3ef441bbc6fbac6cfd0c759'
});

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


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         box: [],
         // box: {},
         input: '',
         imageURL: '',
         route: 'signin',
      }
   }

   getFaceLocation = (response) => {
      const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('inputImage');
      const height = Number(image.height)
      const width = Number(image.width)

      const coordinates = []
      response.outputs.forEach(array => {
         return array.data.regions.forEach(array2 => {
             const clarifaiFace = array2.region_info.bounding_box;
             coordinates.push({
                leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height - (clarifaiFace.bottom_row * height),
             })
         })
      })
      return coordinates;

      // return {
      //    leftCol: clarifaiFace.left_col * width,
      //    topRow: clarifaiFace.top_row * height,
      //    rightCol: width - (clarifaiFace.right_col * width),
      //    bottomRow: height - (clarifaiFace.bottom_row * height),
      // }
   }

   onInputchange = (event) => {
      this.setState({input: event.target.value});
   }


   onButtonSubmit = () => {
      this.setState({imageURL: this.state.input})

      app.models
         .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
         .then(response => this.setState({box: this.getFaceLocation(response)}))
         .catch(err => console.log('ERROR', err));
   }


  render() {
    return (
      <div className="App">
         <Particles className='particles'
                    params={particleParams} />
          {/* <SignIn /> */}
          {/* <Register /> */}
          <Header />
          <Logo />
          <ImageLinkForm onInputchange={this.onInputchange}
                         onButtonSubmit={this.onButtonSubmit}
           />
          <FaceDetector box={this.state.box} imageURL={this.state.imageURL}/>
          <Footer />
      </div>
    );
  }
}

export default App;
