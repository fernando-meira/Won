import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';
import 'jest-styled-components';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a clack heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /won games/i,
      })
    ).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /won games/i,
      })
    ).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a line left when prop is passed', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /won games/i,
      })
    ).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  it('should be render a lineBottom when prop is passed', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(
      screen.getByRole('heading', {
        name: /won games/i,
      })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });
});
