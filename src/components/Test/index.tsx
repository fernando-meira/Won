import { useEffect, useState } from 'react';

import * as S from './styles';

export default function Test() {
  const [checked, setChecked] = useState(0);

  function getRandom(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(getRandom(-9, 9));
  }

  useEffect(() => {
    if (checked <= array.length) {
      setTimeout(() => {
        setChecked((checked) => checked + 1);
      }, 1000);
    } else {
      setChecked(0);
    }
  }, [checked, setChecked, array.length]);

  return (
    <S.Container>
      {array.map((_, index) => (
        <S.Progress
          key={index}
          isChecked={index < checked}
          width={100 / array.length}
        />
      ))}
    </S.Container>
  );
}
