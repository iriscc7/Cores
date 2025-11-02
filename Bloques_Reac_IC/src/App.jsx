import "./App.css";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNAv";


function App() {

  return <>
    <div className="container">
      <TopNav/>
      <Main/> 
      <SideNav/>
    </div>
    
</>
}

export default App;
