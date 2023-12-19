import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";

function Header() {
  // const navigate = useNavigation();
  const navigateTo = React.useCallback(
    (path = "/") => {
      // navigate(path);
    },
    []
  );
  return (
    <div className="px-16 navbar bg-base-100 header">
      <div className="flex-1">
        {/* <Link to={"/"}> */}
        <a href="/" onClick={()=>navigateTo('/')} className="btn btn-ghost text-xl">
          Logo
        </a>
        {/* </Link> */}
      </div>
      <div className="flex-none">
        {/* <Link to={"/"}> */}
        <button onClick={()=>navigateTo('/')} className="btn btn-ghost">Home</button>
        {/* </Link> */}
        {/* <Link to={"/stared"}> */}
        <a href="/stared"  className="btn btn-ghost" onClick={()=>navigateTo('/stared')}>
          Product Listing
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Header;
