import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../Form/Form';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {mount} from 'enzyme';

describe("FormComponent", () => {

    it('renders correctly', () => {
        const tree = renderer
          .create(<Form/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });


    it('updates the state when user inputs', () => {
        // TODO wanted test with nock but had some weird issues, see app.test.js
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const fullName = '';
        const domain = '';
        
        render(<Form onSubmit={onSubmit} onChange={onChange} fullName={fullName} domain={domain}/>);

        userEvent.type(screen.getByLabelText('Domain:'), '@babbel.com');
        expect(onChange).toHaveBeenCalled();
    });

    it('onSubmit called when submit button clicked', () => {
        // TODO this is too white-boxey, would rather test behaviour, trie with nock but had some weird issues, see App.test.js
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const fullName = '';
        const domain = '';
        
        render(<Form onSubmit={onSubmit} onChange={onChange} fullName={fullName} domain={domain}/>);

        userEvent.type(screen.getByLabelText('Domain:'), '@babbel.com');
        userEvent.type(screen.getByLabelText('Full name:'), 'jdogs wilon');
        userEvent.click(screen.getByText('Submit'));

        expect(onSubmit).toHaveBeenCalled();
    });

    it('displays alert message if input is invalid', () => {
        // TODO solve compatibility issues between enzyme & react versions to use mount
        // mount(<Form/>)
        // userEvent.type(screen.getByLabelText('Full name:'), 'jimmyhalp');
        // expect(screen.getByRole('alert'));
    });

})