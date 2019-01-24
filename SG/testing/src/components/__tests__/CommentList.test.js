
import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comments 1', 'Comments 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('Creates every LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('Shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comments 1');
  expect(wrapped.render().text()).toContain('Comments 2');
});