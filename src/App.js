import UpdaterComponent from './components/updaterComponent';
import { useState } from 'react';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";


function App() {
  const initialMortgageValues = {
    id:1,
    valuation:"app"
};
  const [mortgageValues, setMortgageValues] = useState(initialMortgageValues);

  const onConfirm = (updatedValues) => {
    console.log("page updatedValues", updatedValues);
    setMortgageValues(updatedValues);
  };

  return (
    <div className="App">
      <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{mortgageValues.valuation}</InputGroup.Text>
        
      </InputGroup>
      </div>
      <UpdaterComponent onConfirm={(udatedValues) => onConfirm(udatedValues)} mortgageValues={mortgageValues}/>
    </div>
  );
}

export default App;
