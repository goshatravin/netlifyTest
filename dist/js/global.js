/* In this file, put all the JS functions needed globally */
// As a first step, we will put everything globally, and later divide into pages and components - BMK

// $(document).ready(function(){
//   AOS.init({
//     duration: 1200,
//   });
// })

// NAVBAR old design
// document.getElementById('nav-icon3').onclick = function() {
//     if(document.getElementById('nav-icon3').classList.contains('open')) {
//         document.querySelector('.header-container .mobile-header .right .menu').classList.remove('opened');
//         document.getElementById('nav-icon3').classList.remove('open');
//     } else {
//         document.querySelector('.header-container .mobile-header .right .menu').classList.add('opened');
//         document.getElementById('nav-icon3').classList.add('open');
//     }
// };
// END NAVBAR

// NAVBAR

// END NAVBAR

// INTERCOM
window.intercomSettings = {
  app_id: "pzs0slby"
};
(function() {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic("reattach_activator");
    ic("update", intercomSettings);
  } else {
    var d = document;
    var i = function() {
      i.c(arguments);
    };
    i.q = [];
    i.c = function(args) {
      i.q.push(args);
    };
    w.Intercom = i;
    function l() {
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.intercom.io/widget/pzs0slby";
      var x = d.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
    if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
  }
})();

//ACCESSIBILITY WIDGET EQUALWEB
window.interdeal = {
  sitekey: "14130ff047b67fa38725efe4b633587d",
  Position: "Left",
  Menulang: "EN",
  domains: {
    js: "https://cdn.equalweb.com/",
    acc: "https://access.equalweb.com/"
  },
  btnStyle: {
    vPosition: ["80%", "5%"], // Y-axis position of the widget, left side is reffering to the desktop version, the right side is for mobile.
    scale: ["0.7", "0.6"], // Size of the widget, left side is reffering to the desktop version, the right side is for mobile.
    icon: {
      type: 1,
      shape: "circle",
      outline: false
    },
    color: {
      main: "#171d2d", // main color of the widget
      second: "#ffffff" // second color, make sure that the colors are well contrasted.
    }
  }
};
(function(doc, head, body) {
  var coreCall = doc.createElement("script");
  coreCall.src = "https://cdn.equalweb.com/core/2.1.8/accessibility.js";
  coreCall.defer = true;
  coreCall.integrity =
    "sha512-tA0/58RaxqQMY+p5wW7LgZM88ckav7DG0iT6VEUqGVyFvH6PcFkmMVuWQgqftDp3BYYHxjeYTAX14Ct7DS/fRQ==";
  coreCall.crossOrigin = "anonymous";
  coreCall.setAttribute("data-cfasync", true);
  body ? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
