/**
 * Created by Admin on 06.08.2016.
 */
window.onload = function () {
    
    //для того, чтобы секция header автоматически вотображалась на всю высоту экрана 
    function  height_detect() {
        var header = document.getElementsByTagName("header")[0];
        header.style.height = window.innerHeight + "px";
    }
    height_detect();
    //при измениние высоты окна браузера, меняется высота header
    window.addEventListener("resize",height_detect);

    //Плавный скролл

    //header slider
    var left_arrow = document.querySelector(".left_arrow img");
    var right_arrow = document.querySelector(".right_arrow img");
    var all_content = document.querySelectorAll(".content");
    function slide() {
        for(var i = 0; i < all_content.length; i++){
            if(all_content[i].classList.contains("vision_visible")){
                //проверка для последнего слайда
                if(i == 2){
                    all_content[i].classList.toggle("vision_visible");
                    all_content[i].classList.toggle("vision_none");
                    all_content[0].classList.toggle("vision_none");
                    all_content[0].classList.toggle("vision_visible");
                    break;
                }
                else{
                    all_content[i].classList.toggle("vision_visible");
                    all_content[i].classList.toggle("vision_none");
                    all_content[i + 1].classList.toggle("vision_none");
                    all_content[i + 1].classList.toggle("vision_visible");
                    break;
                }

            }
        }
    }

    //задаем дефолтную прокрутку слайдов
    var header_slider = setInterval(slide, 3000);

    //настраиваем стрелки прокрутки контента
    right_arrow.addEventListener("click", function () {
        clearInterval(header_slider);
        slide();
        
        //delay 5sec
        clearTimeout(right_arrow_timeout);
        var right_arrow_timeout = setTimeout(function () {
            clearInterval(header_slider);
            header_slider = setInterval(slide, 3000);
        },5000);

    })
    left_arrow.addEventListener("click", function () {
        clearInterval(header_slider);
        for(var i = 0; i < all_content.length; i++){
            if(all_content[i].classList.contains("vision_visible")){
                //проверка для последнего слайда
                if(i == 0){
                    all_content[i].classList.toggle("vision_visible");
                    all_content[i].classList.toggle("vision_none");
                    all_content[2].classList.toggle("vision_none");
                    all_content[2].classList.toggle("vision_visible");
                    break;
                }
                else{
                    all_content[i].classList.toggle("vision_visible");
                    all_content[i].classList.toggle("vision_none");
                    all_content[i - 1].classList.toggle("vision_none");
                    all_content[i - 1].classList.toggle("vision_visible");
                    break;
                }

            }
        }
        clearTimeout(left_arrow_timeout);
        var left_arrow_timeout = setTimeout(function () {
            clearInterval(header_slider);
            header_slider = setInterval(slide, 3000);
        },5000);
    })
    
    //изменение картинки, при наведение на него в секции service.Так же меняет высоту контейнера.
    var service_img = document.getElementsByClassName("service_img");
    var service_img_height = 110;
    var service_img_width = 110;
    for(var i = 0; i < service_img.length; i++){
        if(i == 0){
            service_img[i].addEventListener("mouseover", function () {
                service_img[0].firstChild.setAttribute("src", "img/service_web_hover.png");
              /*  var bigger_size = setInterval(function () {
                    if(service_img_height >= 121){
                        clearInterval(bigger_size);
                    }
                    service_img_height +=1;
                    service_img_width +=1;
                    service_img[0].style.height = service_img_height +"px";
                    service_img[0].style.width = service_img_width + "px";
                }, 100)
                bigger_size;*/
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[0].firstChild.setAttribute("src", "img/service_web.png");
                clearInterval(bigger_size);
               /* service_img_height = 110;
                service_img_width = 110;
                service_img[0].style.height = service_img_height +"px";
                service_img[0].style.width = service_img_width + "px";*/
            })
        }
        else if(i == 1){
            service_img[i].addEventListener("mouseover", function () {
                service_img[1].firstChild.setAttribute("src", "img/service_graphic_hover.png");
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[1].firstChild.setAttribute("src", "img/service_graphic.png");
            })
        }
        else if(i == 2){
            service_img[i].addEventListener("mouseover", function () {
                service_img[2].firstChild.setAttribute("src", "img/service_photography_hover.png");
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[2].firstChild.setAttribute("src", "img/service_photography.png");
            })
        }
        else if(i == 3){
            service_img[i].addEventListener("mouseover", function () {
                service_img[3].firstChild.setAttribute("src", "img/service_develoing_hover.png");
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[3].firstChild.setAttribute("src", "img/service_develoing.png");
            })
        }
    }
    //меняем цвет стрелок на кнопке
    var contact_btn = document.getElementsByClassName("contact_btn")[0];
    var contact_btn_img = document.querySelector(".contact_btn img")
    contact_btn.addEventListener("mouseover",function () {
        contact_btn_img.setAttribute("src", "img/arrows_contact_btn_hover.png");
    })
    contact_btn.addEventListener("mouseout",function () {
        contact_btn_img.setAttribute("src", "img/arrows_contact_btn.png");
    })
}