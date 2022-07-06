import React, {useEffect} from 'react'
import styled from "styled-components"
import Header from '../Header/Header'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Hero = () => {
  const userdata = useSelector((state)=>state.recentuser)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>
                    Codelab <span>OJA</span>
                </Top>
<Down>
Order For Anything Easily And Quickly

</Down>
{userdata?
<Div>
<Link to="/create">
  
  <Butts>
 place order +
</Butts>
  

</Link>
<Link to="/adminview">
<Butts>
view orders
</Butts>
</Link>
</Div>
:
<Link to ="signup/signin">
<Butts>
  Get Started
</Butts>
</Link>
}
 




            </Left>
           
        </Wrapper>
    </Container>
  )
}

export default Hero

const Div = styled.div`
display: flex;
justify-content:space-between;
width:400px;
/* background:red; */
@media(max-width:500px){
  flex-direction:column ;
  width:300px;
  align-items:center
}
`
const Butts = styled.button`
padding:15px 40px;
border-radius:5px;
border:none;
font-size:18px;
outline:none ;
margin-top:10px ;
cursor:pointer ;
color:#fff;
background:green;
:hover{
  transition:all 300ms ;
  transform :scale(1.05);
  cursor: pointer;
}
`
const Down = styled.div`
font-size:3rem ;
font-weight:800;
color:#fff;
@media(max-width:500px){
font-size:2rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center ;
text-align:center ;
}
`
const Container = styled.div`

width:100%;
display:flex ;
height:100%;
min-height:100vh;
flex-direction:column ;
/* align-items:center ; */
/* margin-top:30px ; */
justify-content:center ;
background-image:url("/images/ooo.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position:center ;

`
const Wrapper = styled.div`

`
const Left = styled.div`
margin-left:80px;
@media(max-width:600px){
display:flex;
flex-direction:column;
justify-content:center;
align-items:center ;
margin-left:0 ;
}
`
const Right = styled.div`
width:1000px;



img{
  width:100% ;
 
}
`
const Top = styled.div`
font-size:4rem ;
font-weight:800;
color:#fff;
span{
  color: green;
}
@media(max-width:500px){
font-size:3rem
}
`