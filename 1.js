function validateInput(inputEl, errorEl, updateCounter) {
    const { percentButtons } = elements
    const { zeroError, fractureNumberError, negativeError } = errorMessages
    inputEl.addEventListener("input", () => {
      if ((inputEl.value).length === 0) {
        updateCounter(0)
        updateDashboard();
      }
      else if (parseInt(inputEl.value) === 0) {
        errorEl.textContent = zeroError;
        inputEl.classList.add("not-valid");
      } else if (parseInt(inputEl.value) < 0) {
        errorEl.textContent = negativeError;
        inputEl.classList.add("not-valid");
      } else if ((inputEl.id == "people-number-input") && (parseFloat((inputEl.value) % 1) !== 0)) {
        errorEl.textContent = fractureNumberError;
        inputEl.classList.add("not-valid");
        people = 0
        updateDashboard();
      }
      else {
        errorEl.textContent = "";
        inputEl.classList.remove("not-valid");
        updateCounter(parseFloat(inputEl.value));
        updateDashboard();
      }
      if (inputEl.classList[0] == "custom-input") {
        percentButtons.forEach(button => button.classList.remove("clicked"))
      }
    });
  }
  
  validateInput(elements.billEl, elements.billError, value => bill = value);
  validateInput(elements.peopleEl, elements.peopleError, value => people = value);
  validateInput(elements.customTipEl, elements.tipError, value => tip = value);