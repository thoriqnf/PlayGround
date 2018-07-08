import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('Shows a Comment Box', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it ('Show a Comment List', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});