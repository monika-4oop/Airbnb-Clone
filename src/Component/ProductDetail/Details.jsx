import React from "react";

import { useState} from "react";
import {useParams} from 'react-router-dom'
import "./Details.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyIcon from "@mui/icons-material/Key";
import BedIcon from "@mui/icons-material/Bed";
import SoupKitchenSharpIcon from "@mui/icons-material/SoupKitchenSharp";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SubtitlesOffOutlinedIcon from "@mui/icons-material/SubtitlesOffOutlined";
import PortableWifiOffIcon from "@mui/icons-material/PortableWifiOff";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DeckIcon from "@mui/icons-material/Deck";
import BalconyIcon from "@mui/icons-material/Balcony";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import StarIcon from "@mui/icons-material/Star";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
//import StaticDatePickerLandscape from './Calender';
import DateRangePickerComponent from "./Calender";
import { useDispatch, useSelector } from "react-redux";
import { getproductbyid } from "../../Redux/action";
import Banner from './Banner'
//import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
//import { DateRangePicker} from 'react-date-range';

export function Details() {
  const [fix, setFix] = useState(false);

  const {id}=useParams()
  const dispatch=useDispatch()
  dispatch(getproductbyid(id))
  console.log(id)

  const {data}=useSelector(store=>store.FilterReducer)
   console.log(data[0].img)
  // const makeFix = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 600 && window.scrollY <= 1500) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // };

  // window.addEventListener("scroll", makeFix);

  return (
    <div className="container---">
      <Banner></Banner>
      <div className="container1">
        <h2 className="l1">
         { data[0].name}
          <img
            alt=""
            className="subrat"
            src={`${data[0].img[0]}`}
          />
        </h2>
        <h6 className="l2">1 guest. 1 bedroom1 bed. 1 private bathroom</h6>
        <div className="example"></div>
      </div>
      <div className="container2">
        <div className={fix ? "fixbox fixed" : "fixbox"}>
          <div className="top">
            <div className="left">
              <p>₹{data[0].price} / night</p>
            </div>

            <div className="right">
              <p>
                <StarIcon /> {data[0].rating} Reviews
              </p>
            </div>
          </div>
          <div className="middle">
            <div className="middle-top">
              <div className="check-middle chechin">
                CheckIn <PlaylistAddCheckIcon />
              </div>
              <div className="check-middle">
                CheckOut <PointOfSaleIcon />
              </div>
            </div>
            <div className="middle-bottom">Guest</div>
          </div>
          <div className="top _btn">
            <span>Check availability</span>
          </div>
        </div>
      </div>

      {/* <div>
                  <p>5.0  <span>15 review</span> <span>Superhost</span> . <span>Puri, Odisha, India</span></p>
              </div> */}
      <div className="l">
        <h6>
          {" "}
          <PermIdentityIcon />
          Hoisted by{ data[0].hostedby}
        </h6>
        <p>
         {data[0].description}
        </p>

        <div className="l3">
          <h6>
            <LocationOnIcon /> Great location
          </h6>
          <p>100% of recent guests gave the location a 5-star rating.</p>
        </div>
        <div className="l4">
          <h6>
            <KeyIcon /> Great check-in experience
          </h6>
          <p>
            100% of recent guests gave the check-in process a 5-star rating.
          </p>
        </div>
        <div className="example"></div>

        <div className="l5">
          <p>
            Lord Jagannath temple and Sea beach both are at walkable distance.
            Home food is available.
          </p>
        </div>
        <div className="l6">
          <h6>Guest access</h6>
          <p>{data[0].name}</p>
        </div>
        <div className="example"></div>
      </div>
      <div className="l7">
        <h4>Where you'll sleep</h4>
        <div className="broom">
          <p className="bedicon">
            {" "}
            <BedIcon />
          </p>
          <h6 className="bed">Bedroom</h6>
          <p className="beddouble">1 double bed</p>
        </div>
      </div>
      <div className="example1"></div>
      <div className="l8">
        <h5>What this place offers</h5>
        <div className="side">
          <div className="s1">
            <p>
              <SoupKitchenSharpIcon /> Kitchen
            </p>
            <p>
              <DirectionsCarOutlinedIcon /> Free parking on premises
            </p>
            <p>
              <EvStationOutlinedIcon /> Ev Charger
            </p>
            <p>
              <AcUnitOutlinedIcon /> Air conditioning
            </p>
            <p>
              <SubtitlesOffOutlinedIcon /> Carbon monoxide alarm
            </p>
          </div>
          <div className="s2">
            <p>
              <PortableWifiOffIcon /> Wifi
            </p>
            <p>
              <DirectionsCarOutlinedIcon /> TV with cable/satellite
            </p>
            <p>
              <BalconyIcon /> Private patio or balcony
            </p>
            <p>
              <DeckIcon /> High chair
            </p>
            <p>
              <PrivacyTipIcon /> Security cameras on property
            </p>
          </div>
        </div>
        <div className="amiiti">
          <p>Show all 31 amenities</p>
        </div>

        <div className="cal">
          <h4>Select check-in date</h4>
          <p>Add your travel dates for exact pricing</p>
          <DateRangePickerComponent />
        </div>
        <div className="example2"></div>
        <div className="scal">
          <h4>
            {" "}
            <StarIcon /> 4.96 · 27 reviews
          </h4>{" "}
        </div>
        <div className="scale">
          <span>
            <div className="scale1">
              <div className="s1">
                <span className="a">Cleanliness</span>
                <span className="range">
                  <span className="rangescale" />
                  <br></br>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </div>

              <div className="s1">
                <span className="a">Communication</span>
                <span className="rangescale" />
                <br></br>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>

              <div className="s1">
                <span className="a">Check-in</span>
                <span className="rangescale" />
                <br></br>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </span>
          <span>
            <div className="scale2">
              <div className="s1">
                <span className="a">Accuracy</span>
                <span className="range">
                  <span className="rangescale" />
                  <br></br>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </div>

              <div className="s1">
                <span className="a">Location</span>
                <span className="rangescale" />
                <br></br>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>

              <div className="s1">
                <span className="a">Value</span>
                <span className="rangescale" />
                <br></br>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
