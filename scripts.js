"use strict";

const canvas = document.getElementById("canvas");


const setWidth = (e, w=false) => {
    let val = w ? `${w}px` : `${e.target.value}px`;   
    // console.log(val); 
    canvas.style.minWidth = val;
    canvas.style.maxWidth = val;
}

const setHeight = (e, h=false) => {
    let val = h ? `${h}px` : `${e.target.value}px`;
    // console.log(val);
    canvas.style.minHeight = val;
    canvas.style.maxHeight = val;
}
    
document.getElementById("device-width").addEventListener("change", setWidth, false);
document.getElementById("device-height").addEventListener("change", setHeight, false);


const phone = document.querySelector("[title='phone']");
const tablet = document.querySelector("[title='tablet']");
const desktop = document.querySelector("[title='desktop']");

const phone_default_size = ["360", "640"];
const tablet_default_size = ["720", "1280"];
const desktop_default_size = ["1366", "768"];

const clearDisplaySize = (w, h) => {
    document.getElementById("device-width").value = w;
    document.getElementById("device-height").value = h;
}

phone.addEventListener("click", () => {
    setWidth(null, phone_default_size[0]);
    setHeight(null, phone_default_size[1]);
    clearDisplaySize(phone_default_size[0], phone_default_size[1]);
}, false);


tablet.addEventListener("click", () => {
    setWidth(null, tablet_default_size[0]);
    setHeight(null, tablet_default_size[1]);
    clearDisplaySize(tablet_default_size[0], tablet_default_size[1]);
}, false);

desktop.addEventListener("click", () => {
    setWidth(null, desktop_default_size[0]);
    setHeight(null, desktop_default_size[1]);
    clearDisplaySize(desktop_default_size[0], desktop_default_size[1]);
}, false);










