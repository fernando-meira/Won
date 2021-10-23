import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toBeInTheDocument();
  });
});
