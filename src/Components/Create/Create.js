import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
// import { useParams } from "react-router-dom";
import axios from "axios"
import { useSelector } from "react-redux";
import {signinuser} from "../Global/Globalstste"
import Loading from "../Signup/LoadingState"





const SignIn = () => {
    const navigate= useNavigate()
    const [loading, setLoading]= useState(false)

	const toggleLoad=()=>{
        setLoading(true)
    }
const userdata = useSelector((state)=>state.recentuser)
const id = userdata._id
console.log(id)
	const formSchema = yup.object().shape({
        title:yup.string().required("must be present"),
		description:yup.string().required("must be present"),
		quantity:yup.number().required("must be present"),
		price:yup.number().required("must be present"),
		balance:yup.number().required("must be present")

    })
const {register, reset, handleSubmit, formState:{errors}}=useForm({

resolver:yupResolver(formSchema)
})
const onSubmit = handleSubmit(async (val)=>{

console.log(val)

const url = `https://ojabackend.herokuapp.com/api/orders/${id}/createorder`
const config={
	headers:{
		authorization : `dee ${userdata.token}`
	}
}
toggleLoad()

await axios.post(url,val, config).then((res)=>{
	
    console.log(res)
}).catch((err)=>{
    console.log(err)
	setLoading(false)

})
reset() 
navigate("/dashboard")
})
	return (
		<Container>
			<Wrapper>
            {loading? <Loading/>:null}

				<div style={{color:"green",
			fontWeight:"800",
			fontSize:"2.5rem",
			marginBottom:"20px",
			}}>Fill in your Order</div>
				<Card>
                    
					<Form onSubmit={onSubmit}>
						<Holder>
						
							<Input placeholder="title" 
                            {...register("title")} />
							<Error></Error>
						</Holder>
						<Holder>
							
							<Input placeholder="description" 
                            {...register("description")}
                            />
							<Error></Error>
						</Holder>
						<Holder>
							
							<Input placeholder="quantity" 
							type="number"
                            {...register("quantity")}
                            />
							<Error></Error>
						</Holder>
						<Holder>
							
							<Input placeholder="price" 
							type="number"
                            {...register("price")}
                            />
							<Error></Error>
						</Holder>
						<Holder>
							
							<Input placeholder="balance" 
							type="number"
                            {...register("balance")}
                            />
							<Error></Error>
						</Holder>
						<Button type="submit">Submit</Button>
						
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
	@media(max-width:320px){
	width:70%;
	margin-top: 10px;
 
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
	@media(max-width:320px){
		margin-top: 0;

 
}
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
	@media(max-width:450px){
 width :350px ;
}
@media(max-width:360px){
 width :320px ;
}
@media(max-width:320px){
 width :300px ;
 min-height: 250px;
 padding: 10px 0;

}
`;

const Wrapper = styled.div`
	/* width: 100%; */
	height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	/* background:green; */
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
/* background:blue; */
/* height:100vh; */

`;
