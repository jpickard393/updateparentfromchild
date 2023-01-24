import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const UpdaterComponent = ({ onConfirm, mortgageValues }) => {
  const [dialogInput, setDialogInput] = useState();

  const updateValue = (e) => {
    setDialogInput(e.target.value);
    console.log(e.target.value);
  };

  const confirmAndClose = () => {
    onConfirm(dialogInput);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{mortgageValues}</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={updateValue}
        />
      </InputGroup>
      <Button variant="primary" onClick={confirmAndClose}>
        Primary
      </Button>{" "}
    </div>
  );
};

export default UpdaterComponent;
