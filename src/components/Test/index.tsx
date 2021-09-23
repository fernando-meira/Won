import * as S from './styles';

export default function Test() {
  function getRandom(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(getRandom(-9, 9));
  }

  return (
    <S.Container>
      {array.map((arr, index) => (
        <S.Progress width={100 / array.length} isChecked key={index} />
      ))}
    </S.Container>
  );
}
