const changeTab = (tabName) => {
  const tabs = document.querySelectorAll(".tabs li");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  const activeTab = document.getElementById(`${tabName.toLowerCase()}Tab`);
  activeTab.classList.add("active");

  const lboardItems = document.querySelectorAll(".lboard_item");
  for (let i = 0; i < lboardItems.length; i++) {
    lboardItems[i].style.display = "none";
  }

  const activeLboardItems = document.querySelector(`.lboard_item.${tabName}`);
  activeLboardItems.style.display = "block";
};

// Chiamare la funzione changeTab con il nome del tab desiderato
changeTab("Risposte");

const generateRandomName = () => {
  const names = [
    "Ali",
    "Eric",
    "Gabriel",
    "Beatriz",
    "Hanna",
    "Diya",
    "Fatima",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomPoints = () => Math.floor(Math.random() * 100) + 1;

const generateRandomImages = () => {
  const images = [
    "https://placedog.net/100/100",
    "https://placekitten.com/100",
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const populateLeaderboard = () => {
  const leaderboardItems = [];
  const leaderboardContainer = document.getElementById("leaderboard");
  for (let i = 1; i <= 10; i++) {
    const randomName = generateRandomName();
    const randomPoints = generateRandomPoints();
    const randomImages = generateRandomImages();

    const leaderboardItem = document.createElement("div");
    leaderboardItem.classList.add("lboard_memory");

    leaderboardItem.innerHTML = `
    <div class="img">
        <img src="${randomImages}" alt="random-image" />
    </div>
    <div class="name_barra">
        <p><span>${i}.</span>${randomName}</p>
        <div class="bar_wrap">
            <div class="inner_bar" style="width: ${randomPoints}%"></div>
        </div>
    </div>
    <div class="points">${randomPoints} points</div>
`;

    leaderboardItems.push({ element: leaderboardItem, points: randomPoints });
  }

  leaderboardItems.sort((a, b) => b.points - a.points);

  leaderboardItems.forEach((item, index) => {
    item.element.querySelector(".name_barra p span").textContent = `${
      index + 1
    }.`;

    leaderboardContainer.appendChild(item.element);
  });
};

populateLeaderboard();

populatePodium();
const populatePodium = () => {
  const goldElement = document.getElementById("gold");
  const silverElement = document.getElementById("silver");
  const bronzeElement = document.getElementById("bronze");

  const participants = [];

  for (let i = 0; i < 10; i++) {
    participants.push({
      name: generateRandomName(),
      points: generateRandomPoints(),
      image: generateRandomImages(),
    });
  }

  participants.sort((a, b) => b.points - a.points);

  const podiumElements = [goldElement, silverElement, bronzeElement];

  for (let i = 0; i < 3; i++) {
    const podiumItem = podiumElements[i];
    const participant = participants[i];

    podiumItem.querySelector("img").src = participant.image;
    podiumItem.querySelector(
      "p"
    ).textContent = `${participant.name} - ${participant.points} points`;
  }
};
populatePodium();
