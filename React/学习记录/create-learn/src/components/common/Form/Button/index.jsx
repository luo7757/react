import React from "react";
import { Consumer } from "../FormContext/index";

export default function FormButton(props) {
  return (
    <Consumer>
      {(ctx) => {
        return (
          <button
            onClick={() => {
              ctx.submit();
            }}
          >
            {props.children}
          </button>
        );
      }}
    </Consumer>
  );
}
