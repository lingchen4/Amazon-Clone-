import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./config";

function Header() {
  const [search, setSearch] = useState("");
  const [{ numberItem, user }] = useStateValue();
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    window.open(`https://www.amazon.ca/s?k=${search}`);
    setSearch("");
  };
  return (
    <nav className="header">
      <a href="https://clone-61582.web.app">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </a>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeypress}
        />
        <div onClick={handleSearch}>
          <SearchIcon className="header_searchIcon"></SearchIcon>
        </div>
      </div>

      <div className="headerNav">
        {/* First Link */}
        {user ? (
          <div className="header_option">
            <span className="header_optionLineOne">
              <strong>{user ? user : ""}</strong>
            </span>
            <span
              className="header_optionLineTwo"
              onClick={() => auth.signOut()}
            >
              Log Out
            </span>
          </div>
        ) : (
          <Link className="header_link" to="/login">
            <div className="header_option">
              <span className="header_optionLineOne">Hello</span>
              <span className="header_optionLineTwo">Sign in</span>
            </div>
          </Link>
        )}

        {/* Second Link */}
        <Link className="header_link" to="/order">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Order</span>
          </div>
        </Link>
        {/* Third Link */}
        <Link className="header_link" to="/prime">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* Fourth Link*/}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            {/* number items in bucket */}
            <span className="header_optionLineTwo header_basketCount">
              {numberItem}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
