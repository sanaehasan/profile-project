import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import NotFound from './components/NotFount'

function App() {


  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/reachme" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
       <Route path="/*" element={<NotFound/>}/>
    </Routes>
  
    </>
  )
}

export default App
