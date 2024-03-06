import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center text-center justify-center rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-300 px-4 text-sm transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
