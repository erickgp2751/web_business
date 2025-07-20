import "./App.css";
import "./components/Header.css";
import "./components/Proposal.css";
import "./components/Dimensions.css";
import "./components/Team.css";
import "./components/Materials.css";
import "./components/Contact.css";
import EnviromentalImpact from "./components/EnviromentalImpact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Proposal from "./components/Proposal";
import Materials from "./components/Materials";
import Dimensions from "./components/Dimensions";
import Team from "./components/Team";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
        <Header></Header>
        
        <Introduction></Introduction>
        <Proposal></Proposal>
        <Materials></Materials>
        <Dimensions></Dimensions>
        <EnviromentalImpact></EnviromentalImpact>
        <Team></Team>
      
        <Contact></Contact>
    </div>
  );
};

export default App;
