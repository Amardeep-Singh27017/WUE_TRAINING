import './App.css'
import Navbar from './componects/Navbar';
import Footer from './componects/Footer';
import Card from './componects/Card';
import Counter from './componects/Counter';


function App() {

  return (
    <>
      <Navbar />
     
      <div className="cards">
        <Card Title="MongoDb" description="This text is coming using prop 1." img="/code_img.webp"/>
        <Card Title="Express.js" description="This text is coming using prop 2." img="/code_img.webp"/>
        <Card Title="React.js" description="This text is coming using prop 3." img="/code_img.webp"/>
        <Card Title="Node.js" description="This text is coming using prop 4." img="/code_img.webp"/>
      </div>
      <Counter />
      <Footer />
    </>
  )
}

export default App
