import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    return (
        <div>
            <h1> Continue with Google</h1>
            <img  src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" alt="google login"/>
        </div>
    );
};

export default Login;