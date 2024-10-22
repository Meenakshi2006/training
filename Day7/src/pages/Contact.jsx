import React from "react";
import Alert from "../components/Alert";

export default function Contact(props) {
  return (
    <div>
      Contact
      <button
        onClick={() => {
          props.countFun(props.myCount - 1);
        }}
      >
        Decr
      </button>
      <Alert />
    </div>
  );
}
