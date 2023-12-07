/* eslint-disable prettier/prettier */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './index';



describe("Given the modal opens on the window ", () => {

    test('Then it should render the modal', () => {
        render(
            <Modal show />
        ); 
        const modalElement = screen.getByTestId('modal');
        expect(modalElement).not.toBeNull();
      });

      
    test('Then it should render the content', () => {
        const contentText = 'content'; 
        render(
            <Modal show content={<div>{contentText}</div>} />
        );
        const contentElement = screen.getByText(contentText);
        expect(contentElement).not.toBeNull();
    });


    describe("When I click on close button", () => {

        test("Then the modal should close", async () => {
            const closeModalMock = jest.fn()
            
            render(
                <Modal show handleClose={closeModalMock} />
            );
            const closeButton = screen.getByTestId('close-button');
            fireEvent.click(closeButton);

            expect(closeModalMock).toHaveBeenCalledTimes(1);
        })
    });
})

  
describe('When the modal is closed', () => {

    test('Then it should not render the content', () => {
        const contentText = 'content';
        render(
            <Modal show={false} content={<div>{contentText}</div>} />
        );

        const contentElement = screen.queryByText(contentText);
        expect(contentElement).toBeNull();
    });

    test('Then it should not have the modal in the DOM', () => {
        render(
            <Modal show={false} content={<div>Test Content</div>} />
        );

        const modalElement = screen.queryByTestId('modal');
        expect(modalElement).toBeNull();
    });
});

