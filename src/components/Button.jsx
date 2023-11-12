import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, link, className }) => {
  return (
    <Link to={link}>
      <button
        className={`btn-shadow bg-primary-500 rounded-[5px] px-[22px] py-[6px] font-semibold text-white sm:rounded-[10px] sm:px-[34px] sm:py-[9px] ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
