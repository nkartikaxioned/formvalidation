const hamBar1 = document.querySelector('.bar.first'),
  hamBar2 = document.querySelector('.bar.second'),
  hamBar3 = document.querySelector('.bar.third'),
  hamburger = document.querySelector('.hamburger'),
  fieldName = document.querySelector('.name'),
  fieldSurname = document.querySelector('.lastName'),
  fieldPosition = document.querySelector('.position'),
  fieldcompany = document.querySelector('.company'),
  companyType = document.querySelector('.companyType'),
  country = document.querySelector('.country'),
  workemail = document.querySelector('.workemail'),
  subscribe = document.querySelector('.subscribe'),
  submitButton = document.querySelector('.submit-btn'),
  navBar = document.querySelector('nav'),
  mainBody = document.querySelector('main'),
  returnbtn = document.querySelector('.return'),
  errorField = document.querySelectorAll('.error-text');

hamburger.addEventListener('click', () => {
  hamBar1.classList.toggle('active1');
  hamBar2.classList.toggle('active2');
  hamBar3.classList.toggle('active3');
  navBar.classList.toggle('active');
})

returnbtn.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
})

submitButton.addEventListener('click', () => {
  console.log('sub')
  validateForm();
})


function validateForm() {
  console.log('validateForm')
  validateName()
  function validateName() {
    if(fieldName.innerText.value == '' || fieldName.value.length < 3) {
      console.log(fieldName.value)
        fieldName.classList.add('error')
    }
    if(fieldName.innerText.value !== '' || fieldName.value.length > 3){
      fieldName.classList.remove('error')
    }
  }
}













