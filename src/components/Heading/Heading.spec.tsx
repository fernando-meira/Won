import { screen } from '@testing-library/react';

import { renderWithTheme } from '~/utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should be render a black label by default', () => {
    renderWithTheme(<Heading>Heading test</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /Heading test/i,
      })
    ).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be render a white label when props was passed', () => {
    renderWithTheme(<Heading color="white">Heading test</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /heading test/i,
      })
    ).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should be render a line left when props was passed', () => {
    renderWithTheme(<Heading lineLeft>Heading test</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /heading test/i,
      })
    ).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
  });

  it('should be render a line bottom when props was passed', () => {
    renderWithTheme(<Heading lineBottom>Heading test</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /heading test/i,
      })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should be render heading with small size', () => {
    renderWithTheme(<Heading size="small">Heading test</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /Heading test/i,
      })
    ).toHaveStyle({
      'font-size': '1.6rem',
    });
  });

  it('should be render heading with medium size', () => {
    renderWithTheme(<Heading>Heading test</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /Heading test/i,
      })
    ).toHaveStyle({
      'font-size': '2.0rem',
    });
  });

  it('should be render heading with lineLeft primary', () => {
    renderWithTheme(
      <Heading lineLeft lineColor="primary">
        Heading test
      </Heading>
    );

    expect(
      screen.getByRole('heading', {
        name: /Heading test/i,
      })
    ).toHaveStyleRule('border-left', '0.7rem solid #F231A5');
  });

  it('should be render heading with lineBottom secondary', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary">
        Heading Test
      </Heading>
    );

    expect(
      screen.getByRole('heading', {
        name: /Heading test/i,
      })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
