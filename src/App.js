import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Python from './Components/Projects/Python/Python'
import Js from './Components/Projects/Js/Js';
import NodeJs from './Components/Projects/NodeJs/NodeJs';
import ReactJs from './Components/Projects/ReactJs/ReactJs';
import HTML from './Components/Projects/HTML/HTML';
import CSS from './Components/Projects/CSS/CSS';
import CommingSoon from './Components/CommingSoon/CommingSoon';
function App() {
  return (
    <>
    <div className="body">
    <Router>
      <Navbar/>
      {/* <Home/> */}
        <Routes>
          <Route exact path="/zer0ne/" element={<Home/>} />
          <Route  path="/zer0ne/about" element={<About/>} />
          <Route  path="/zer0ne/project" element={<Project/>} />
          <Route  path="/zer0ne/project/python" element={<Python/>} />
          <Route  path="/zer0ne/project/js" element={<Js/>} />
          <Route  path="/zer0ne/project/nodejs" element={<NodeJs/>} />
          <Route  path="/zer0ne/project/reactjs" element={<ReactJs/>} />
          <Route  path="/zer0ne/project/html" element={<HTML/>} />
          <Route  path="/zer0ne/project/css" element={<CSS/>} />
          <Route path='/zer0ne/portfolio' element={<CommingSoon/>}/>
          <Route path='/zer0ne/contact' element={<CommingSoon/>}/>
        </Routes>
      </Router>
    
    </div>
    </>
  );
}
export default App;