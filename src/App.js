
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import SignUp from "./Components/Signup/Signup";
import Admin from "./Components/Signup/Admin";
import SignIn from "./Components/Signup/Signin";
import Profile from "./Components/Profile/Profile";
import Create from "./Components/Create/Create";
import PrivateRoute from "./Components/Global/PrivateRoute";
import Prouteadmin from "./Components/Global/Prouteadmin";
import Adminview from "./Components/Profile/Adminview";
const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>

      <Routes>
        <Route path ="/" element={<Hero/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/adminsignup" element={<Admin/>} />
				<Route path="/signup/signin" element={<SignIn/>} />
        <Route path ="/dashboard" element={
        <PrivateRoute>
        <Profile/>

        </PrivateRoute>
        
        }/>
        <Route path ="/create" element={
        <PrivateRoute>
        <Create/>
        </PrivateRoute>
        }/>
        <Route path ="/adminview" element={<Prouteadmin>
      <Adminview/>
     </Prouteadmin>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
