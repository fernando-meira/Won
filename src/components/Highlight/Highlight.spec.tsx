import { Imgur } from '@styled-icons/simple-icons';
import { render, screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Highlight from '.';

const defaultProps = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: '/home',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...defaultProps} />);

    expect(
      screen.getByRole('heading', {
        name: /Read Dead it’s back/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /Come see John’s new adventures/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /Buy now/i,
      })
    ).toBeInTheDocument();
  });

  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...defaultProps} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${defaultProps.backgroundImage})`,
    });
  });

  it('should render the float image', () => {
    renderWithTheme(
      <Highlight {...defaultProps} floatImage="/float-image.png" />
    );

    expect(
      screen.getByRole('img', {
        name: defaultProps.title,
      })
    ).toHaveAttribute('src', '/float-image.png');
  });
});
