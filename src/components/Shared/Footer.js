import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
//   const { user } = useContext(AuthContext);
  return (
    <div className="footer p-4 drop-shadow-sm bg-slate-100">
      <div className="container text-center">
        <Link className="font-bold text-xl " href="/">
          Social <span className="text-[#D53F8C]">Activity</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
