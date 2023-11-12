import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, link, className }) => {
  return (
    <Link to={link}>
      <button className={`btn-shadow rounded-[5px] sm:rounded-[10px] bg-primary-500 px-[22px] py-[6px] font-semibold text-white sm:py-[9px] sm:px-[34px] ${className}`}>
        {children}
      </button>
    </Link>
  );
}

export default Button;