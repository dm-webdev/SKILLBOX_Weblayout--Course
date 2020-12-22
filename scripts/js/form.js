window.addEventListener("DOMContentLoaded", function () {

  const message = document.querySelector(".message");

  const tel = document.querySelector("input[type='tel']");
  const telMask = new Inputmask("+7 (999) 999-99-99"); 
  telMask.mask(tel);

  new JustValidate(".feedback-form", {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      phoneNumber: {
        required: true,
        minLength: 9,
      },
    },

    messages: {
      name: {
        required: "Пожалуйста, введите Ваше имя",
        minLength: "Минимальная длина не менее двух символов",
        maxLength: "Максимальная длина не более тридцати символов",
      },
      phoneNumber: {
        required: "Пожалуйста, введите Ваш действующий телефонный номер",
      },
    },

    submitHandler: function (form, values, ajax) {
      ajax({
        url: "mail.php",
        method: "POST",
        data: values,
        async: true,
        callback: function () {
          message.classList.remove("none");
          setTimeout(()=>{modal.classList.add("none")}, 1300);
          const form = document.forms.contactUs;
          const btn = document.querySelector(".feedback-form__btn")
          form.elements.name.value = "";
          form.elements.phoneNumber.value = "";
          btn.setAttribute("disabled", true);
        },        
      });
    },
  });





});