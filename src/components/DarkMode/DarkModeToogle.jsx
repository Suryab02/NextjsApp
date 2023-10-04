"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Styles from "./dark.module.css";
import React, { useContext } from "react";

function DarkModeToogle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={Styles.conatiner} onClick={toggle}>
      <div className={Styles.icon}>🔆</div>
      <div className={Styles.icon}>🌙</div>

      <div
        className={Styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}

export default DarkModeToogle;
