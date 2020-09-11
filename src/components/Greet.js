import React, { useState } from 'react';
import './Timer.css'

// function Greet(){
//     return <h1>Hello Mason</h1>
// }

const Greet = () => {

    let time = new Date().toLocaleTimeString();
    
    const [currentTime, setCurrentTime] = useState(time);

    let date = new Date();
    let time_Hour = addZero(date.getHours().toString());
    let time_Min = addZero(date.getMinutes().toString());
    let time_Sec = addZero(date.getSeconds().toString());

    const timeSpan = () => {

        let CurrentTime = new Date().getHours();
        if (CurrentTime >= 12) {
            document.getElementById("TimeSpan").innerHTML = " PM";
        }
        else {
            document.getElementById("TimeSpan").innerHTML = " AM";
        }
    }

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        time_Hour = addZero(date.getHours());
        time_Min = addZero(date.getMinutes());
        time_Sec = addZero(date.getSeconds());
        setCurrentTime(time);
    }

    var myVar = setInterval(UpdateTime, 1000);

    setTimeout(timeSpan, 100);

    const ShowInput = () => {
        document.getElementById("hour").style.display = "inline";
        document.getElementById("hideP").style.display = "none";
        document.getElementById("sec").innerText = ": " + time_Sec;
        clearInterval(myVar);
    }

    const resume = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            document.getElementById("hour").style.display = "none";
            document.getElementById("hideP").style.display = "inline";
            window.location.reload(false);
        }
    }

    const ShowInput1 = () => {
        document.getElementById("mins").style.display = "inline";
        document.getElementById("hideM").style.display = "none";
        document.getElementById("sec").innerText = ": " + time_Sec;
        clearInterval(myVar);
    }

    const resume1 = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            document.getElementById("mins").style.display = "none";
            document.getElementById("hideM").style.display = "inline";
            window.location.reload(false);
        }
    }

    const ShowInput2 = () => {
        document.getElementById("hideS").style.display = "inline";
        document.getElementById("sec").style.display = "none";
        clearInterval(myVar);
    }

    const resume2 = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            document.getElementById("sec").style.display = "none";
            document.getElementById("hideS").style.display = "inline";
            window.location.reload(false);
        }

    }

    return (
        <div className="Outer_Container">
            <div className="Timer_Container">
                <div className="Timer_Header">
                    <p>London Clock</p>
                </div>
                <div className="Clock">
                    <div className="Clock_inline">
                        <div className="Clock_Space" onClick={ShowInput}>
                            <p id="hideP">{time_Hour}</p>
                            <input id="hour" type='text' style={{ display: "none" }} maxLength="2" size="2" onKeyPress={resume}></input>
                        </div>
                        <div className="Clock_Space" onClick={ShowInput1}>
                            <p id="hideM">: {time_Min}</p>
                            <input id="mins" type='text' style={{ display: "none" }} maxLength="2" size="2" onKeyPress={resume1}></input>
                        </div>
                        <div className="Clock_Space" onClick={ShowInput2}>
                            <p id="sec">: {time_Sec}</p>
                            <input id="hideS" type='text' style={{ display: "none" }} maxLength="2" size="2" onKeyPress={resume2}></input>
                        </div>
                        <div className="Clock_Space">
                            <p id="TimeSpan">{timeSpan}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greet