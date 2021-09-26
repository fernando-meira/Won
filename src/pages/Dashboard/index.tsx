import * as S from './styles';

import { Logo, StopWatch } from '~/components';

export default function Dashboard() {
  return (
    <S.Container>
      <Logo />

      <StopWatch />
    </S.Container>
  );
}
