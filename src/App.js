import React from "react";
import Generalinfo from "./components/Generalinfo";

import "./App.css"
import EducationalExp from "./components/EducationalExp";
import PracticalExperience from "./components/PracticalExperience";


function App() {

  return (
    <div className="container">
      <Generalinfo />
      <div className="experience">
        <EducationalExp />
        <PracticalExperience />
      </div>
      
    </div>
  );
}

export default App;
