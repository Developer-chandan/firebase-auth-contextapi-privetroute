import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";




const Login = () => {
  const auth = getAuth(app);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();



  const handleGoogleSignUp = () => {
    setSuccess('');
    setError('');


    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          setSuccess('Register Successfully')
        } else {
          setError('Already have a user')
        }


      })
      .catch((error) => {

        console.log(error)
        setError(error);

      });
  }

  const handleGitHubSignUp = () => {
    setSuccess('');
    setError('');
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result;
        console.log(user);

      }).catch(error => {
        console.log(error);
        setError(error);
      })
  }


  const handleFacebookSignUp = () => {
    console.log('Click from facebook auth')
  }

  const handleLogIn = (event) => {
    setSuccess('');
    setError('');
    event.preventDefault();

    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {


        const user = userCredential.user;
        console.log(user);
        setSuccess('login Successfull')



      })
      .catch((error) => {
        setError("User dosen't exist")
        const errorMessage = error.message;
        console.log('login: ', errorMessage)
      });
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
          <div>
            <p className="text-green-500">{success}</p>
            <p className="text-red-400">{error}</p>
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
  );
};

export default Login;