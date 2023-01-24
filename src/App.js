import UpdaterComponent from './components/updaterComponent';
import { useState } from 'react';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";


function App() {
  const initialMortgageValues = {
    //propertyType:"House",
    valuation:"100000",
    //balance:"1000"
};
  const [mortgageValues, setMortgageValues] = useState("1000");

  const onConfirm = (updatedValue) => {
    setMortgageValues(updatedValue);
    console.log("page updatedValues", updatedValue);
  };

  return (
    <div className="App">
      <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{mortgageValues}</InputGroup.Text>
        
      </InputGroup>
      </div>
      <UpdaterComponent onConfirm={(updatedValues) => onConfirm(updatedValues)} mortgageValues={mortgageValues}/>
    </div>
  );
}

export default App;
