import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AddContext = ({children}) => {

  const handleRegister = (email, password)=>{
    if(!email){
      return
    }
    return createUserWithEmailAndPassword(auth, email, password);
   
  
  }
  



const utilites =  {
  handleRegister
}



    return (
      <AuthContext.Provider value={utilites}>
        {children}
      </AuthContext.Provider>
    );
};

export default AddContext;