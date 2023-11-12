const signup = document.querySelector(".modal-signup")
const form = document.querySelector(".modal-signup__form")
const formEmailInput = form.querySelector(".form__input")
const success = document.querySelector(".modal-success")
const successDismissBtn = success.querySelector(".form__button")


function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  if (emailIsValid(formEmailInput.value)) {
    signup.classList.add('none')
    success.classList.remove('none')
  } else {
    form.classList.add('modal-signup__form--invalid')
  }
})

formEmailInput.addEventListener("input", () => {
  if (emailIsValid(formEmailInput.value)) {
    form.classList.remove('modal-signup__form--invalid')
  }
});

successDismissBtn.addEventListener('click', () => {
  signup.classList.remove('none')
  success.classList.add('none')
  formEmailInput.value = ''
})
