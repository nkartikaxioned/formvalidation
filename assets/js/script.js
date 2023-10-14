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
  subscribe = document.querySelectorAll('.subscribe'),
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

returnbtn.addEventListener('click', () => { window.scrollTo({ top: 0 }); })

submitButton.addEventListener('click', () => { validateForm(); })

fieldName.addEventListener('blur', () => {
  validateName();
});

fieldSurname.addEventListener('blur', () => {
  validateLastName()
});

fieldPosition.addEventListener('blur', () => {
  validatePosition()
});

fieldcompany.addEventListener('blur', () => {
  validateCompany()
});

companyType.addEventListener('blur', () => {
  validateCompanyType()
});

country.addEventListener('blur', () => {
  validateCountry()
});

workemail.addEventListener('blur', () => {
  validateEmail()
});

function validateForm() {
  validateName()
  validateLastName()
  validatePosition()
  validateCompany()
  validateCompanyType()
  validateCountry()
  validateEmail()
  validateSubscribtion()
}

function validateName() {
  const nameValue = fieldName.value.trim();
  if (nameValue === '' || nameValue.length < 3 || /^[a-zA-Z ]$/.test(nameValue)) {
    fieldName.classList.add('error');
  } else {
    fieldName.classList.remove('error');
  }
}

function validateLastName() {
  const lastname = fieldSurname.value.trim();
  if (lastname === '' || lastname.length < 3 || /^[a-zA-Z ]$/.test(lastname)) {
    fieldSurname.classList.add('error');
  } else {
    fieldSurname.classList.remove('error');
  }
}

function validatePosition() {
  const position = fieldPosition.value.trim();
  if (position === '' || /^[a-zA-Z ]$/.test(position)) {
    fieldPosition.classList.add('error');
  } else {
    fieldPosition.classList.remove('error');
  }
}

function validateCompany() {
  const company = fieldcompany.value.trim();
  if (company === '' || company === null) {
    fieldcompany.classList.add('error');
  } else {
    fieldcompany.classList.remove('error');
  }
}

function validateCompanyType() {
  const companytype = companyType.value;
  if(companytype === 'select') {
    companyType.classList.add('error');
  } else {
    companyType.classList.remove('error');
  }
}

function validateCountry() {
  const countrytype = country.value;
  if(countrytype === 'select') {
    country.classList.add('error');
  } else {
    country.classList.remove('error');
  }
}

function validateEmail() {
  const email = workemail.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( email === '' || email.match(validRegex) == null ) {
    workemail.classList.add('error');
  } else {
    workemail.classList.remove('error');
  }
}

function validateSubscribtion() {
    console.log(subscribe[0].checked)
    console.log(subscribe[1].checked)
    if(!subscribe[0].checked || !subscribe[1].checked){
      subscribe.forEach((sub, index) => {
         sub.classList.add('error')
      })
    } else {
      subscribe.forEach((sub, index) => {
        sub.classList.remove('error')
     })
    }
}












