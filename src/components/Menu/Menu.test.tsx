import { screen } from '@testing-library/react';
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

    // Selecionar o menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');

    // expect(fullMenuElement.getA)
  });
});
