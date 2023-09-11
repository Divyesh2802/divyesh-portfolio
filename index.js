// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

var tls = document.getElementsByClassName('tab-links');
var tcs = document.getElementsByClassName('tab-contents');

function opentab(tname) {
  for(tl of tls) {
    tl.classList.remove("active-link");
  }
  for(tc of tcs) {
    tc.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tname).classList.add("active-tab");
}

// var smenu = document.getElementById('sidemenu');
//
// function openmenu() {
//   smenu.style.right = "0";
// }
//
// function closemenu() {
//   smenu.style.right = "-200px";
// }
// not working in external javascript

// for creating typing effect
document.addEventListener('DOMContentLoaded', function() {
  const role = document.getElementById("role");
  const txt = 'Programmer and Web Developer';
  let i = 0;
  let speed = 450;

  function typeWriter() {
    if (i < txt.length) {
      role.textContent += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
