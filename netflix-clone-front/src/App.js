import Home from "./pages/home/Home";
import './app.scss';
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {

  const user = true;

  return (
    <Routes>
      <Route path='/' element={user ? <Home></Home> : <Navigate to='/register' replace></Navigate>}></Route>
      <Route path='/register' element={!user ? <Register></Register> : <Navigate replace to='/'></Navigate>}></Route>
      <Route path='/login' element={!user ? <Login></Login> : <Navigate to='/' replace></Navigate>}></Route>
      {user && 
        <>
          <Route path='/movies' element={<Home type='movie'></Home>}></Route>
          <Route path='/series' element={<Home type='series'></Home>}></Route>
          <Route path='/watch' element={<Watch></Watch>}></Route>
        </>
      }
      <Route path='*' element={<Navigate to='/'></Navigate>}></Route>
    </Routes>
  );
}

export default App;
