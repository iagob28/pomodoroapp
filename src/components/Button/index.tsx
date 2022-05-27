interface ButtonProps {
  children: string;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className="w-[300px] h-16 bg-slate-500 rounded-lg text-4xl font-bold text-slate-300 drop-shadow-md hover:bg-slate-600">
        {children}
      </button>
    </>
  );
}
