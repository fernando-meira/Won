import { screen } from '@testing-library/react';

import { renderWithTheme } from '~/utils/tests/helpers';

import Banner from '.';

const defaultProps = {
  image: 'http://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { debug, container } = renderWithTheme(<Banner {...defaultProps} />);

    debug(container);

    expect(screen.getByLabelText(/defy death/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
