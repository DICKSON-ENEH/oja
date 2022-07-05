import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { useSelector , useDispatch} from 'react-redux'
import { signoutuser } from '../Global/Globalstste'

const Header = () => {
    // const [user, setUser]= useState(false)
    const dispatch = useDispatch()
    const userdata = useSelector((state)=>state.recentuser)
  return (
    <Container>
        <Wrapper>
           <Link to ="/">
            <Logo>
                <img src ="/images/ojaa.png"/>
            </Logo>
            </Link>
           {userdata?<div>
            <Navigations>
                <Link to ="/dashboard">
<Logo style={{background:"darkorange"}}>
    <img src ={userdata.avatar}/>
</Logo>
</Link>
<Butts onClick={()=>{
    dispatch(signoutuser())
}}> 
    Logout
</Butts>
            </Navigations>
           </div>:  <Navigations>
<Link to ="/signup" style={{textDecoration:"none",
color:"#fff"
}}>
<Buttz>
    Register
</Buttz>
</Link>
            </Navigations>}
        </Wrapper>
    </Container>
  )
}

export default Header
const Butts = styled.button`
background:green;
width:100px;
display:flex;
justify-content: center;
align-items:center ;
/* height:20px ; */
padding:10px;
color:#fff;
outline:none;
border:none;
border-radius:3px ;
font-family:magra ;
font-size:18px ;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
;
@media(max-width:400px){
    width:60px;
    font-size:14px ;
}
`
const Buttz = styled.button`
background:green;
width:100px;
display:flex;
justify-content: center;
align-items:center ;
/* height:20px ; */
padding:10px;
color:#fff;
outline:none;
border:none;
border-radius:3px ;
font-family:magra ;
font-size:18px ;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
;
@media(max-width:800px){
    width:100px;
    font-size:14px ;
    margin-left:35px
}
@media(max-width:500px){
    width:100px;
    font-size:14px ;
    margin-left:20px
}
`
const Container = styled.div`
width:100%;
height:70px;
display:flex;
justify-content:center ;
/* align-items:center ; */
/* background: #FEBB4A; */
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
position:fixed ;
z-index:100 ;
background:#fff;

`
const Wrapper = styled.div`
width:90%;
display:flex;
justify-content:space-between ;
align-items:center ;
flex-wrap:wrap ;
`
const Logo = styled.div`
width:60px;
height:60px;
border-radius:50% ;
img{
    width:100%;
    height:100%;
object-fit:cover ;
border-radius:50% ;



}
@media(max-width:400px){
    width:40px;
    height:40px ;
}
`
const Navigations = styled.div`
display:flex ;
width:200px;
justify-content:space-between ;
align-items:center ;
/* background:green; */
@media(max-width:500px){
width:180px;
}
@media(max-width:400px){
width:120px;
}

`
// const Container = styled.div``