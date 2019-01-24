import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetch #1' }, { name: 'Fetch #2' }]
  })
})

afterEach(() => {
  moxios.uninstall();
})

it('Can fetch a list of comments and display them', () => {
  // Attemp to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // FInd the 'fetchComments' button and  click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to fin a list of comments! 500 Li's
  setTimeout(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  }, 100)
});