import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        }
        
    }

    onNamechange=(e)=>{
        this.setState({name:e.target.value})
    }

    onEmailchange=(e)=>{
        this.setState({email:e.target.value})
    }
    
    onPasswordchange=(e)=>{
        this.setState({password:e.target.value})
    }
    onSubmitregister=()=>{
        fetch('http://localhost:3000/register',{
            method:'post',
            headers:{'content-Type': 'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name,
            })
        })
        .then(response=> response.json())
        .then(user=>{
            // console.log(user)
            if(user.id){
                this.props.onRouteChange('home')
                this.props.loaduser(user)
            }
        })
    }
    render() {
        return (
            <div>
                <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 mw6 center">
                    <main className="pa4 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="email-address">Name</label>
                                <input 
                                onChange={this.onNamechange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="email-address" 
                                 id="email-addres"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input 
                                onChange={this.onEmailchange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input 
                                onChange={this.onPasswordchange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password" 
                                id="password"/>
                            </div>
                            </fieldset>
                            <div className="">
                            </div>
                            <div className="lh-copy mt3">
                                <a onClick={this.onSubmitregister} href="#0" className="f4 link dim black db">Register</a>
                            </div>
                        </form>
                    </main>
                </article>  
            </div>
        )
    }
}

