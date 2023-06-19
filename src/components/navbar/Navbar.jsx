import React, {useState} from 'react';
import './Navbar.css'
import '../pages/Home.css'

export default function Navbar() {

    const [nn, setNn] =  useState(0)

    function funca() {

        if(nn==0){
            document.getElementById("container").style.backgroundColor = "#272525";
            document.getElementById("transf").style.translate = "21px";
            document.getElementById("container").style.color = "#c5b7b7";
            setNn(1)
        }
            else if(nn==1){
            document.getElementById("container").style.backgroundColor = "hsla(206, 91%, 5%, 0.066)";
            document.getElementById("transf").style.translate = "0px";
            document.getElementById("container").style.color = "black";
            setNn(0)
        }  
    }

    
  return (
    <header className="header">
        <div className="main_header">
            <div className="section_a">
                <h2 className="pseudo">
                    <a href='./'>Ceylon Guider</a></h2> 
            </div>
            <div className="section_b">  
                <ul>
                    <li className="items">Hotels
                        <div className="itemdrop"> 
                            <a href="https://www.tangerinehotels.com/tangerinebeachhotel/" target="_blank">Tangerine beech hotel</a>
                            <a href="https://www.bluewatersrilanka.com/" target="_blank">Bluewater hotel</a>
                            <a href="#">Hilton</a>
                        </div>
                    </li>
                    <li className="items">Restaurents
                        <div className="itemdrop">
                            <a href="https://curry-leaves-restaurant-and-pub.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">Curry Leaf</a>
                            <a href="https://www.kingofthemambo.com/" target="_blank">King of the Mambo</a>
                            <a href="https://www.thekingsburyhotel.com/dining/yue-chuan.html" target="_blank">Yue Chuan</a>
                        </div>
                    </li>
                    <li className="items">Health & Care
                        <div className="itemdrop">
                            <a href="https://www.nawaloka.com/" target="_blank">Nawaloka Hospital</a>
                            <a href="https://asirihealth.com/" target="_blank">Asiri Hospital</a>
                            <a href="https://www.durdans.com/" target="_blank">Durdans Hospital</a>
                        </div>
                    </li>
                    <li className="items">Airports
                        <div className="itemdrop">
                            <a href="https://www.airport.lk/" target="_blank">Bandaranayake International airport</a>
                            <a href="https://www.airport.lk/mria/index" target="_blank">Mattala Rajapaksha International</a>
                            <a href="https://www.airport.lk/jaf/index" target="_blank">Jafna International</a>
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
                    <li className='partsA'>
                    <a href='./career'>Career</a>
                    </li>
                    <li className='partsA'>
                        <a href=''>About Us</a></li>
                    <li className='partsB'><a href=''>Log In</a></li>
                    <li className='partsB'><a href=''>Register</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
