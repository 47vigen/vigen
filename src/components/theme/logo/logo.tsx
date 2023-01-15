import clsx from "clsx";
import styles from "./logo.module.css";

export const Logo: React.FC = () => {
  return (
    <>
      {/* <LogoAdornment height={12} /> */}
      <span
        className={clsx(
          styles.logo,
          "mx-2 hidden select-none text-2xl font-extrabold md:inline"
        )}
      >
        Vigen
      </span>
    </>
  );
};
