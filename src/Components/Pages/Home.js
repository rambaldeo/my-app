import React from "react";
import '../../App.js';
import '../../index.css';
import ProfilePic from '../Photos/IMG_7369.jpeg';


    function Home() {
        return (
            <div class="Body">
            <div id="row" class="content">
                <div class="box left">
                    <br></br>
                <p id="Intro">
	            Growing up, I've always been fancinated by computers and wanted to 
                 create my own application in the future. I was never the smartest 
                kid in the room, but I try to be as observant as possible to notice 
                the little details. Entering high school, I knew I wanted to be 
                involved somewhere in the computer science field and I decided to 
                go with software development. That was my goal in highschool, to 
                get accepted into a university for a software related program 
                because everything is going to involve software somehow and also, 
                because I want to create my own application.
	</p>
                </div>
                <div class="box right">
                    
                    
                       <img src={ProfilePic} id="profile" alt="Firstimage" className="center"/>
                    
                </div>
                <div class="box">
                    <p>
                        Going to be editing this more as I learn. Having this will be my introduction page and
                        I am going to attempt at putting a video as a background for my pages
                    </p>
                </div>
            </div>

            </div>
            
        );
    }
    export default Home;