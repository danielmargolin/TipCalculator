document.querySelectorAll(".tip-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    const buttons = document.querySelectorAll(".tip-button");
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.borderColor = "";
    });
    button.style.backgroundColor = "hsl(172, 67%, 45%)";
    button.style.borderColor = "hsl(183, 100%, 15%)";
    tipPrc = event.target.dataset.tip;
  });
});
