import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import pp from "./avat.png"
import {FiCamera} from "react-icons/fi"


const SignUp = () => {
	const [image , setImage]= useState(pp)
    const [avatar , setAvatar] = useState("")

	return (
		<Container>
			<Wrapper>
				<Card>
					<ImageHolder>
						<Image src={image} />
						<ImageLabel htmlFor="pix"><FiCamera/></ImageLabel>
						<ImageInput
							id="pix"
							// onChange={handleImage}
							type="file"
							accept="image/*"
						/>
					</ImageHolder>

					<Form>
						<Holder>
							{/* <Label>User Name</Label> */}
							<Input placeholder="userName"  />
							<Error></Error>
						</Holder>
						<Holder>
							{/* <Label>Email</Label> */}
							<Input placeholder="email"  />
							<Error></Error>
						</Holder>
						<Holder>
							{/* <Label>Password</Label> */}
							<Input placeholder="Password" type="password"/>
							<Error></Error>
						</Holder>
						<Holder>
							{/* <Label>Confirm Password</Label> */}
							<Input placeholder="Confirm Password" 
							type="password"/>
							<Error></Error>
						</Holder>

						<Button type="submit">Register</Button>
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
	min-height: 550px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	padding: 10px 0;
	flex-direction: column;
    background:#fff ;
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
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 70px);

/* background: #FEBB4A; */

width:100%;

`;
