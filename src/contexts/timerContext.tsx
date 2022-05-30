import { createContext, useEffect, useState } from "react";

import differenceInSeconds from "date-fns/differenceInSeconds";

type TimerContextType = {
  seconds: number;
  changeSeconds: Function;
  isActive: boolean;
  changeIsActive: Function;
  time: number;
  pause: number;
  sessions: number;
  pauseSeconds: number;
  setPauseSeconds: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setPause: React.Dispatch<React.SetStateAction<number>>;
  setSessions: React.Dispatch<React.SetStateAction<number>>;
};

type propsType = {
  children?: JSX.Element;
};

export const TimerContext = createContext({} as TimerContextType);
let startTime: Date;
let timeout: number;

export function TimerContextProvider(props: propsType) {
  const [time, setTime] = useState(25);
  const [pause, setPause] = useState(5);
  const [sessions, setSessions] = useState(3);
  const [seconds, setSeconds] = useState(time * 60); //mutiplies by 60 to transform in seconds
  const [pauseSeconds, setPauseSeconds] = useState(pause * 60); //mutiplies by 60 to transform in seconds
  const [isActive, setIsActive] = useState(false);

  if (sessions > 3) {
    setSessions(3);
  }
  if (time > 40) {
    setTime(40);
  }
  if (pause > 10) {
    setPause(10);
  }
  if (sessions < 0) {
    setSessions(0);
  }
  if (time < 0) {
    setTime(0);
  }
  if (pause < 0) {
    setPause(0);
  }

  function changeIsActive() {
    setIsActive(!isActive);
    startTime = new Date();
  }

  function changeSeconds(sec: number) {
    setSeconds(sec);
  }

  useEffect(() => {
    if (isActive && seconds > 0) {
      timeout = setTimeout(() => {
        setSeconds(time * 60 - differenceInSeconds(new Date(), startTime));
      }, 1000);
    } else {
      clearTimeout(timeout);
      if (seconds === 0) {
        setSeconds(time * 60);
      }
    }
  }, [seconds, isActive]);

  useEffect(() => {
    setSeconds(time * 60);
    setPauseSeconds(pause * 60);
  }, [time, pause]);

  return (
    <TimerContext.Provider
      value={{
        seconds,
        changeSeconds,
        isActive,
        changeIsActive,
        pause,
        sessions,
        time,
        setPause,
        setSessions,
        setTime,
        pauseSeconds,
        setPauseSeconds,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
}
