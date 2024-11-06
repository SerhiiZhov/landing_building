const errroMsgButton = document.querySelector('.changeMessage')
const validData = document.querySelector('.success__desr_item')
const popup = document.querySelector('.popup')

function validateForm(forma) {
    const form = document.querySelector(forma);
  
    form.addEventListener("submit", formSend);
  
    function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
      if (error !== 0) return;
      
      let erSave = errroMsgButton.innerHTML;
      let formData = new FormData(form);
      form.classList.add("_sending");
  
      setTimeout(() => {
        if (e.target.classList.contains("work__form")) {
           formData.forEach((value, key) => {
            let li = document.createElement("li");
            li.textContent = `${key}: ${value}`;
            validData.appendChild(li);
          }); 
          form.classList.remove('_sending');
          popup.classList.add('active')

        } else {
          form.classList.remove('_sending');
          form.classList.add('succes');
          document.querySelector('.popup__close').focus()
          errroMsgButton.innerHTML = 'You just subscribed 😎';
        }
      }, 2000);
  
      form.reset();
  
      setTimeout(() => {
        if (e.target.classList.contains("work__form")) {
            popup.classList.remove('active')
            validData.innerHTML = '';
        } else {
          form.classList.remove('succes');
          errroMsgButton.innerHTML = erSave;
        }
      }, 10000);
    }
  
    function formValidate(form) {
      let error = 0;
      let formReq = form.querySelectorAll("._req");
  
      for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);
  
        if (input.classList.contains("_email")) {
          if (emailValidate(input)) {
            formAddError(input);
            error++;
          }
        } else {
          if (!input.value.trim() || input.value.length < 3) {
            formAddError(input);
            error++;
          }
        }
      }
  
      return error;
    }
  
    function formAddError(input) {
      input.classList.add("_error");
    }
  
    function formRemoveError(input) {
      input.classList.remove("_error");
    }
  
    function emailValidate(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  }
  
  validateForm(".work__form");
  validateForm(".news-letter");
  