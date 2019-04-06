import React from 'react';
import PropTypes from 'prop-types';


const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign In to Manage Your Store's Inventory</p>
        <button className="facebook" onClick={()=>props.authenticate('Facebook')}>Login with Facebook</button>
        <button className="twitter" onClick={()=>props.authenticate('Twitter')}>Login with Twitter</button>
        <button className="google" onClick={()=>props.authenticate('Google')}>Login with Google</button>
        <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
    </nav>
)

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;