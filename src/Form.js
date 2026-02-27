import "./Formstyle.css";
import { useState } from "react";
import Model from "./Temp";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ismodle, setismodle] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    const { age, name, phone } = formData;
    setismodle(null);
    if (age < 18 || age > 100) {
      setismodle("the age is not allowed");
    } else if (name.length < 10 || name.length > 30) {
      setismodle("the name is not allowed");
    } else if (phone.length < 11 || phone.length > 30) {
      setismodle("phone number fromat is incorrect");
    }
  }
  function handeldivclick() {
    if (isSubmitted === true) {
      setIsSubmitted(false);
    }
  }
  const isFormIncomplete =
    formData.name === "" || formData.phone === "" || formData.age === "";

  return (
    <div
      onClick={handeldivclick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Hello, please fill out the document.</h1>
        <hr />

        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
        />

        <label>Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(event) => {
            setFormData({ ...formData, phone: event.target.value });
          }}
        />

        <label>Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(event) => {
            setFormData({ ...formData, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "20px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          id="check"
          checked={formData.isEmployee}
          onChange={(event) => {
            setFormData({ ...formData, isEmployee: event.target.checked });
          }}
        />

        <label style={{ marginTop: "12px" }}>Salary</label>
        <select
          value={formData.salary}
          onChange={(event) => {
            setFormData({ ...formData, salary: event.target.value });
          }}
        >
          <option>Salary $500</option>
          <option>Between $500 and $1000</option>
          <option>Above $1500</option>
        </select>

        <button
          className={isFormIncomplete ? "disbut" : ""}
          disabled={isFormIncomplete}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* ✅ الـ h1 يظهر بس لو isSubmitted = true */}
      {<Model erorr={ismodle} isvastable={isSubmitted} />}
    </div>
  );
}
