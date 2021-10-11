import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should be render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open and close mobile menu.', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();

    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in now/i)).toBeInTheDocument();
  });

  it('should show My Account and Wishlist when logged in', () => {
    renderWithTheme(<Menu username="Fernando" />);

    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Log in Now/i)).not.toBeInTheDocument();

    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/My account/i)).toBeInTheDocument();
  });
});
