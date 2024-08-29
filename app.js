const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if(button.classList.contains("on")){
          button.classList.remove('on');
        }else{
          button.classList.add('on');
        }
      });
    });
