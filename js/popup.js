var ESC_KEY="Escape",popup=document.querySelector(".popup"),popupToggle=document.querySelector(".popup__toggle"),openBtn=document.querySelector(".button"),closePopup=function(){popup.classList.remove("popup--opened")},openPopup=function(){popup.classList.add("popup--opened")},onEscPress=function(e){e.key===ESC_KEY&&closePopup()};popupToggle.addEventListener("click",function(){closePopup(),document.removeEventListener("keydown",onEscPress)}),openBtn.addEventListener("click",function(){openPopup(),document.addEventListener("keydown",onEscPress)});