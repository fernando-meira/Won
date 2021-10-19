import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(
      screen.getByRole('button', {
        name: /buy now/i,
      })
    ).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem',
    });

    expect(container).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(
      screen.getByRole('button', {
        name: /buy now/i,
      })
    ).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should be render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(
      screen.getByRole('button', {
        name: /buy now/i,
      })
    ).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should be render fullWidth if prop exist', () => {
    renderWithTheme(<Button isFullWidth>Buy now</Button>);

    expect(
      screen.getByRole('button', {
        name: /buy now/i,
      })
    ).toHaveStyle({
      width: '100%',
    });
  });

  it('should be render icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toHaveStyle({
      width: '1.5rem',
    });
  });

  it('should be render anchor element', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Anchor test
      </Button>
    );

    debug(container);

    expect(
      screen.getByRole('link', {
        name: /Anchor test/i,
      })
    ).toHaveAttribute('href', '/link');
  });
});
