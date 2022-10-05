btnMode = document.querySelector("#btnMode")


if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }



/*let timer = document.querySelector("#timer");
let btnStart = document.querySelector("#btnStart");
let btnStop = document.querySelector("#btnStop");
let timeStart = document.querySelector("#timeStart");
let timeStop = document.querySelector("#timeStop");
let totalTime = document.querySelector("#totalTime"); */

let timeStart = new Date()

console.log(timeStart);

function hi() {
    alert("hi");
    //document.getElementById("timer").innerHTML = "Changed Link by JS";
    if (typeof window !== 'undefined') {
      document.querySelector("#timer").innerHTML = 'You are on the browser'
    } else {
      document.getElementById("timer").innerHTML = 'You are on the server'
    }
}

