import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: `/home` } };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email,
                    image: photoURL
                }
                setUser(signedInUser);
                console.log(user);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <div  className="container text-center">
            {!user.name && <button style={{marginTop:"10%"}} className="btn btn-primary" onClick={handleGoogleSignIn}>Sign in using Google</button>}
            <h2>Welcome!!</h2>
            <h3>{user.name}</h3>
            <p> Your email: {user.email}</p>
            <img src={user.image} alt=""/>
        </div>
    );
};

export default Login;