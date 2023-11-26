const showBtn = document.querySelector(".btn-bars"),
  closeBtn = document.querySelector(".btn-close"),
  navMenu = document.querySelector(".navbar-collapse");
navbar = document.querySelector(".navbar");

showBtn.addEventListener("click", () => {
  navMenu.classList.add("showMenu");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("showMenu");
});

navMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navMenu.classList.remove("showMenu");
  }
});

// modal code

var setupModal = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var btns = document.querySelectorAll(".openModalBtn"); // Select multiple buttons

    var span = document.getElementsByClassName("close")[0];

    btns.forEach(function (btn) {
      btn.onclick = function () {
        modal.style.display = "block";
      };
    });

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    var cityItems = document.querySelectorAll("#cityList li");
    cityItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var link = item.getAttribute("data-link");
        window.location.href = link;
      });
    });
  });
};

setupModal();

var button1 = document.getElementById("openModalBtn-1");
var button2 = document.getElementById("openModalBtn-responsive");
var button3 = document.getElementById("openModalBtn-nav");

button1.addEventListener("click", setupModal);
button2.addEventListener("click", setupModal);

// city information
function displayInfo(city) {
  var cityInfo = {
    LHR: {
      Baldock: { DayCharges: "50", NightCharges: "400" },
      Letchworth: { DayCharges: "50", NightCharges: "400" },
      Hitchin: { DayCharges: "50", NightCharges: "400" },
      Henlow: { DayCharges: "50", NightCharges: "400" },
      LangfordHanxworth: { DayCharges: "50", NightCharges: "400" },
      Ashwell: { DayCharges: "50", NightCharges: "400" },
      StotfoldArlserFairfeild: { DayCharges: "50", NightCharges: "400" },
      Biggleswade: { DayCharges: "50", NightCharges: "400" },
      Shefford: { DayCharges: "50", NightCharges: "400" },
      Royston: { DayCharges: "50", NightCharges: "400" },
      LowerStondon: { DayCharges: "50", NightCharges: "400" },
    },
    LTN: {
      Baldock: { DayCharges: "50", NightCharges: "400" },
      Letchworth: { DayCharges: "50", NightCharges: "400" },
      Hitchin: { DayCharges: "50", NightCharges: "400" },
      Henlow: { DayCharges: "50", NightCharges: "400" },
      LangfordHanxworth: { DayCharges: "50", NightCharges: "400" },
      Ashwell: { DayCharges: "50", NightCharges: "400" },
      StotfoldArlserFairfeild: { DayCharges: "50", NightCharges: "400" },
      Biggleswade: { DayCharges: "50", NightCharges: "400" },
      Shefford: { DayCharges: "50", NightCharges: "400" },
      Royston: { DayCharges: "50", NightCharges: "400" },
      LowerStondon: { DayCharges: "50", NightCharges: "400" },
    },
    LGW: {
      Baldock: { DayCharges: "50", NightCharges: "400" },
      Letchworth: { DayCharges: "50", NightCharges: "400" },
      Hitchin: { DayCharges: "50", NightCharges: "400" },
      Henlow: { DayCharges: "50", NightCharges: "400" },
      LangfordHanxworth: { DayCharges: "50", NightCharges: "400" },
      Ashwell: { DayCharges: "50", NightCharges: "400" },
      StotfoldArlserFairfeild: { DayCharges: "50", NightCharges: "400" },
      Biggleswade: { DayCharges: "50", NightCharges: "400" },
      Shefford: { DayCharges: "50", NightCharges: "400" },
      Royston: { DayCharges: "50", NightCharges: "400" },
      LowerStondon: { DayCharges: "50", NightCharges: "400" },
    },
    STD: {
      Baldock: { DayCharges: "500", NightCharges: "400" },
      Letchworth: { DayCharges: "500", NightCharges: "400" },
      Hitchin: { DayCharges: "500", NightCharges: "400" },
      Henlow: { DayCharges: "500", NightCharges: "400" },
      LangfordHanxworth: { DayCharges: "500", NightCharges: "400" },
      Ashwell: { DayCharges: "500", NightCharges: "400" },
      StotfoldArlserFairfeild: { DayCharges: "500", NightCharges: "400" },
      Biggleswade: { DayCharges: "500", NightCharges: "400" },
      Shefford: { DayCharges: "500", NightCharges: "400" },
      Royston: { DayCharges: "500", NightCharges: "400" },
      LowerStondon: { DayCharges: "500", NightCharges: "400" },
    },
    LCY: {
      Baldock: { DayCharges: "120", NightCharges: "400" },
      Letchworth: { DayCharges: "120", NightCharges: "400" },
      Hitchin: { DayCharges: "120", NightCharges: "400" },
      Henlow: { DayCharges: "120", NightCharges: "400" },
      LangfordHanxworth: { DayCharges: "120", NightCharges: "400" },
      Ashwell: { DayCharges: "120", NightCharges: "400" },
      StotfoldArlserFairfeild: { DayCharges: "50", NightCharges: "400" },
      Biggleswade: { DayCharges: "120", NightCharges: "400" },
      Shefford: { DayCharges: "120", NightCharges: "400" },
      Royston: { DayCharges: "120", NightCharges: "400" },
      LowerStondon: { DayCharges: "120", NightCharges: "400" },
    },
  };

  var cityData = cityInfo[city];
  var table =
    "<table style='border-collapse: collapse; width: 100%; box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'>";
  table +=
    "<tr><th style='border: 1px solid #000; padding: 8px;'>Cities</th><th style='border: 1px solid #000; padding: 8px;'>Day Charges Time : (6am-11:59pm)</th><th style='border: 1px solid #000; padding: 8px;'>Night Charges Time : (12am-5:59am)</th></tr>";
  for (var key in cityData) {
    table +=
      "<tr><td style='border: 1px solid #000; padding: 8px;'>" +
      key +
      "</td><td style='border: 1px solid #000; padding: 8px;'>" +
      cityData[key].DayCharges +
      "</td><td style='border: 1px solid #000; padding: 8px;'>" +
      cityData[key].NightCharges +
      "</td></tr>";
  }
  table += "</table>";

  var screenWidth = window.screen.width;
  var popupWidth = 900;
  var popupHeight = 550;
  var left = (screenWidth - popupWidth) / 2;

  var popup = window.open(
    "",
    "City Charges",
    "width=" +
      popupWidth +
      ", height=" +
      popupHeight +
      ", left=" +
      left +
      ", top=0"
  );
  popup.document.write(
    "<html><head><title>" +
      city +
      " Charges</title></head><body style='font-family: Montserrat, sans-serif; padding: 20px;'>"
  );
  popup.document.write("<h2>" + city + " Charges</h2>");
  popup.document.write(table);
  popup.document.write("</body></html>");
  popup.document.close();
}

// faq section
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// form js

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// back to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}