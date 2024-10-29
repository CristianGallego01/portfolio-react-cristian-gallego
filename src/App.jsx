import { Home } from "./components/Pages/Home/Home"
import { Header } from "./components/Layouts/Header/Header"
import { AboutMe } from "./components/Pages/AboutMe/AboutMe"
import { Projects } from "./components/Pages/Projects/Projects"
import { Footer } from "./components/Layouts/Footer/Footer"
export const App = ()=> {


  return (
    <>
    <Header/>
    <AboutMe/>
    <Projects/>
    <Footer/>
    </>
  )
}


