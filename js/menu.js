var navMain=document.querySelector(".site-nav"),navToggle=document.querySelector(".site-nav__toggle"),headerLogo=document.querySelector(".header__logo"),headerSocial=document.querySelector(".header__social");navMain.classList.remove("site-nav--nojs"),navMain.classList.add("site-nav--closed"),headerSocial.classList.remove("header__social--opened"),navToggle.addEventListener("click",function(){navMain.classList.contains("site-nav--closed")?(navMain.classList.remove("site-nav--closed"),navMain.classList.add("site-nav--opened"),headerLogo.classList.add("header__logo--opened"),headerSocial.classList.add("header__social--opened")):(navMain.classList.add("site-nav--closed"),navMain.classList.remove("site-nav--opened"),headerLogo.classList.remove("header__logo--opened"),headerSocial.classList.remove("header__social--opened"))});