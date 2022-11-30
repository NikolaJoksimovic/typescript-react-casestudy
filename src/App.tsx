import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className='mb-4'>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/store' element={<Store></Store>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
