import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
				background: "rgba(0,0,0,0.5)",
				color: "#fff",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "fixed",
			}}>
			<div>
				<ClipLoader color='#fff' />
			</div>
		</div>
	);
};

export default Loading;
