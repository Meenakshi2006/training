import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext, useEffect, useState } from "react";
import fetchContext from "./context/myContext";

const App = () => {
  const [count, setCount] = useState(0);

  const { fetchData } = useContext(fetchContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home myCount={count} />} />
        <Route
          path='/about'
          element={<About myCount={count} countFun={setCount} />}
        />
        <Route
          path='/contact'
          element={<Contact myCount={count} countFun={setCount} />}
        />
        {/* <Route path='/policy' element={<Policy />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
