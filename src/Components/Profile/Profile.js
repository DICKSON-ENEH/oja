import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {BsFillHeartFill} from "react-icons/bs"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import axios from "axios"
import {addorder} from "../Global/Globalstste"
import moment from "moment"

const Profile = () => {
    const [toggle, setToggle]= useState(false)
   
    const changer =()=>{
        setToggle(!toggle)
    }
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.recentuser)
    const mem = useSelector((state)=>state.orders)


    const getalldata=async()=>{
        const url = `https://ojabackend.herokuapp.com/api/orders/${user._id}/oneorder`

        const config={
            headers:{
                authorization:`deekie ${user.token}`
            }
        }
        await axios.get(url, config).then((res)=>{
            dispatch(addorder(res.data.data.orders))
        }).catch((error)=>{
        })
    }
    useEffect(()=>{
        getalldata()
    }, [])
  return (
    <Container>
        <Wrapper>
            <Head>
            <Top>
              welcome {user.fullname},
            </Top>
            <Link to="/create">
            <Create>
                Place an Order +
            </Create>
            </Link>
            </Head>

          <Base>
          {
            mem?.map((props)=>(
                <Card key={props.id}>
                <Cardwrap>
                    <Image src={props.image}/>
                
                <Hold>
                <Title>Title:{props.title}</Title>
                    <Description>
    Desc: {props.description}
    
                    </Description>
                    <Quantyity>
                        Qty:{props.quantity}
                    </Quantyity>
                 {
                    toggle? <Amount>
                    Amount:{props.price} 
                    <Icon1 onClick={changer}/>
                    
                                    </Amount>: <Amount>
    Amount:{props.price}
    <Icon onClick={changer}/>
    
                    </Amount>
                    
                 }  
                 <Quantyity>
                       Bal:{props.balance}
                    </Quantyity>
                   
                 
               
                    <Quantyity>
                        {moment(props.createdAt).format("YYYY-MM-DD HH:MM")}
                    </Quantyity>
                 
                </Hold>
                </Cardwrap>
              </Card>
            ))
          }
         
        
          </Base>
        </Wrapper>
    </Container>
  )
}

export default Profile
const Icon = styled(BsFillHeartFill)`
font-size:40px;
color:red;
transition: all 100ms;

`
const Icon1 = styled(BsFillHeartFill)`
font-size:40px;
color:green;
transition: all 100ms;

`
const Hold = styled.div`
height:180px ;

display: flex;
justify-content:space-around;
flex-direction: column ;
/* background-color:red ; */
@media(max-width:1204px){
    width:250px
}
`
const Card = styled.div`
width:350px;
height:400px;
border-radius:15px;
box-shadow: 4px 5px 20px 3px rgba(53, 65, 71, 0.15);
margin:40px;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:1204px){
    width:300px
}
`
const Base= styled.div`
display: flex;
flex-wrap:wrap ;
@media(max-width:1204px){
    align-items:center ;
}
`
const Cardwrap = styled.div`
width:300px;


height:350px;
display:flex ;
justify-content:space-around;
align-items:center;
flex-direction:column ;
@media(max-width:1204px){
    width:250px
}
`

const Image = styled.img`
width:100px;
height:100px;
border-radius:50% ;
object-fit:cover ;
`
const Title = styled.div``
const Description = styled.div``
const Quantyity = styled.div``
const Amount = styled.div`
display: flex;
width:300px ;
justify-content:space-between;
align-items:center ;
@media(max-width:1204px){
    width:250px
}
`
const Head = styled.div`
display: flex;
justify-content:center;
align-items:center ;;
flex-direction: column;
`
const Create = styled.button`
padding:15px 40px;
border-radius:25px;
background:green ;
border:0;
outline:0 ;
color:#fff;
font-size:18px ;
cursor:pointer;
margin-top: 10px;

:hover{
    transform:scale(1.05) ;
    transition: all 350ms;
}
`
const Container = styled.div`
display: flex;
width: 100%;
justify-content:center;
align-items:center ;
/* background:blue; */
/* flex-direction:column ; */
`
const Wrapper = styled.div`
width:90%;
display: flex;
/* background:green; */
justify-content:space-between;
flex-direction: column ;
align-items:center ;
margin-top:40px ;
/* background:red
; */
@media(max-width:1200px){
align-items:center ;
}
/* align-items:center ; */

`
const Top = styled.div`
color:green;
font-size:4rem;
font-weight:800;
margin-top:30px;
text-align:center;
/* background:yellow; */
@media(max-width:600px){
    font-size:2.5rem; 
}
`