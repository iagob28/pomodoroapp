import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Display } from "../components/Display";
import { useTimer } from "../hooks/useTimer";

export function Home() {
  const {
    sessions,
    setSessions,
    time,
    setTime,
    pause,
    setPause,
    changeIsActive,
  } = useTimer();

  const history = useNavigate();

  function handleContinueButton() {
    history("/timer");
    changeIsActive();
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className=" text-slate-300 font-bold text-6xl mt-4">Pomodoro</h1>
        <div className="flex w-[1000px] justify-between">
          <Display number={time} changeNumber={setTime}>
            Trabalho
          </Display>
          <Display number={pause} changeNumber={setPause}>
            Pausa
          </Display>
          <Display number={sessions} changeNumber={setSessions}>
            Sessões
          </Display>
        </div>
        <Button onClick={handleContinueButton}>Continuar</Button>
      </div>
    </>
  );
}
