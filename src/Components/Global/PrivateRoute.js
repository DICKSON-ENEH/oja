import React from 'react'
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
// import { Children } from 'react'
   
const PrivateRoute = ({children}) => {

    const userdata = useSelector((state)=>state.recentuser)
  return  userdata? children : <Navigate to ="/"/>
  
}
 
export default PrivateRoute 