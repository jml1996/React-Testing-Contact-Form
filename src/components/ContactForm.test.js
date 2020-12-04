import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';
// import fireEvent from '@testing-library/fire-event';

test("renders without errors", () => {
    render(<ContactForm />);
});

test("name too long", async() => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    
    await act(async () => {
        userEvent.type(firstNameInput, "joshua");
        fireEvent.blur(firstNameInput);
        userEvent.click(lastNameInput);
    });

    // Max length too short:
    // expect(screen.queryByTestId("firstNameError")).toBeTruthy();

    // Fixed:
    expect(screen.queryByTestId("firstNameError")).not.toBeTruthy();
})

// FINDBY METHOD:
// test("name too long2", () => {
//     render(<ContactForm />);

//     const firstNameInput = screen.getByLabelText(/first name*/i);
//     const lastNameInput = screen.getByLabelText(/last name*/i);
    
    
//     userEvent.type(firstNameInput, "joshuawefwefwefewfefwwefwefwefefw");
//     fireEvent.blur(firstNameInput);
//     userEvent.click(lastNameInput);

//     // Max length is 10:
//     expect(screen.findByTestId("firstNameError")).toBeTruthy();
// })

test("form submission outputs corresponding JSON text", async() => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message/i);

    const button = screen.getByRole("button");
    
    await act(async () => {
        userEvent.type(firstNameInput, "jo");

        userEvent.click(lastNameInput);
        userEvent.type(lastNameInput, "Svoiln");

        userEvent.click(emailInput);
        userEvent.type(emailInput, "abc@jml.com");

        userEvent.click(messageInput);
        userEvent.type(messageInput, "hi");

        userEvent.click(button);
    });

    const newFirstName = screen.queryByText(/jo/i);
    const newLastName = screen.queryByText(/svoiln/i);
    const newEmail = screen.queryByText(/abc@jml.com/i);
    const newMessage = screen.queryByText(/hi/i);

    expect(newFirstName).toBeInTheDocument();
    expect(newLastName).toBeInTheDocument();
    expect(newEmail).toBeInTheDocument();
    expect(newMessage).toBeInTheDocument();

})

 
    // userEvent.type(firstNameInput, "joshua");
    // userEvent.type(lastNameInput, "Svoiln");
    // userEvent.type(emailInput, "abc@jml.com");
    // userEvent.type(messageInput, "hi");

    // // const button = screen.getByTestId("whatKindOfTestingSuiteCantQueryForAnyAttributeExceptDataTestId");
    // const button = screen.getByRole("button");
    // userEvent.click(button);

    // // const firstNameOutPut = screen.getByText("firstName");
    // // console.log("firstNameOutPut");

    // expect().toBeInTheDocument(/firstName/i);
    // expect("firstName").toBeInTheDocument();

    // // const document = document
    // console.log(document.getElementById('deadbug'));

    // const newFirstName = screen.queryByText(/jo/i);
    // const newLastName = screen.queryByText(/svoiln/i);
    // const newEmail = screen.queryByText(/abc@jml.com/i);
    // const newMessage = screen.queryByText(/hi/i);

    // expect(newFirstName).toBeInTheDocument();
    // expect(newLastName).toBeInTheDocument();
    // expect(newEmail).toBeInTheDocument();
    // expect(newMessage).toBeInTheDocument();

// userEvent.tab();

// // const ajj = screen.queryByText("error");
// console.log(document.querySelector("p"));
// expect(document.querySelector("p")).toBeTruthy();
    // const newFirstName = document.getElementsByTagName("pre");
    // console.log(newFirstName);
    
    // expect(newFirstName).toBeInTheDocument();

    // const newLastName = screen.queryByText(/svoiln/i);
    // const newEmail = screen.queryByText(/abc@jml.com/i);
    // const newMessage = screen.queryByText(/hi/i);