import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "../../../components/controls/Button";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with given label", () => {
  act(() => {
    render(<Button>Submit</Button>, container);
  });
  expect(container.textContent).toBe("Submit");
});

it("renders with empty label", () => {
    
    act(() => {
      render(<Button></Button>, container);
    });
    expect(container.textContent).toBe('');  
});