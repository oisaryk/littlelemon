import { render, fireEvent, waitFor } from '@testing-library/react';
import ReservationForm from '../pages/Reservations/ReservationForm';

describe('ReservationForm', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log');
        console.log.mockImplementation(() => {});
    });
    test('renders without crashing', () => {
        render(<ReservationForm />);
    });

    test('renders form fields correctly', () => {
        const { getByPlaceholderText } = render(<ReservationForm />);
        expect(getByPlaceholderText('Oleksandr Doe')).toBeInTheDocument();
        expect(getByPlaceholderText('some@email.com')).toBeInTheDocument();
        expect(getByPlaceholderText('+380XXXXXXXXX')).toBeInTheDocument();
    });

    test('handles form submission', async () => {
        const { getByText, getByPlaceholderText, getByLabelText } = render(<ReservationForm />);
        const nameInput = getByPlaceholderText('Oleksandr Doe');
        const emailInput = getByPlaceholderText('some@email.com');
        const telephoneInput = getByPlaceholderText('+380XXXXXXXXX');
        const dateInput = getByPlaceholderText('dd.mm.yyyy');
        const reserveButton = getByText('Reserve');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(telephoneInput, { target: { value: '+380123456789' } });
        fireEvent.change(dateInput, { target: { value: '2024-03-15T18:25' } });

        fireEvent.click(reserveButton);

        await waitFor(() => {
            expect(console.log).toHaveBeenCalled();
        });
    });

    test('handles form validation', async () => {
        const { getByText, getByPlaceholderText } = render(<ReservationForm />);
        const nameInput = getByPlaceholderText('Oleksandr Doe');
        const emailInput = getByPlaceholderText('some@email.com');
        const telephoneInput = getByPlaceholderText('+380XXXXXXXXX');
        const reserveButton = getByText('Reserve');

        fireEvent.change(nameInput, { target: { value: '' } });
        fireEvent.change(emailInput, { target: { value: 'invalid email' } });
        fireEvent.change(telephoneInput, { target: { value: 'invalid phone number' } });

        fireEvent.click(reserveButton);

        await waitFor(() => {
            expect(getByText('Full name is a required field!')).toBeInTheDocument();
            expect(getByText('Email is not valid!')).toBeInTheDocument();
            expect(getByText('Phone number must match the form +380XXXXXXXXX')).toBeInTheDocument();
        });
    });

    afterEach(() => {
        console.log.mockRestore();
    });
});