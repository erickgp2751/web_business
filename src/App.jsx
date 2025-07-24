import "./App.css";
import "./components/Header.css";
import "./components/Proposal.css";
import "./components/Dimensions.css";
import "./components/Team.css";
import "./components/Contact.css";
import "./components/Card.css";
import "./components/Introduction.css";
import "./components/EnviromentalImpact.css";
import "./components/TargetMarket.css";
import EnviromentalImpact from "./components/EnviromentalImpact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Mision from "./components/Mision";
import Identity from "./components/Identity";
import Problem from "./components/Problem";
import TarjetMarket from "./components/TargetMarket";
import Competition from "./components/Competition";
import RevenueStreams from "./components/RevenueStreams";
import MarketingActivities from "./components/MarketingActivities";
import Proposal from "./components/Proposal";
import Materials from "./components/Materials";
import Expenses from "./components/Expenses";
import Team from "./components/Team";
import Milestones from "./components/Milestones";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
        <Header></Header>
        
        <Introduction></Introduction>
        <Mision></Mision>
        <Identity></Identity>
        <Problem></Problem>
        <Proposal></Proposal>
        <Materials></Materials>
        <EnviromentalImpact></EnviromentalImpact>
        <TarjetMarket></TarjetMarket>
        <Competition></Competition>
        <RevenueStreams></RevenueStreams>
        <MarketingActivities></MarketingActivities>
        
        <Expenses></Expenses>
        <Team></Team>
        <Milestones></Milestones>

        <Contact></Contact>
    </div>
  );
};

export default App;
