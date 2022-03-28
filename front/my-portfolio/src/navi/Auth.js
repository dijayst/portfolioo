import { createContext,useState, useContext } from "react";


const AuthContext=createContext(null)

export const AuthProvider =({Children})=>{

const [user, setuser] = useState(null)

const login=(user)=>{
    setuser(user)
}

const logout=()=>{
    setuser(null)
}

return(
<AuthContext.Provider value={{user,login,logout}}>{Children}</AuthContext.Provider>
)}


export const useAuth =()=>{
    return useContext(AuthContext)
}