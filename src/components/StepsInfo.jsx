import React from "react";
import "../styles/StepsInfo.scss";
function StepsInfo() {
  return (
    <>
      <div className="steps-info" id="steps-info">
        <h1>Wystarczą 4 proste kroki</h1>
        <div className="decoration">-----dekoracja tu----</div>
        <div className="steps">
          <div className="step">
            <span className="icon">---tu obrazek--</span>
            <h4>tytuł kroku</h4>
            <p>opis kroku</p>
          </div>
          <div className="step">
            <span className="icon">---tu obrazek--</span>
            <h4>tytuł kroku</h4>
            <p>opis kroku</p>
          </div>
          <div className="step">
            <span className="icon">---tu obrazek--</span>
            <h4>tytuł kroku</h4>
            <p>opis kroku</p>
          </div>
          <div className="step">
            <span className="icon">---tu obrazek--</span>
            <h4>tytuł kroku</h4>
            <p>opis kroku</p>
          </div>
        </div>
        <button className=" btn give-away">Oddaj rzeczy</button>
      </div>
    </>
  );
}

export default StepsInfo;
