import React from "react";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestionAction } from "../actions/questionsActions";
import { MDBBtn } from "mdb-react-ui-kit";

function QuestionCreate() {
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [observationValue, setObservationValue] = useState();
  const [dateValue, setDateValue] = useState();

  const [values, setValues] = useState();

  const [btnDisabled, setBtnDisabled] = useState(true);

  const dispatch = useDispatch();
  const questionCreate = useSelector((state) => state.questionCreate);
  const { loading, success, error, question } = questionCreate;

  console.log("question: ", question);
  const hadleChangeValues = (value) => {
    if (
      nameValue === undefined ||
      emailValue === undefined ||
      dateValue === undefined
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    if (value.target.name === "name") {
      setNameValue(value.target.value);
    }
    if (value.target.name === "email") {
      setEmailValue(value.target.value);
    }
    if (value.target.name === "date") {
      setDateValue(value.target.value);
    }

    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (e) => {
    console.log("QuestionCreate: ", values);

    // e.preventDefault();
    dispatch(createQuestionAction(values));
    clearFields();
  };

  function clearFields() {
    setNameValue("");
    setEmailValue("");
    setObservationValue("");
    setDateValue("");
  }

  return (
    <>
      {success && (
        <div style={{ color: "green", textAlign: "center" }}>{success}</div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}

      <TextInput
        id="inputNameQuestion"
        labelDescription={"Name:"}
        name={"name"}
        placeholder={"Name"}
        autoFocus
        handleInputChange={hadleChangeValues}
        value={nameValue}
      />
      <TextInput
        id="inputEmailQuestion"
        labelDescription={"Email:"}
        name={"email"}
        placeholder={"email@email.com"}
        handleInputChange={hadleChangeValues}
        value={emailValue}
      />
      <TextInput
        id="inputObservationQuestion"
        labelDescription={"Observation:"}
        name={"observation"}
        placeholder={"Question Observation"}
        handleInputChange={hadleChangeValues}
        value={observationValue}
      />
      <TextInput
        id="inputDateQuestion"
        labelDescription={"Date: "}
        name={"date"}
        placeholder={"YYYY/MM/DD"}
        handleInputChange={hadleChangeValues}
        value={dateValue}
      />

      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBBtn onClick={() => handleClickButton()} disabled={btnDisabled}>
          Register
        </MDBBtn>
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBBtn color="dark">
          <Link to="/">Back To Home</Link>
        </MDBBtn>
      </div>
    </>
  );
}

export default QuestionCreate;
