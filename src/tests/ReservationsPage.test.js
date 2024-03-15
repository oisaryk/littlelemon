import { render, fireEvent } from '@testing-library/react';
import ReservationsPage from '../pages/Reservations/ReservationsPage';

jest.mock('../pages/Reservations/ReservationForm', () => () => <div>ReservationForm</div>);
jest.mock('../pages/Reservations/TableSelectionForm', () => () => <div>TableSelectionForm</div>);

describe('ReservationsPage', () => {
    test('renders without crashing', () => {
        const { getByText } = render(<ReservationsPage />);
        expect(getByText('Reserve a Table')).toBeInTheDocument();
        expect(getByText('Select your table')).toBeInTheDocument();
    });

    test('renders ReservationForm and TableSelectionForm', () => {
        const { getByText } = render(<ReservationsPage />);
        expect(getByText('ReservationForm')).toBeInTheDocument();
        expect(getByText('TableSelectionForm')).toBeInTheDocument();
    });

    test('handles table selection', () => {
        const { getByText, rerender } = render(<ReservationsPage />);
        const tableSelectionForm = getByText('TableSelectionForm');
        fireEvent.click(tableSelectionForm);
        rerender(<ReservationsPage />);
        expect(getByText('ReservationForm')).toBeInTheDocument();
    });
});