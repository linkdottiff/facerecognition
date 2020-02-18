import React from 'react';

const Register = ({onRouteChange}) => {
    return (
    <article className="br3 ba bg-mid-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 center shadow-5">
        <main className="pa5 white-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"></input>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                </div>
                </fieldset>
                <div className="lh-copy mt3">
                <p 
                    className="f6 link dim black db white pointer"
                    onClick={() => onRouteChange('home')}
                >
                Register</p>
                </div>
            </div>
        </main>
    </article>
    );
}

export default Register;