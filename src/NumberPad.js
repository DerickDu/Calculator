import React, { useEffect, useState } from "react";

const NumberPad = () => {
  const [result, SetResult] = useState(0);
  const [num, SetNum] = useState([0]);
  const [operator, SetOperator] = useState("");

  function numToArray(num) {
    // 1: convert number to string
    // 2: use regex to match '-' (optionally) and numbers
    const strArr = String(num).match(/-?\d/g);
    // 3: if match found, convert each item to an integer, else return `[]`
    return Array.isArray(strArr) ? strArr.map(Number) : [];
  }

  const onClickHandler = (e) => {
    if (num[0] != 0) {
      const newNum = [...num, e.target.value];
      SetNum(newNum);
    } else {
      SetNum([e.target.value]);
    }
  };

  const ClearHandler = (e) => {
    SetNum([0]);
    SetResult(0);
    SetOperator("");
  };

  const equalHandler = () => {
    // console.log(e.target.value);
    switch (operator) {
      case "+": {
        let num1 = parseInt(num.join(""), 10) + result;
        SetResult(num1);
        SetNum(numToArray(num1));
        break;
      }
      case "-": {
        let num1 = result - parseInt(num.join(""), 10);
        SetResult(num1);
        SetNum(numToArray(num1));
        break;
      }
      case "*": {
        let num1 = parseInt(num.join(""), 10) * result;
        SetResult(num1);
        SetNum(numToArray(num1));
        break;
      }
      case "/": {
        if (parseInt(num.join(""), 10) === 0) {
          alert("傻B？不知道0不能当除数么");
          break;
        }
        let num1 = result / parseInt(num.join(""), 10);
        SetResult(num1);
        SetNum(numToArray(num1));
        break;
      }
      default:
        SetResult(parseInt(num.join(""), 10));
    }
    SetOperator("");
  };

  const operatorHandler = (e) => {
    equalHandler();
    SetOperator(e.target.value);
    if (result === 0) {
      SetResult(parseInt(num.join(""), 10));
    }
    SetNum([0]);
  };

  console.log(result);
  const n1 = -123;
  console.log(numToArray(n1));
  return (
    <div
      style={{
        border: "8px solid white",
        width: "66%",
        borderRadius: "15px",
        margin: "auto",
        textAlign: "center",
        padding: "5px"
      }}
    >
      <div
        style={{
          border: "5px solid white",
          borderRadius: "15px",
          margin: "auto",
          textAlign: "right",
          paddingRight: "50px"
        }}
      >
        <h1 id="Number">
          {" "}
          {(result === 0) | (num[0] !== 0) ? num.join("") : result}{" "}
        </h1>
      </div>
      <button
        style={{ padding: "40px 50px", fontSize: "30px", borderRadius: "18px" }}
        onClick={onClickHandler}
        value={1}
      >
        1
      </button>
      <button
        style={{ padding: "40px 50px", fontSize: "30px", borderRadius: "18px" }}
        onClick={onClickHandler}
        value={2}
      >
        2
      </button>
      <button
        style={{ padding: "40px 50px", fontSize: "30px", borderRadius: "18px" }}
        onClick={onClickHandler}
        value={3}
      >
        3
      </button>
      <button
        style={{
          padding: "40px 50px",
          fontSize: "30px",
          borderRadius: "18px",
          backgroundColor: "#878689"
        }}
        onClick={operatorHandler}
        value={"+"}
      >
        +
      </button>
      <div>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={4}
        >
          4
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={5}
        >
          5
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={6}
        >
          6
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px",
            backgroundColor: "#878689"
          }}
          onClick={operatorHandler}
          value={"-"}
        >
          -
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={7}
        >
          7
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={8}
        >
          8
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={9}
        >
          9
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px",
            backgroundColor: "#878689"
          }}
          onClick={operatorHandler}
          value={"*"}
        >
          x
        </button>
      </div>

      <div>
        <button
          style={{
            padding: "40px 25px",
            fontSize: "30px",
            borderRadius: "18px",
            backgroundColor: "#ff613a"
          }}
          onClick={ClearHandler}
        >
          Clear
        </button>
        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={onClickHandler}
          value={0}
        >
          0
        </button>

        <button
          style={{
            padding: "40px 50px",
            fontSize: "30px",
            borderRadius: "18px"
          }}
          onClick={equalHandler}
        >
          =
        </button>
        <button
          style={{
            padding: "40px 53px",
            fontSize: "30px",
            borderRadius: "18px",
            backgroundColor: "#878689"
          }}
          onClick={operatorHandler}
          value={"/"}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
