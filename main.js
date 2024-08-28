const scrollableAreaEl = document.getElementById("scrollable_items");
function scrollElementX(scrollPos) {
  const scrollableItems = scrollableAreaEl.children;
  Array.from(scrollableItems).forEach((item) => {
    const itemClientRect = item.getBoundingClientRect();
    console.log(itemClientRect);
  });
  console.log(scrollPos);
}

window.addEventListener("scroll", function (event) {
  // console.log(this);

  let scrollPos = this.scrollY;
  scrollElementX(scrollPos);
  // console.log(scroll);
});

// Menu toggle function

let menu = document.getElementById("menu");
let menu_btn = document.getElementById("menu-btn");
let close_btn = document.getElementById("close-btn");

menu_btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu_btn.classList.toggle("hidden");
  close_btn.classList.toggle("hidden");
});

close_btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu_btn.classList.toggle("hidden");
  close_btn.classList.toggle("hidden");
});

const counters = document.querySelectorAll(".count");
const speed = 200;

if (counters) {
  counters.forEach((counter) => {
    const animate = () => {
      const count = +counter.getAttribute("data-target");
      const data = +counter.innerText;

      const time = count / speed;
      if (data < count) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = count;
      }
    };

    animate();
  });
}

const countDownClock = (number = 100, format = "seconds") => {
  const d = document;
  const daysElement = d.querySelector(".days");
  const hoursElement = d.querySelector(".hours");
  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      case "hours":
        return timer(number * 60 * 60);
      case "days":
        return timer(number * 60 * 60 * 24);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(20, "days");

const splideEl = document.querySelector(".best-seller-slider");

if (splideEl) {
  let splideBest = new Splide(splideEl, {
    perPage: 2,
    type: "loop",
    padding: { left: 0, right: "10rem" },
    autoplay: true,
    arrows: false,
  });

  splideBest.mount();
}

let splides = new Splide(".splides", {
  perPage: 2,
  type: "loop",
  padding: "10rem",
  gap: "2rem",
  autoplay: true,
  arrows: false,
});

splides.mount();
