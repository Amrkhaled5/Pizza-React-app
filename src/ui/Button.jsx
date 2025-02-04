import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type }) {
  const base = `bg-yellow-400  font-semibold uppercase text-sm
             text-stone-800 inline-block tracking-wide rounded-full
              hover:bg-yellow-300 transation-colors duration-300
              focus:outline-none foucs:ring-2 focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed
              `;
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "py-2 md:px-5 md:py-2.5 text-xs",
    secondary: `font-semibold uppercase border-2 border-stone-400 text-sm
             text-stone-800 inline-block tracking-wide rounded-full
              hover:bg-stone-300 transation-colors duration-300
              hover:text-stone-800 foucs:text-stone-800 
              focus:outline-none foucs:ring focus:ring-stone-400 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed
              px-4 py-2.5 md:px-6 md:py-3.5
              `,
  };

  if (to)
    return (
      <Link className={styles[type]} tp={to}>
        {children}
      </Link>
    );
  return (
    <div disabled={disabled} className={styles[type]}>
      {children}
    </div>
  );
}

export default Button;
