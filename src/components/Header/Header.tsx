import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function Header() {
  const history = useNavigate();

  function handleHomeButton() {
    history("/");
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
