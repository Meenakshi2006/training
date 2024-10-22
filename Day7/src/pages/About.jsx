import React from "react";
import Alert from "../components/Alert";

export default function About(props) {
  return (
    <div>
      About
      <button
        onClick={() => {
          props.countFun(props.myCount + 1);
        }}
      >
        Incre
      </button>
      <Alert />
    </div>
  );
}
