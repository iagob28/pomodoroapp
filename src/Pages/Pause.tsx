import { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import { Header } from "../components/Header/Header";

export function Pause() {
  const minutes = "05";
  const seconds = "00";
  const [sessions, setSessions] = useState(2);
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[70vh] w-auto gap-16">
        <div className="flex justify-center items-center h-80 w-80 bg-slate-600 rounded-full shadow-lg shadow-slate-600">
          <span className="flex justify-center items-center h-60 w-60 bg-transparent rounded-full border-4 border-yellow-500 ">
            <p className="text-6xl font-bold text-slate-300">
              {minutes}:{seconds}
            </p>
          </span>
        </div>
        <span className="bg-transparent flex flex-col h-60 justify-between items-center">
          <div className="gap-4 flex flex-col items-center">
            <h1 className="font-bold text-6xl text-yellow-500">Pausa</h1>
            <span className="flex gap-5">
              <div className="bg-yellow-500 h-5 w-5 rounded-full"></div>
              {sessions >= 2 ? (
                <div className="bg-yellow-500 h-5 w-5 rounded-full"></div>
              ) : (
                <div className="bg-slate-500 h-5 w-5 rounded-full"></div>
              )}
              {sessions === 3 ? (
                <div className="bg-yellow-500 h-5 w-5 rounded-full"></div>
              ) : (
                <div className="bg-slate-500 h-5 w-5 rounded-full"></div>
              )}
            </span>
          </div>
          <button className="flex bg-slate-500 rounded-md h-20 w-20 text-6xl shadow-md hover:bg-slate-600 text-slate-300 items-center justify-center">
            <GoTriangleRight />
          </button>
        </span>
      </div>
    </>
  );
}
