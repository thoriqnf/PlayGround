import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions to type SAVE_COMMENTS", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});
