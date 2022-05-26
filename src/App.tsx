import { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import "./input.css";

function App() {
  const [time, setTime] = useState(25);
  const [pause, setPause] = useState(5);
  const [sessions, setSessions] = useState(3);

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
        <Button>Continuar</Button>
      </div>
    </>
  );
}

export default App;
