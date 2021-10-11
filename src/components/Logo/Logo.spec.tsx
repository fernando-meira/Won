import { screen } from '@testing-library/react';

import { renderWithTheme } from '~/utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render image', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByRole('img', { name: /Won Games/i }));
  });

  it('should render white color by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render black color when dynamic prop', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render regular size to default', () => {
    renderWithTheme(<Logo size="normal" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem',
    });
  });

  it('should render large size when the prop has passed', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem',
    });
  });

  it('should render a bigger logo without text id hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      }
    );
  });
});
