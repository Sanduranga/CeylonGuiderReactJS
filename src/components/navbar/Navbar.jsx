import React, { useState } from "react";
import "./Navbar.css";
import "../pages/Home.css";
import "../pages/Trip.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nn, setNn] = useState(0);

  function funca() {
    if (nn == 0) {
      document.getElementById("container").style.backgroundColor = "#272525";
      document.getElementById("transf").style.translate = "21px";
      document.getElementById("container").style.color = "#c5b7b7";
      setNn(1);
    } else if (nn == 1) {
      document.getElementById("container").style.backgroundColor = "#c7c0c0";
      document.getElementById("transf").style.translate = "0px";
      document.getElementById("container").style.color = "black";
      setNn(0);
    }
  }

  return (
    <header className="header">
      <div className="main_header">
        <div className="section_a">
          <h2 className="pseudo">
            <Link to="./">Ceylon Guider</Link>
          </h2>
        </div>
        <div className="section_b">
          <ul>
            <li className="items">
              Hotels
              <div className="itemdrop">
                <a
                  href="https://www.tangerinehotels.com/tangerinebeachhotel/"
                  target="blank"
                >
                  Tangerine beech hotel
                </a>
                <a href="https://www.bluewatersrilanka.com/" target="blank">
                  Bluewater hotel
                </a>
                <a href="https://www.hilton.com/en/" target="blank">
                  Hilton
                </a>
              </div>
            </li>
            <li className="items">
              Restaurents
              <div className="itemdrop">
                <a
                  href="https://curry-leaves-restaurant-and-pub.business.site/?utm_source=gmb&utm_medium=referral"
                  target="blank"
                >
                  Curry Leaf
                </a>
                <a href="https://www.kingofthemambo.com/" target="blank">
                  King of the Mambo
                </a>
                <a
                  href="https://www.thekingsburyhotel.com/dining/yue-chuan.html"
                  target="blank"
                >
                  Yue Chuan
                </a>
              </div>
            </li>
            <li className="items">
              Health & Care
              <div className="itemdrop">
                <a href="https://www.nawaloka.com/" target="blank">
                  Nawaloka Hospital
                </a>
                <a href="https://asirihealth.com/" target="blank">
                  Asiri Hospital
                </a>
                <a href="https://www.durdans.com/" target="blank">
                  Durdans Hospital
                </a>
              </div>
            </li>
            <li className="items">
              Airports
              <div className="itemdrop">
                <a href="https://www.airport.lk/" target="blank">
                  Bandaranayake International airport
                </a>
                <a href="https://www.airport.lk/mria/index" target="blank">
                  Mattala Rajapaksha International
                </a>
                <a href="https://www.airport.lk/jaf/index" target="blank">
                  Jafna International
                </a>
              </div>
            </li>
            <li>Places</li>
          </ul>
        </div>
        <div className="section_c">
          <ul>
            <div id="darkbtn" onClick={funca}>
              <div id="transf">
                <span id="sun"></span>
              </div>
              <div className="moon">
                <span id="moon"></span>
              </div>
            </div>
            <li className="partsA">
              <Link to="./career">Career</Link>
            </li>
            <li className="partsA">
              <Link href="#">About Us</Link>
            </li>
            <li className="partsB">
              <Link href="#">Log In</Link>
            </li>
            <li className="partsB">
              <Link href="#">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
