import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import pp from "./avat.png"
import {FiCamera} from "react-icons/fi"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import swal from "sweetalert2"
// import ClipLoader from "react-spinners/ClipLoader"
import Loading from "./LoadingState"

const SignUp = () => {
	const navigate = useNavigate()
	const [loading, setLoading] =useState(false)
	const toggleLoad =()=>{
		setLoading(true)
	}
	const [image , setImage]= useState(pp)
    const [avatar , setAvatar] = useState("")
	const formSchema = yup.object().shape({
    fullname:yup.string().required("this field cannot be empty"),
    email:yup.string().email().required("this field cannot be empty"),
    phone:yup.string().required("this field cannot be empty"),
	password:yup.string().required("this field cannot be empty"),
	confirm:yup.string().oneOf([yup.ref("password"), null], "password must match")
	})

  const changeImage =(e)=>{
	const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
  }

  const {register, reset, handleSubmit, formState:{errors}}= useForm({
	resolver:yupResolver(formSchema)
  })

  const onSubmits= handleSubmit (async (val)=>{
console.log(val)

	const {fullname, email, phone, password} = val
const url ="https://ojabackend.herokuapp.com/api/user/createuser"

const formData = new FormData()
formData.append("fullname", fullname)
formData.append("email", email)
formData.append("phone", phone)
formData.append("password", password)
formData.append("avatar", avatar)


const config = {
	"content-type" : "multipart/form-data"
}

toggleLoad()
await axios.post(url, formData, config).then((res)=>{
	swal.fire({
		title: " Success",
		text: "proceed to signin",
		icon: "success",
	});
	// setLoading(false)

}).catch((error)=>{
	// swal({
	// 	title: error.response.data.,
	// 	text: "",
	// 	icon: "error",
	// 	button: "ok",
	// })
	setLoading(false);
})
	reset()
	navigate("/signup/signin")
  })
	return (
		<Container>
			<Wrapper>
			{loading ? <Loading /> : null}
			
			<Card >
					<ImageHolder>
						<Image src={image} />
						<ImageLabel htmlFor="pix"><FiCamera/></ImageLabel>
						<ImageInput
							id="pix"
							onChange={changeImage}
							type="file"
							accept="image/*"
						/>
					</ImageHolder>

					<Form onSubmit={onSubmits} 
					
					type="multipart/form-data">
						<Holder>
							{/* <Label>User Name</Label> */}
							<Input placeholder="fullname" 
							{...register("fullname")}
							/>
							<Error>{errors?.fullname?.message}</Error>
						</Holder>
						<Holder>
							{/* <Label>User Name</Label> */}
							<Input placeholder="phone" 
							{...register("phone")}
							
							/>
							<Error>{errors?.phone?.message}</Error>
						</Holder>
						<Holder>
							{/* <Label>Email</Label> */}
							<Input placeholder="email"  
							{...register("email")}
							
							/>
							<Error>
							{errors?.email?.message}
							</Error>
						</Holder>
						<Holder>
							{/* <Label>Password</Label> */}
							<Input placeholder="Password" type="password"
							{...register("password")}
							
							/>
							<Error>
							{errors?.password?.message}
							</Error>
						</Holder>
						<Holder>
							{/* <Label>Confirm Password</Label> */}
							<Input placeholder="confirm" 
							type="password"
							{...register("confirm")}
							/>
							<Error>
							{errors?.confirm?.message}
							</Error>
						</Holder>

						<Button type="submit"
						// onClick={(e)=>{
						// 	toggleLoad()
						// 	 e.preventDefault()
						// 	}}
						>Register</Button>
						<Div>
							Already have an Account? <Span to="signin">Sign in Here</Span>
						</Div>
					</Form>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default SignUp;

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
    background:green;
    border-radius:3px;


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
	height: 50px;
	border-radius: 3px;
	padding-left: 5px;
    margin:10px;
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
    background:#fff ;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	
	color: white;
    font-size:40px;
	border-radius: 3px;
	transition: all 350ms;
    position:absolute;
   
    top:30px;
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
    position:relative ;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	background-color: darkorange;
	

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
	min-height: 450px;
	border-radius: 5px;
	
	display: flex;
	justify-content: center;
	padding: 10px 0;
	flex-direction: column;
    background:#fff ;
	align-items:center;
	margin-top:50px ;
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
	/* height: 100%; */
	justify-content: center;
	display: flex;
	align-items: center;
	margin-top:30px ;
	/* background:red ; */
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height:100vh;
display: flex;
justify-content: center;
align-items:center ;
/* background: #FEBB4A; */



`;
