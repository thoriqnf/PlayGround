import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("shows a comment box", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// Enzyme can test Static, Shallow, FullDOM
// Static = render the given component and retur plain HTML
// Shallow = Rensder *just* the given component and none of its children
// Full DOM = Render the component and all of its children + let us modify it afterwards

// Documentation
// const div = document.createElement("div");

// ReactDOM.render(<App />, div);

// // Looks inside the div
// // and checks to see if the commentbox is in there
// expect(div.innerHTML).toContain("Comment Box");

// ReactDOM.unmountComponentAtNode(div);
//   // need to clean up the div as long test running to maintain memory
