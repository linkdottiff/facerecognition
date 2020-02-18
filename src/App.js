import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import InputImageURL from './Components/InputImageURL/InputImageURL';
import Rank from './Components/Rank/Rank';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import FaceDetection from './Components/FaceDetection/FaceDetection';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particlesOptions = {
  "particles": {
      "number": {
          "value": 250,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }
}

const app = new Clarifai.App({
  apiKey: '1548270e9c914499a6bb5029177bf6c7'
 });


class App extends Component {
  constructor(){
    super();
    this.state={
      input: '',
      url: '',
      box: [],
      isSignedIn: false,
      route: 'signin'
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  calculateFaceBox = (data) =>{
      const clariFace = data.outputs[0].data.regions.map(region => {
        return region.region_info.bounding_box;
      })
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      return clariFace.map((bounding,i) => {
          return {
            id: i,
            topRow: bounding.top_row * height,
            bottomRow: height - (bounding.bottom_row * height),
            leftCol: bounding.left_col * width,
            rightCol: width - (bounding.right_col * width)
          }
      })
  }

  displayFaceBox = (boxData) => {
    this.setState({box: boxData});
  }

  onClickInput = () =>{
    this.setState({url: this.state.input});
      app.models
          .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
          .then(response => this.displayFaceBox(this.calculateFaceBox(response)))
          .catch(err => console.log(err))
  }

  onRouteChange = (route) =>{
    if(route === 'home'){
      this.setState({isSignedIn: true})
    }else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }

  render(){
      const {url, box, isSignedIn, route} = this.state;
      return (
        <div>
          <Particles className="particles"
              params={particlesOptions} 
          />
          <Navigation
            onRouteChange={this.onRouteChange}
            isSignedIn = {isSignedIn}
          />
          {route === 'home'
          ? 
          <div>
            <Logo />
            <Rank />
            <InputImageURL 
              onInputChange={this.onInputChange} 
              onClickInput={this.onClickInput}
            />
            <FaceDetection url={url} box={box}/>
          </div>
          :
          route === 'signin' 
          ?
          <Signin onRouteChange={this.onRouteChange}/>
          :
          <Register onRouteChange={this.onRouteChange}/>
          } 
        </div>
    );
    }
  }

export default App;
