import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Display } from "../components/Display";

export function Home() {
  const [time, setTime] = useState(25);
  const [pause, setPause] = useState(5);
  const [sessions, setSessions] = useState(3);
  const history = useNavigate();

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

  function handleContinueButton() {
    history("/timer");
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
