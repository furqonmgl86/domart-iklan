// RUNNING TEXT

let style = document.createElement("style");
let position = "right";

style.innerHTML = `
@keyframes my-animation{
  0%{${position} : -${document.querySelector(".text").offsetWidth + 10}px;}
  100%{${position}: 100%;}
}
`;

document.head.append(style);

// AKHIR RUNNING TEXT

// JAM
let sekarang = new Date();
let hari = sekarang.getDay();

console.log(sekarang);
console.log(hari);

function updateClock() {
  let now = new Date();
  let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n) return n;
  };

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
  let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(5), min.pad(3), sec.pad(4), pe];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// AKHIR JAM
