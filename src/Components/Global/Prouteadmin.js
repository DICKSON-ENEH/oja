import React from 'react'
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
// import { Children } from 'react'
   
const Prouteadmin = ({children}) => {

    const userdata = useSelector((state)=>state.recentuser)
  return  userdata.isAdmin? children : <Navigate to ="/dashboard"/>
  
}
 
export default Prouteadmin 