import "./App.css";
import Header from "./Components/Header";
import { Home, Contact, Works, Blog } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/Works" element={<Works></Works>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Blog" element={<Blog></Blog>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
