import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 cursor-pointer focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-4 text-sm";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full bg-transparent border-stone-300 border-2 px-4 py-3 font-semibold tracking-wide text-stone-400 uppercase transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-4 px-4 py-2.5 md:px-6 md:py-3.5 cursor-pointer text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
