import { Link } from "react-router-dom";

type ButtonPropsType = {
  children: any;
  disabled?: boolean;
  to?: string;
  type: ButtonTypes;
  onClick?: () => void;
};

type ButtonTypes = "primary" | "small" | "secondary" | "round";

export const Button = ({
  children,
  disabled,
  to,
  type,
  onClick,
}: ButtonPropsType) => {
  const base =
    "text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      base +
      " px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 bg-transparent text-stone-400 focus:ring-stone-200 focus:text-stone-800 hover:text-stone-800  focus:bg-stone-300 hover:bg-stone-300",
    round: base +  " px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};
