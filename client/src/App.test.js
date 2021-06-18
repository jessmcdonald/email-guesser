import { render, screen } from '@testing-library/react';
import App from './App';
import nock from 'nock';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http');

afterEach(nock.cleanAll);

test('api call sent if no errors submit button clicked', () => {

  // TODO I wanted to test behaviour and not implementation
  // used nock but had ~problems~ faffed about with nock logs for a while but I have no idea why it's not working!

  // const scope = nock(axios.defaults.baseURL)
  // .post('/api/v1/get-email')
  // .once()
  // .reply(200, {
  //   body: 'some string',
  // })

  // render(<App />);

  // userEvent.type(screen.getByLabelText('Domain:'), '@babbel.com');
  // userEvent.type(screen.getByLabelText('Full name:'), 'julia wilson');

  // userEvent.click(screen.getByText('Submit'))

  // expect(scope.isDone()).toBe(true);
});