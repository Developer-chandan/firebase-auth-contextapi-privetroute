

import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AddContext";
import { Link } from "react-router-dom";





const Register = () => {

  const { handleRegister} = useContext(AuthContext);

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
  
const handleSignUp = (event) => {
event.preventDefault()

setError('');
setSuccess('');
const form = event.target;
const email = form.email.value;
const password = form.password.value;
const cpassword = form.passwordc.value;


handleRegister(email, password)
.then(result => {
  console.log(result.user);
  if(password !== cpassword){
    setError('Password not same');
    return;
  }
  

  const user = result.user;

    setSuccess('Register Successfully')
    form.reset();
    console.log(user);

})
.catch(error=> {
  setError(error.message);
})

}
 

  





  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                Email
              </label>
              <input required
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
              <input required
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
              <input required
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
          
              <p className="text-center text-green-500">{success}</p>
              <p className="text-center text-red-400">{error}</p>

            </div>

            <p className="text-center">Already registered?<Link className="btn btn-link ml-0 pl-0" to={"/login"}>LogIn</Link> </p>
          </form>
          <div className="mt-4">
            <p className="text-center text-gray-500">Or Register with</p>
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