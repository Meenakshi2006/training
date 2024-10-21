// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  // const [count, setCount] = useState(0);

  // function counterHandler(operation) {
  //   if (operation === "in") {
  //     setCount(count + 1);
  //   } else if (operation === "de") {
  //     setCount(count - 1);
  //   } else {
  //     setCount(count + 5);
  //   }
  // }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
