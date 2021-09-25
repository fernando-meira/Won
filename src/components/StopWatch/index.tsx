import { useState, useEffect } from 'react';
import { FaStop, FaPlay } from 'react-icons/fa';

import formatTime from '~/utils/FormatTime';

import * as S from './styles';

export default function StopWatch() {
  const [play, setPlay] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
    setPlay(false);
  };

  const handlePlay = () => {
    if (play) {
      return reset();
    }

    return setPlay(true);
  };

  useEffect(() => {
    if (play) {
      const timer = () => {
        if (seconds < 59) {
          setSeconds((oldState) => oldState + 1);
        }

        if (seconds >= 59) {
          setSeconds(0);
          setMinutes((oldState) => oldState + 1);
        }

        if (minutes === 59 && seconds >= 59) {
          reset();
        }
      };

      const timerId = setInterval(timer, 1000);
      return () => clearInterval(timerId);
    }
  }, [play, seconds, minutes]);

  return (
    <S.TimerWrapper>
      <S.Button onClick={handlePlay}>{play ? <FaStop /> : <FaPlay />}</S.Button>

      <S.Timer>{`${formatTime(minutes)}:${formatTime(seconds)}`}</S.Timer>
    </S.TimerWrapper>
  );
}
