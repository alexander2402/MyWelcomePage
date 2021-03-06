function triggerClass(id, cssClass) {
  const elem = document.getElementById(id);
  elem.classList.toggle(cssClass);
}

function closeNavMobile() {
  navBar = document.getElementById("navigation");
  content = document.getElementById("content");
  const _classList = content.classList;
  _classList.contains("triggered")
    ? (content.classList.remove("triggered"),
      navBar.classList.remove("triggered"))
    : "";
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  name && email && message
    ? ((document.getElementById("spinner").style.display = "grid"),
      Email.send({
        SecureToken: "fd372e32-fa54-4543-9990-2f30cb764c2a",
        To: "alexwinner2402@gmail.com",
        From: email,
        Subject: "Message from My Welcome Page!",
        Body: `${name} sent a message: ${message}`,
      }).then(() => {
        document.getElementById("spinner").style.display = "none";
        document.getElementsByTagName("form")[0].style.display = "none";
        document.getElementById("after-sent").style.display = "block";
      }))
    : (document.getElementById("error-message").innerText =
        "All fields are required");
}

window.addEventListener("load", startSlider);

function startSlider() {
  setTimeout(() => {
    var sliderImg = document.getElementById("slider-img");
    var sliderNames = document.getElementById("slider-names");
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = "assets/html5.png";
    imgArray[0].name = "HTML5";

    imgArray[1] = new Image();
    imgArray[1].src = "assets/css.png";
    imgArray[1].name = "CSS3";

    imgArray[2] = new Image();
    imgArray[2].src = "assets/javascript.png";
    imgArray[2].name = "javascript";

    imgArray[3] = new Image();
    imgArray[3].src = "assets/typescript.png";
    imgArray[3].name = "typescript";

    imgArray[4] = new Image();
    imgArray[4].src = "assets/angular.png";
    imgArray[4].name = "Angular 2+";

    imgArray[5] = new Image();
    imgArray[5].src = "assets/ionic.png";
    imgArray[5].name = "Ionic";

    imgArray[6] = new Image();
    imgArray[6].src = "assets/react.svg";
    imgArray[6].name = "React with Hooks";

    imgArray[7] = new Image();
    imgArray[7].src = "assets/dotnet.png";
    imgArray[7].name = ".NET";

    for (var i = 0; i < imgArray.length; i++) {
      var image = document.createElement("img");
      var names = document.createElement("div");
      image.setAttribute("src", imgArray[i].src);
      names.innerText += imgArray[i].name;
      sliderImg.appendChild(image);
      sliderNames.appendChild(names);
    }
  }, 1000);
}
