import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toBeInTheDocument();
  });

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByLabelText(/etiqueta/i)).toHaveStyle({
      background: '#F231A5',
    });
  });

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByLabelText(/etiqueta/i)).toHaveStyle({
      background: '#3CD3C1',
    });
  });

  it('should render normal size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByLabelText(/etiqueta/i)).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.6rem',
    });
  });

  it('should render small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByLabelText(/etiqueta/i)).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem',
    });
  });
});
