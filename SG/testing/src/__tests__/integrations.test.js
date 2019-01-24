import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('Can fetch a list of comments and display them', () => {
  // Attemp to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // FInd the 'fetchComments' button and  click it

  // Expect to fin a list of comments! 500 Li's
});