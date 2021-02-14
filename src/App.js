import React, { Component } from 'react'
import './app.css'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
// import Navigation2 from './components/Navigation/Navgation2'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import 'tachyons'



const app = new Clarifai.App({
  apiKey: 'bf3038bddd7c41a3b3c7033aa8bf84ef'
 });

const initialState={
  input:'https://images.firstpost.com/wp-content/uploads/2019/08/mia-khalifa-380.jpg?impolicy=website&width=320&height=180',
  imageurl:'',
  box:{},
  route:'signin',
  isSignedin:false,
  user:{
    id:'',
    name:'',
    email:'',
    entries: 0,
    joined: ''
  }
}

export default class App extends Component {
  constructor(){
    super();
    this.state= initialState;
    
  }

  loaduser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries: data.entries,
      joined: data.joined
    }})
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
  }
  onchange=(e)=>{
    this.setState({input:e.target.value})
  }

  onRouteChange=(route)=>{
    
    if(route==='signout'){
      this.setState(initialState)
    }else if(route==='home'){
      this.setState({isSignedin:true})
    }
    this.setState({route: route})
  }

  onclick=(e)=>{
    console.log("submit")
    this.setState({imageurl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input, {language: 'zh'})
    .then( response => 
      {
        if(response){
          fetch('http://localhost:3000/image',{
            method:'put',
            headers:{'content-Type': 'application/json'},
            body:JSON.stringify({
                id:this.state.user.id
            })
        })
        .then(data=> data.json())
        .then(count=>this.setState(
          Object.assign(this.state.user, {entries:count})
        ))
        .then(console.log)
        }
        this.displayFacebox((this.calculatefacelocation(response)))
      })
    .catch(err=>console.log("error"))
  }

  render() { 
    const {isSignedin, route, box, imageurl}= this.state;
    return (
      <React.Fragment>
        <Navigation isSignedin={isSignedin} onRouteChange={this.onRouteChange}/>
        { route==='home'
        ?<div>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm
            onchange={this.onchange} 
            onclick={this.onclick}
          />
          <FaceRecognition
            box={box} 
            imageurl={imageurl}
          />
        </div>
        :(route==='signin'
          ?<Signin loadUser={this.loaduser} onRouteChange={this.onRouteChange}/>
          :<Register loaduser={this.loaduser} onRouteChange={this.onRouteChange}/>)
        }
      </React.Fragment>
    )
  }
}
