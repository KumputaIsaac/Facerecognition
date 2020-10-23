import React from 'react'
import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 mw6 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        </div>
                        <div className="lh-copy mt3">
                        <Link to='/home'>
                             <a href="#0" className="f4 link dim black db">Register</a>
                        </Link>
                        </div>
                    </form>
                </main>
            </article>
        </div>
    )
}