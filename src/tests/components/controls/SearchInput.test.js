import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchInput from '../../../components/controls/SearchInput'

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
    render(<SearchInput label={'InputLabel'} />, container);
  });
  expect(container.textContent).toBe(' InputLabel ');

});

it("renders with given empty label", () => {
    act(() => {
      render(<SearchInput label={''} />, container);
    });
    expect(container.textContent).toBe('');  
});
