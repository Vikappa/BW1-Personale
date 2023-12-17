const stars = document.querySelectorAll(".stars img");
console.log(stars);

stars.forEach((star, starsSelezionate) => {
  star.addEventListener("click", () => {
    // console.log(starsSelezionate);
    stars.forEach((star, stars) => {
      // console.log(stars);
      if (starsSelezionate >= stars) {
        star.classList.add("attivo");
      } else {
        star.classList.remove("attivo");
      }
      //   starsSelezionate >= stars
      //     ? star.classList.add("attivo")
      //     : star.classList.remove("attivo");
    });
  });
});
