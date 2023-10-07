

import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";




const Register = () => {

  const auth = getAuth(app);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignUp = () => {
    setSuccess('');
    setError('');
  
    signInWithPopup(auth, googleProvider)
      .then((result) => {

        // The signed-in user info.
        const user = result.user;
        console.log(user)
        {
          if (user) {
            setSuccess('Register Successfully')
          }else{
            setError('Already have a user')
          }
        }
        // ...
      }).catch((error) => {
      
        console.log(error)
        setError(error);

      });
  }

  const handleGitHubSignUp = () => {
    signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      const user = result;
      console.log(user);
      
    }).catch (error => {
      console.log(error);
      setError(error);
    })
  }

  const handleFacebookSignUp = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result;
      console.log(user);
    }).catch((error) => {
      console.log(error);

    })
  }
const handleRegister = (event)=>{
  setSuccess('');
  setError('');
  event.preventDefault();
  
  const from = event.target;
  const email = from.email.value;
  const password = from.password.value;
  const cpassword = from.passwordc.value;
  createUserWithEmailAndPassword(auth, email, password, cpassword)
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential.user);
    if(userCredential.user){
      const user = userCredential.user;
      console.log(user)
      setSuccess('User Created Successfully')
    }else if(userCredential.user.email == email){
      setError('User Alreay Exist')
    }
    
    // ...
  }).catch(error => {
    console.log(error.message)
  })

  



}


  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-left block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="text-left block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordc"
                id="confirmPassword"
                className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Confirm password"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Register
              </button>
            </div>
            <div className='error'>
          
              <p>{success}</p>
              <p>{error}</p>

            </div>
          </form>
          <div className="mt-4">
            <p className="text-center text-gray-500">Or LogIn with</p>
            <div className="flex justify-center mt-2 space-x-2">
              <button onClick={handleGoogleSignUp} className=" text-white p-2   transition duration-300">
                <img className="w-[50px] h-[50px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnw_uBqjQDj4hLr5NRakpD2MOlqALQZHVNrxnsk3jZbKF8Ltd9aTU1OAeW_RaQSUvXoM8&usqp=CAU" alt="" />
              </button>
              <button onClick={handleGitHubSignUp} className=" text-white p-2  transition duration-300">
                <img className="w-[50px] h-[50px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevjLMoY69RrmdOeKZONLsRySpvdkEwP-SaraZ3hc_8WFS0eR1ALIIL9xuP2_nWbRnawY&usqp=CAU" alt="" />
              </button>
              <button onClick={handleFacebookSignUp} className=" text-white p-2  transition duration-300">
                <img className="w-[50px] h-[50px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2BR3DOwlpXs4PhCvYWk7WsNZYKZ8PLvGj-VkngNxgELCcRsmCyLAhCAstlTZqBwBZIY&usqp=CAU" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;