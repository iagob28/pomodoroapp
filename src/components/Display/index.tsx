import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

interface DisplayProps {
  number: number;
  children: string;
  changeNumber: React.Dispatch<React.SetStateAction<number>>;
}

export function Display({ number, children, changeNumber }: DisplayProps) {
  
  function handleIncreaseValue() {
    changeNumber((state) => state + 1);
  }
  function handleDecreaseValue() {
    changeNumber((state) => state - 1);
  }

  return (
    <>
      <span className="flex flex-col items-center">
        <div className="flex gap-4">
          <span className="flex flex-col justify-around text-5xl text-slate-400">
            <button
              className="hover:text-slate-500"
              onClick={handleIncreaseValue}
            >
              <FaArrowAltCircleUp />
            </button>
            <button
              className="hover:text-slate-500"
              onClick={handleDecreaseValue}
            >
              <FaArrowAltCircleDown />
            </button>
          </span>

          <div className="w-48 h-40 rounded-lg bg-slate-500 flex items-center justify-center drop-shadow-lg">
            <h2 className="text-8xl font-bold text-slate-300">{number}</h2>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-300 mt-2 ml-14">
          {children}
        </h3>
      </span>
    </>
  );
}
