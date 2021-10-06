import { useState, useEffect, useMemo } from 'react';
import { FaStop, FaPlay, FaPause } from 'react-icons/fa';

import formatTime from '~/utils/FormatTime';

import * as S from './styles';

const StopWatch = () => {
  const [play, setPlay] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
    setPlay(false);
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

  const renderButton = useMemo(() => {
    if (play) {
      return (
        <>
          <S.Button onClick={() => setPlay(false)}>
            <FaPause />
          </S.Button>

          <S.Button onClick={reset}>
            <FaStop />
          </S.Button>
        </>
      );
    }

    return (
      <S.Button onClick={() => setPlay(true)}>
        <FaPlay />
      </S.Button>
    );
  }, [play]);

  return (
    <S.Container>
      <S.ButtonWrapper>{renderButton}</S.ButtonWrapper>

      <S.TimerWrapper>
        <S.Timer>{`${formatTime(minutes)}:${formatTime(seconds)}`}</S.Timer>
      </S.TimerWrapper>
    </S.Container>
  );
};

export { StopWatch };
