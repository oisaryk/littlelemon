import { render, waitFor } from '@testing-library/react';
import Specials from '../pages/Landing/Specials';
import fakeApi from '../utils/api';

jest.mock('../pages/Landing/SpecialsCard', () => () => <div>SpecialsCard</div>);
jest.mock('../utils/api');

describe('Specials', () => {
    test('renders without crashing', () => {
        render(<Specials />);
    });

    test('renders SpecialsCard', async () => {
        fakeApi.get.mockResolvedValueOnce({ data: [{}, {}] });
        const { getAllByText } = render(<Specials />);
        await waitFor(() => {
            expect(getAllByText('SpecialsCard')).toHaveLength(2);
        });
    });

    test('handles fetchCurrentSpecials', async () => {
        fakeApi.get.mockResolvedValueOnce({ data: [{}, {}] });
        render(<Specials />);
        await waitFor(() => {
            expect(fakeApi.get).toHaveBeenCalled();
        });
    });
});