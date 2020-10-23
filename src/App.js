import React, { Component } from 'react'
import './app.css'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import 'tachyons'



const app = new Clarifai.App({
  apiKey: 'bf3038bddd7c41a3b3c7033aa8bf84ef'
 });

export default class App extends Component {
  constructor(){
    super();
    this.state={
      input:'https://images.firstpost.com/wp-content/uploads/2019/08/mia-khalifa-380.jpg?impolicy=website&width=320&height=180',
      imageurl:'',
      box:{}
    }
  }
  calculatefacelocation= (data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftcol: clarifaiFace.left_col * width,
      toprow: clarifaiFace.top_row * height,
      rightcol: width-(clarifaiFace.right_col * width),
      bottomrow: height-(clarifaiFace.bottom_row * height)
    }
    
  }
  displayFacebox=(box)=>{
    this.setState({box:box})
    console.log(this.state.box)
  }
  onchange=(e)=>{
    this.setState({input:e.target.value})
  }

  onclick=(e)=>{
    console.log("submit")
    this.setState({imageurl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input, {language: 'zh'})
    .then( response => this.displayFacebox((this.calculatefacelocation(response))))
    .catch(err=>console.log("error"))
  }

  
// &&response.output[0].data.regions[0]&&response.output[0].data.regions[0]&&response.output[0].data.regions[0].region_info.bounding_box
  render() { 
    return (
      <React.Fragment>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onchange={this.onchange} onclick={this.onclick}/>
        <FaceRecognition box={this.state.box} imageurl={this.state.imageurl}/>
      </React.Fragment>
    )
  }
}
