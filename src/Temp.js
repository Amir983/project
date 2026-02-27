import "./Formstyle.css";
export default function Model({ isvastable, erorr } = null) {
  if (isvastable) {
    return (
      <div id="model">
        <div id="model-content">
          <h1 style={{ color: erorr ? "red" : "green" }}>
            {erorr != null ? erorr : "The form Has Been Submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
