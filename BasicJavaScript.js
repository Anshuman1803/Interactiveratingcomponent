let submitButton = document.getElementById("submit");
let Ratingcard = document.getElementById("RatingCard");
let Thankyoucard = document.getElementById("ThankYouCard");
let ShowRating = document.getElementById("ratings");
let starval;

submitButton.addEventListener("click", () => {
  Ratingcard.style.display = "none";
  Thankyoucard.style.display = "flex";
  ShowRating.innerHTML = "You Selected " + starval + " Out of 5";
});

let stars = document.querySelectorAll(".star");

stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    star.classList.add("active");
    starval = star.innerHTML;
  });
});
