document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");
  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  const cardsData = [
    {
      title: "Kesenian Suku Banjar",
      description: "",
      url: "materi/kesenian/banjar.html",
    },
    {
      title: "Kesenian Suku Meratus",
      description: "",
      url: "materi/kesenian/meratus.html",
    },
    {
      title: "Kesenian Suku Bakumpai",
      description: "",
      url: "materi/kesenian/bakumpai.html",
    },
    {
      title: "Evaluasi",
      description: "Tes pemahaman mu disini!",
      url: "game/bab7.html",
    },
  ];

  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
              <img src="/assets/button/latar.webp" alt="${card.title}">
              <div class="content">
                  <h3>${card.title}</h3>
                  <p>${card.description}</p>
              </div>
            `;

    cardElement.addEventListener("click", () => {
      window.location.href = card.url;
    });

    cardContainer.appendChild(cardElement);
  });

  homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  backButton.addEventListener("click", function () {
    window.location.href = "materi.html";
  });
});
