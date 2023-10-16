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
  goBtn = document.querySelector('.search-btn'),
  link = document.querySelector('.privacy-link'),
  returnbtn = document.querySelector('.return'),
  radio = document.querySelectorAll('.radio'),
  errorTextContainer = document.querySelectorAll('.error-text'),
  html = document.querySelector('html'), errorMsg = 'Input field cannot be empty',
  noMsg = '';;

hamburger.addEventListener('click', () => {
  hamBar1.classList.toggle('active1');
  hamBar2.classList.toggle('active2');
  hamBar3.classList.toggle('active3');
  navBar.classList.toggle('active');
  html.classList.toggle('html-scroll');
})

returnbtn.addEventListener('click', () => { window.scrollTo({ top: 0 }); })

link.addEventListener('click', () => { link.classList.add('link-click'); })

submitButton.addEventListener('click', (e) => { 
  e.preventDefault();
  validateForm(); 
  if(validateForm()){
    alert('Form Submitted Successfully.')
    clearForm();
  }
})

goBtn.addEventListener('click', (event) => {
  event.preventDefault();
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

// radio[0].addEventListener('focus', () => { validateSubscribtion() })

function validateForm() {
  console.log(validateName() , validateLastName() , validatePosition() , validateCompany() , validateCompanyType() , validateCountry() ,
  validateEmail() , validateSubscribtion());
  if(!validateName() || !validateLastName() || !validatePosition() || !validateCompany() || !validateCompanyType() || !validateCountry() ||
!validateEmail() || !validateSubscribtion()) {
  
  return false
  } else {
    return true
  }
}

function validateName() {
  const nameValue = fieldName.value.trim();
  if (nameValue === '' || nameValue.length < 3 || !isNaN(nameValue)) {
    fieldName.classList.add('error');
    if(nameValue.length < 3) {  errorTextContainer[0].innerText = "enter valid input"; }
    if(nameValue == '' || nameValue == null){ 
      errorTextContainer[0].innerText = errorMsg;
    } else if(!isNaN(nameValue)) {errorTextContainer[0].innerText = 'Name Cannot contain Number';}
    return false;
  } else {
    fieldName.classList.remove('error');
    errorTextContainer[0].innerText = noMsg;
    return true;
  }
}

function validateLastName() {
  const lastname = fieldSurname.value.trim();
  if (lastname === '' || lastname.length < 3 || !isNaN(lastname)) {
    fieldSurname.classList.add('error');
    if(lastname.length < 3) {  errorTextContainer[1].innerText = "enter valid input"; }
    if(lastname == '' || lastname == null){
    errorTextContainer[1].innerText = errorMsg;
    } else if(!isNaN(lastname)){
      errorTextContainer[1].innerText = 'Last Name Cannot contain Number';
    }
    return false;
  } else {
    fieldSurname.classList.remove('error');
    errorTextContainer[1].innerText = noMsg;
    return true;
  }
}

function validatePosition() {
  const position = fieldPosition.value.trim();
  if (position === '' || /^[a-zA-Z ]$/.test(position)) {
    fieldPosition.classList.add('error');
    errorTextContainer[2].innerText = errorMsg;
    return false;
  } else {
    fieldPosition.classList.remove('error');
    errorTextContainer[2].innerText = noMsg;
    return true;
  }
}

function validateCompany() {
  const company = fieldcompany.value.trim();
  if (company === '' || company === null) {
    fieldcompany.classList.add('error');
    errorTextContainer[3].innerText = errorMsg;
    return false;
  } else {
    fieldcompany.classList.remove('error');
    errorTextContainer[3].innerText = noMsg;
    return true;
  }
}

function validateCompanyType() {
  const companytype = companyType.value;
  if(companytype === 'select') {
    companyType.classList.add('error');
    errorTextContainer[4].innerText = errorMsg;
    return false;
  } else {
    companyType.classList.remove('error');
    errorTextContainer[4].innerText = noMsg;
    return true;
  }
}

function validateCountry() {
  const countrytype = country.value;
  if(countrytype === 'select') {
    country.classList.add('error');
    errorTextContainer[5].innerText = errorMsg;
    return false;
  } else {
    country.classList.remove('error');
    errorTextContainer[5].innerText = noMsg;
    return true;
  }
}

function validateEmail() {
  const email = workemail.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( email === '' || email.match(validRegex) == null ) {
    workemail.classList.add('error');
     if(email == '') { errorTextContainer[6].innerText = 'field cannot be empty' }
     else if (email.match(validRegex) == null ) {  errorTextContainer[6].innerText = 'enter valid mail id'; }
    return false;
  } else {
    workemail.classList.remove('error');
    errorTextContainer[6].innerText = noMsg;
    return true;
  }
}

function validateSubscribtion() {
  // if(subscribe[0].checked == false || subscribe[1].checked == false){
  //   console.log('dfasdfasdf')
  //     console.log('sub' ,!subscribe[0].checked == false)
  //     subscribe.forEach((sub, index) => {
  //        sub.classList.add('error')
  //       //  errorTextContainer[7].innerText = errorMsg;
  //        return false;
  //     })
  //   } else if(subscribe[0].checked == true|| subscribe[1].checked == true || subscribe[0].value !== undefined || subscribe[1].value !== undefined ) {
  //     subscribe.forEach((sub, index) => {
  //       sub.classList.remove('error')
  //       // errorTextContainer[7].innerText = noMsg;
  //       return true;
  //    })
  //   }

  const checkedRadio = Array.from(subscribe).some(radio => radio.checked);

  if (!checkedRadio) {
    errorTextContainer[7].innerText ='select a value';
    return false;
   
  } else {
    errorTextContainer[7].innerText ='';
    return true;
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
  subscribe.forEach((sub, index) => {
    sub.classList.remove('error');
 })
}










