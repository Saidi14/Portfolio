import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import SkillPanel from "./SkillPanel"
import ProjectSection from "./ProjectSection"
function App() {

  const javaObj = {
    title: "Java",
    imageSrc: "https://placehold.co/150x150",
    imageAlt: "Java Image",
    content: "I have a solid foundation in java programming and "+
            "related concepts such as OOP and data structures / algorithms."
  }

  return (
    <>
      <Header/>
      <About/>
      <SkillPanel/>
      <ProjectSection/>
      <Footer/>
    </>
  )
}

export default App
