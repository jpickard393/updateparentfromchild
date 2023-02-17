import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const UpdaterComponent = ({ onConfirm, mortgageValues }) => {
  const [componantInput, setComponantInput] = useState(mortgageValues);

  const updateValue = (e) => {
    const newMortgageValues = { ...mortgageValues };

    const valuation = e.target.value;
    newMortgageValues.valuation = valuation;
    newMortgageValues.id = 2;
    setComponantInput(newMortgageValues);
  };

  const confirm = () => {
    onConfirm(componantInput);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          {componantInput.valuation}
        </InputGroup.Text>
        <Form.Control
          placeholder="Componant"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={updateValue}
        />
      </InputGroup>
      <Button variant="primary" onClick={confirm}>
        Primary
      </Button>{" "}
    </div>
  );
};

export default UpdaterComponent;
