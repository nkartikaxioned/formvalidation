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
  returnbtn = document.querySelector('.return');

hamburger.addEventListener('click', () => {
  hamBar1.classList.toggle('active1');
  hamBar2.classList.toggle('active2');
  hamBar3.classList.toggle('active3');
  navBar.classList.toggle('active');
})

returnbtn.addEventListener('click', () => { window.scrollTo({ top: 0 }); })

submitButton.addEventListener('click', (e) => { 
  e.preventDefault();
  validateForm(); 
  if(validateForm()){
    alert('Form Submitted Successfully.')
    clearForm();
  }
})

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
  if(!(validateName() || validateLastName() || validatePosition() || validateCompany() || validateCompanyType() || validateCountry() ||
validateEmail() || validateSubscribtion())) {
  return false
  } else {
    return true
  }
}

function validateName() {
  const nameValue = fieldName.value.trim();
  if (nameValue === '' || nameValue.length < 3 || /^[a-zA-Z ]$/.test(nameValue)) {
    fieldName.classList.add('error');
    return false;
  } else {
    fieldName.classList.remove('error');
    return true;
  }
}

function validateLastName() {
  const lastname = fieldSurname.value.trim();
  if (lastname === '' || lastname.length < 3 || /^[a-zA-Z ]$/.test(lastname)) {
    fieldSurname.classList.add('error');
    return false;
  } else {
    fieldSurname.classList.remove('error');
    return true;
  }
}

function validatePosition() {
  const position = fieldPosition.value.trim();
  if (position === '' || /^[a-zA-Z ]$/.test(position)) {
    fieldPosition.classList.add('error');
    return false;
  } else {
    fieldPosition.classList.remove('error');
    return true;
  }
}

function validateCompany() {
  const company = fieldcompany.value.trim();
  if (company === '' || company === null) {
    fieldcompany.classList.add('error');
    return false;
  } else {
    fieldcompany.classList.remove('error');
    return true;
  }
}

function validateCompanyType() {
  const companytype = companyType.value;
  if(companytype === 'select') {
    companyType.classList.add('error');
    return false;
  } else {
    companyType.classList.remove('error');
    return true;
  }
}

function validateCountry() {
  const countrytype = country.value;
  if(countrytype === 'select') {
    country.classList.add('error');
    return false;
  } else {
    country.classList.remove('error');
    return true;
  }
}

function validateEmail() {
  const email = workemail.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( email === '' || email.match(validRegex) == null ) {
    workemail.classList.add('error');
    return false;
  } else {
    workemail.classList.remove('error');
    return true;
  }
}

function validateSubscribtion() {
    if(!subscribe[0].checked || !subscribe[1].checked){
      console.log('sadasdasd')
      subscribe.forEach((sub, index) => {
         sub.classList.add('error')
         return false;
      })
    } else {
      subscribe.forEach((sub, index) => {
        sub.classList.remove('error')
        return true;
     })
    }
}

function clearForm() {
  fieldName.value = '';
  fieldSurname.value = '';
  fieldPosition.value = '';
  fieldcompany.value = '';
  companyType.value = ''; 
  country.value = '';
  workemail.value = '';
  subscribe[0].checked = false;
  subscribe[1].checked = false;
}










