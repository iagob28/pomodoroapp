import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";
import { Button } from "../Button";

export function Header() {
  const history = useNavigate();
  const {changeIsActive} = useTimer()

  function handleHomeButton() {
    history("/");
    changeIsActive()
  }
  return (
    <>
      <header className="flex justify-between items-center content-center w-auto h-auto">
        <h1 className="text-slate-300 font-bold text-6xl">Pomodoro</h1>
        <Button onClick={handleHomeButton}>Ínicio</Button>
      </header>
    </>
  );
}
