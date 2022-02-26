import { StyledEngineProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterbyac,
  filterbycancellation,
  filterbyiron,
  filterbykitchen,
  filterbyparking,
  filterbywifi,
  filterbywm
} from "../Redux/action";
import { PlaceTypeFilter } from "./PlaceTypeFilter";
import { Price } from "./PriceFilter";
import { PriceRanger } from "./ProceRanger";
import { Search } from "./Search";

export const ProductHead = () => {
  const [showprice, setShowPrice] = useState(false);
  const [showplace, setPlace] = useState(false);
  const dispatch = useDispatch();
  const isPlace = () => {
    if (showplace) {
      setPlace(false);
    } else {
      setPlace(true);
    }
  };
  useEffect(() => {
    const isPrice = () => {
      phanndel();
    };
  }, [showprice, setShowPrice]);

  const phanndel = () => {
    if (showprice) {
      setShowPrice(false);
    } else {
      setShowPrice(true);
    }
  };
  const [showsearch, setSearchshow] = useState(false);
  const showSearch = () => {
    if (showsearch) {
      setSearchshow(false);
    } else {
      setSearchshow(true);
    }
  };
  return (
    <div>
      {showsearch ? <Search props={setSearchshow} /> : null}
      <div className="head-section">
        <div className="container-top">
          <div className="header-section-left">
            <svg width="102" height="32" fill="currentcolor">
              <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"></path>
            </svg>
          </div>
          <div>
            <div className="header-section-center">
              {/* Dyanmic */}
              <div onClick={showSearch} className="location-div">
                Mumbai
              </div>
              <span className="text-seperator">|</span>
              <div className="booking-date-div">9-10 Mar</div>
              <span className="text-seperator">|</span>
              <div className="addguest-main">
                <div className="addguest-text">Add guests</div>
                <div className="addguest-div">
                  <svg
                    className="addguest-svg"
                    viewBox="0 0 50 32"
                    xmlns="http://www.w3.org/"
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="header-section-right">
            <button className="become-a-host">Become a host</button>
            <div className="globe-svg-div">
              <svg
                className="globe-svg"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
              </svg>
            </div>
            <button className="header-section-right-profile">
              <svg
                className="profile-svg1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g fill="none" fill-rule="nonzero">
                  <path d="m2 16h28"></path>
                  <path d="m2 24h28"></path>
                  <path d="m2 8h28"></path>
                </g>
              </svg>
              <img
                className="profile-img _1wzp0xs"
                src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                alt=""
              />
            </button>
          </div>
        </div>

        {/* sorting and filer */}

        <div className="sorting-filter-main-div">
          {/* <img
            className="down-arrow"
            src=""
            alt=""
          /> */}
          <button onClick={phanndel} className="filter-by-price filter-btn">
            Price
          </button>
          <button onClick={isPlace} className="filter-by-type-place filter-btn">
            Type of place
          </button>
          <button
            onClick={() => {
              dispatch(filterbycancellation());
            }}
            className="filter-by-cancellation  filter-btn"
          >
            Free cancellation
          </button>
          <button
            onClick={() => {
              dispatch(filterbywifi());
            }}
            className="filter-by-wifi  filter-btn"
          >
            Wifi
          </button>
          <button
            onClick={() => {
              dispatch(filterbykitchen());
            }}
            className="filter-by-kitchen  filter-btn"
          >
            Kitchen
          </button>
          <button
            onClick={() => {
              dispatch(filterbyac());
            }}
            className="filter-by-ac  filter-btn"
          >
            Air conditioning
          </button>
          <button
            onClick={() => {
              dispatch(filterbywm());
            }}
            className="filter-by-washingmachine  filter-btn"
          >
            Washing Machine
          </button>
          <button
            onClick={() => {
              dispatch(filterbyiron());
            }}
            className="filter-by-iron  filter-btn"
          >
            Iron
          </button>
          <button
            onClick={() => {
              dispatch(filterbyparking());
            }}
            className="filter-by-parking  filter-btn"
          >
            Free parking
          </button>
          <button className="filter-by-advancefilters filter-btn">
            Filters
          </button>
        </div>
        <div className="hide-Price">
          {showprice ? (
            // <Price
            //   prop={showprice}
            //   setprop={setShowPrice}
            //   min={750}
            //   max={50000}
            //   onChange={({ min, max }) =>
            //     console.log(`min = ${min}, max = ${max}`)
            //   }
            // />
            <PriceRanger />
          ) : null}
        </div>
        <div className="place-filter-div">
          {showplace ? <PlaceTypeFilter /> : null}
        </div>
      </div>
    </div>
  );
};
