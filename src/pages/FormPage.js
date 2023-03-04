import React, { useState } from "react";


function FormPage() {
  const [html, setHtml] = useState("1");
  const [css, setCss] = useState("1");
  const [js, setJs] = useState("1");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      html,
      css,
      js,
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="html"> level of HTML </label>
      </div>
      <div>
        <input
          type="radio"
          name="html"
          checked={html === "1"}
          value="1"
          onChange={(e) => setHtml(e.target.value)}
        />
        <label> 1</label>
        <input
          type="radio"
          name="html"
          checked={html === "2"}
          value="2"
          onChange={(e) => setHtml(e.target.value)}
        />
        <label> 2</label>
        <input
          type="radio"
          name="html"
          checked={html === "3"}
          value="3"
          onChange={(e) => setHtml(e.target.value)}
        />
        <label> 3</label>
        <input
          type="radio"
          name="html"
          checked={html === "4"}
          value="4"
          onChange={(e) => setHtml(e.target.value)}
        />
        <label> 4</label>
        <input
          type="radio"
          name="html"
          checked={html === "5"}
          value="5"
          onChange={(e) => setHtml(e.target.value)}
        />
        <label> 5</label>
      </div>

      <div>
        <label htmlFor="css"> level of CSS </label>
      </div>
      <div>
        <input
          type="radio"
          name="css"
          checked={css === "1"}
          value="1"
          onChange={(e) => setCss(e.target.value)}
        />
        <label> 1</label>
        <input
          type="radio"
          name="css"
          checked={css === "2"}
          value="2"
          onChange={(e) => setCss(e.target.value)}
        />
        <label> 2</label>
        <input
          type="radio"
          name="css"
          checked={css === "3"}
          value="3"
          onChange={(e) => setCss(e.target.value)}
        />
        <label> 3</label>
        <input
          type="radio"
          name="css"
          checked={css === "4"}
          value="4"
          onChange={(e) => setCss(e.target.value)}
        />
        <label> 4</label>
        <input
          type="radio"
          name="css"
          checked={css === "5"}
          value="5"
          onChange={(e) => setCss(e.target.value)}
        />
        <label> 5</label>
      </div>

      <div>
        <label htmlFor="js"> level of JavaScript </label>
      </div>
      <div>
        <input
          type="radio"
          name="js"
          checked={js === "1"}
          value="1"
          onChange={(e) => setJs(e.target.value)}
        />
        <label> 1</label>
        <input
          type="radio"
          name="js"
          checked={js === "2"}
          value="2"
          onChange={(e) => setJs(e.target.value)}
        />
        <label> 2</label>
        <input
          type="radio"
          name="js"
          checked={js === "3"}
          value="3"
          onChange={(e) => setJs(e.target.value)}
        />
        <label> 3</label>
        <input
          type="radio"
          name="js"
          checked={js === "4"}
          value="4"
          onChange={(e) => setJs(e.target.value)}
        />
        <label> 4</label>
        <input
          type="radio"
          name="js"
          checked={js === "5"}
          value="5"
          onChange={(e) => setJs(e.target.value)}
        />
        <label> 5</label>
      </div>

      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default FormPage;
