import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Application from "../../pages/application/Application";

import store from '../../store/index';
import { Provider } from 'react-redux';

describe('Application component', () => {

    test('should hide the form onLoad', async () => {        
        render(<Provider store={store}><Application /></Provider>);      
        //userEvent.click(screen.getByRole('button', {  name: /create application/i}));
        expect(screen.queryByRole('link', {
            name: /download excel format/i
          })).toBeNull();
    });

    test('should show the form onClick of createApplication button', async () => {        
        render(<Provider store={store}><Application /></Provider>);        
        userEvent.click(screen.getByRole('button', {  name: /create application/i}));
        expect(screen.getByText(/application code/i)).toBeInTheDocument();
        expect(screen.getByRole('link', {  name: /download excel format/i})).toBeEnabled();
    });

    test('search subheader to be present on load', () => {
        render(<Provider store={store}><Application /></Provider>);  
        expect(screen.getByText(/search/i)).toBeInTheDocument();
    });

    test('on create submit the submission handler should have been called', () => {

        render(<Provider store={store}><Application /></Provider>);  

        // screen.debug();

        userEvent.click(screen.getByRole('button', {  name: /create application/i}));

        const appCode = screen.getByRole('textbox', {  name: /application code/i});
        const appDesc = screen.getByRole('textbox', {  name: /application description/i});

        userEvent.type(appCode, 'application code');
        userEvent.type(appDesc, 'application description');

        userEvent.click(screen.getByRole('button', {  name: /create/i}));

        expect(screen.queryByRole('link', {
            name: /download excel format/i
        })).toBeNull();

    })

})