import React , {useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
// import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import {signinuser} from "../Global/Globalstste"
import swal from "sweetalert2"
import Aos from "aos";
import "aos/dist/aos.css"




const SignIn = () => {
    const navigate= useNavigate()
	const dispatch= useDispatch()
	const formSchema = yup.object().shape({
        email:yup.string().email().required("email must be present"), 
        password:yup.string().required("password must match")
    })
const {register, reset, handleSubmit, formState:{errors}}=useForm({

resolver:yupResolver(formSchema)
})
const onSubmit = handleSubmit(async (val)=>{
const {email , password} = val
// console.log(val)

const url = "https://ojabackend.herokuapp.com/api/user/signin"
await axios.post(url,{email, password}).then((res)=>{
	dispatch(signinuser(res.data.data))
    swal.fire({
		title: " Success",
		text: "welcome to Oja",
		icon: "success",
	});
}).catch((err)=>{
    console.log(err)
})
reset() 
navigate("/dashboard")
})
useEffect(()=>{
	Aos.init=({duration:1500})
})
	return (
		<Container>
			<Wrapper>
				<div style={{color:"green",
			fontWeight:"800",
			fontSize:"2.5rem",
			marginBottom:"20px"
			}}>Oja</div>
				<Card >
                   <div style={{ 
				display:"flex",
				justifyContent:"center",
				fontWeight:"bold"
				}} >
                   Log In to Account
                    </div> 
					<Form onSubmit={onSubmit}>
						<Holder>
						
							<Input placeholder="email" 
                            {...register("email")} />
							<Error></Error>
						</Holder>
						<Holder>
							
							<Input placeholder="password" type="password"
                            {...register("password")}
                            />
							<Error></Error>
						</Holder>

						<Button type="submit">Sign in</Button>
						<Div>
							Don't have an Account? <Span to="/signup">Sign up Here</Span>
						</Div>
					</Form>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default SignIn;

const Span = styled(Link)`
	margin-left: 5px;
	text-decoration: none;
	color: darkorange;
	cursor: pointer;
`;

const Div = styled.div`
	display: flex;
	margin-top: 10px;
`;

const Button = styled.button`
	width: 80%;
	margin-top: 30px;
	height: 50px;
	font-family: Poppins;
	font-size: 20px;
	text-transform: uppercase;
	color: white;
	font-weight: 300;
	outline: none;
	border: 0;
	background-color: green;

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const Error = styled.div`
	color: red;
	font-weight: 500;
	font-size: 12px;
`;

const Input = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 3px;
	padding-left: 5px;
    margin:10px ;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	::placeholder {
		font-family: Poppins;
	}
	border: 0;
	outline: none;
`;

const Label = styled.label`
	font-weight: 500;
`;

const Holder = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: flex-start;
	margin-top: 10px;
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 28px;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	padding: 10px 20px;
	background-color: #004080;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const ImageHolder = styled.div`
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	background-color: darkorange;
	margin-bottom: 20px;

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Card = styled.div`
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	width: 500px;
	min-height: 300px;
	/* height: 100%; */
	border-radius: 5px;
    background:#fff ;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	flex-direction: column;
	@media(max-width:500px){
        width:350px;
	min-height: 350px;

    }
    @media(max-width:400px){
        width:320px;
	min-height: 350px;

    }
    @media(max-width:330px){
        width:300px;
	/* min-height: 250px; */

    }
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Container = styled.div`
	width: 100%;
	/* height: calc(100vh - 70px); */
	/* padding-top: 70px; */
display:flex ;
justify-content: center;
align-items:center ;
height: 100vh;
width:100%;
/* height:100vh; */

`;
