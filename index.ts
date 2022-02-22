const OTP = Math.round(Math.random()*100000);
let p = document.createElement("div");
p.id = OTP.toString();
document.body.appendChild(p);
p.innerHTML = OTP.toString()
p.style.fontSize="60px";



