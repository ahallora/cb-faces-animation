const getFacesFromTeamPage = () => {
  console.clear();

  const faces = [...document.querySelectorAll(".t-section.team img")]
    .filter((x) => x.parentNode.tagName !== "A" && !x.src.endsWith(".svg"))
    .map((x) => ({ name: x.alt, src: x.src }));

  console.log({ faces });

  function forceDownload(url, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = fileName;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  }

  for (let i = 0; i < faces.length; i++) {
    window.setTimeout(() => {
      forceDownload(faces[i].src, faces[i].name);
    }, 100 * i);
  }
};

(() => {
  const root = document.querySelector("#root");
  const ticker = document.querySelector("#ticker");
  const picked = document.querySelector("#picked");
  const tickerName = document.querySelector("#ticker-name");

  let selected = [];
  let chosen;
  let chosenIndexes;
  let nextPerson;
  let canPickNext = false;

  let tickerTimer, pickTimer;
  let currentIndex = 0;
  let scrollTickDuration = 50;
  let highlightFadeoutDuration = 500;
  let timePerPick = 5000;

  const sound = {
    tick: () => {
      const aud = document.createElement("audio");
      aud.src = document.querySelector("#tick").src;
      aud.play();
    },
    ding: () => document.querySelector("#ding").play(),
    done: () => document.querySelector("#done").play(),
  };

  const generateItem = (
    person,
    index
  ) => `<div class="item" id="person_${index}" data-name="${person.name}">
        <div
          class="image"
          style="
            background-image: url('${person.src}');
          "
        ></div>
        <span>${person.name}</span>
      </div>`;

  const populateDOM = () => {
    const faceshtml = faces
      .map((face, index) => generateItem(face, index))
      .join("");
    ticker.innerHTML = faceshtml;
  };

  const getChosen = () => {
    chosen = prompt(
      "",
      "Anders Holm Jensen, Malte Geisen, Mădălina Verdeș, Viktor Heide, Bogdana Konovalenko"
    )
      .split(",")
      .map((name) => name.trim());
    //chosen = ["Anders Holm Jensen", "Mădălina Verdeș", "Bogdana Konovalenko"];
    chosenIndexes = faces
      .map((face, faceIndex) => (chosen.includes(face.name) ? faceIndex : null))
      .filter((face) => face !== null);
    if (chosen.length !== chosenIndexes.length) {
      alert("Not all chosen are matched in faces");
      return;
    }
  };

  const scrollTicker = () => {
    const allItems = [...ticker.querySelectorAll(".item")];

    allItems.forEach((item, itemIndex) => {
      const name = item.getAttribute("data-name") || "";

      if (itemIndex === currentIndex) {
        item.classList.add("highlighted");
        tickerName.innerText = name;
        sound.tick();

        window.setTimeout(
          () => item.classList.remove("highlighted"),
          highlightFadeoutDuration
        );

        if (chosenIndexes[selected.length] === itemIndex && canPickNext) {
          canPickNext = false;
          addPersonToSelected(faces[itemIndex]);
          item.classList.add("selected");

          sound.ding();
        }
      }
    });

    currentIndex = currentIndex + 1 >= allItems.length ? 0 : currentIndex + 1;
  };

  const everyoneIsSelected = () => {
    stopScroll();
    console.log("everyone is selected - fade out");
    root.classList.add("selected_view");
    root.classList.remove("ticker_view");
    setTimeout(() => sound.done(), 500);
  };

  const addPersonToSelected = (person) => {
    selected.push(person);
    const index = selected.length;
    console.log(person);
    picked.insertAdjacentHTML(
      "beforeend",
      generateItem(person, `${index}_picked`)
    );

    if (selected.length === chosen.length) {
      stopPicktimer();
      window.setTimeout(everyoneIsSelected, highlightFadeoutDuration);
    } else {
      startPickTimer();
    }
  };

  const startPickTimer = () => {
    nextPerson = chosen[selected.length];
    console.log("Picking next...", nextPerson);
    const face = faces.find((face) => face.name === nextPerson);
    if (!face) {
      console.error("No face found with name ", nextPerson);
      return;
    }

    pickTimer = setTimeout(() => {
      canPickNext = true;
    }, timePerPick);
  };

  const stopPicktimer = () => {
    clearTimeout(pickTimer);
  };

  const startScroll = () => {
    root.classList.add("ticker_view");
    tickerTimer = setInterval(scrollTicker, scrollTickDuration);
  };

  const stopScroll = () => {
    clearInterval(tickerTimer);
    tickerName.innerHTML = "";
  };

  const resetScroll = () => {
    stopScroll();
    stopPicktimer();
    currentIndex = 0;

    tickerName.innerText = "";

    selected = [];
    picked.innerHTML = "";
    root.classList.remove("selected_view");
  };

  document.addEventListener("keypress", logKey);

  function logKey(e) {
    switch (e.code) {
      case "KeyA":
        startScroll();
        startPickTimer();
        break;

      case "KeyS":
        stopScroll();
        stopPicktimer();
        break;

      case "KeyR":
        resetScroll();
        break;
    }
  }

  populateDOM();
  getChosen();
})();
