window.onload = function () {
    
    //для того, чтобы секция header автоматически вотображалась на всю высоту экрана 
    function  height_detect() {
        var header = document.getElementsByTagName("header")[0];
        header.style.height = window.innerHeight + "px";
    }
    height_detect();
    //при измениние высоты окна браузера, меняется высота header
    window.addEventListener("resize",height_detect);

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
    
    //изменение картинки, при наведение на него в секции service и увеличивает размер на 10%
    var service_img = document.getElementsByClassName("service_img");
    for(var i = 0; i < service_img.length; i++){
        if(i == 0){
            service_img[i].addEventListener("mouseover", function () {
                service_img[0].firstChild.setAttribute("src", "img/service_web_hover.png");
                service_img[0].style.cssText = "width:121px;height:121px;padding:41px;"
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[0].firstChild.setAttribute("src", "img/service_web.png");
                service_img[0].style.cssText= "width:110px;height:110px;padding:36px;"
            })
        }
        else if(i == 1){
            service_img[i].addEventListener("mouseover", function () {
                service_img[1].firstChild.setAttribute("src", "img/service_graphic_hover.png");
                service_img[1].style.cssText = "width:121px;height:121px;padding:41px;"
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[1].firstChild.setAttribute("src", "img/service_graphic.png");
                service_img[1].style.cssText= "width:110px;height:110px;padding:36px;"
            })
        }
        else if(i == 2){
            service_img[i].addEventListener("mouseover", function () {
                service_img[2].firstChild.setAttribute("src", "img/service_photography_hover.png");
                service_img[2].style.cssText = "width:121px;height:121px;padding:41px;"
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[2].firstChild.setAttribute("src", "img/service_photography.png");
                service_img[2].style.cssText= "width:110px;height:110px;padding:36px;"
            })
        }
        else if(i == 3){
            service_img[i].addEventListener("mouseover", function () {
                service_img[3].firstChild.setAttribute("src", "img/service_develoing_hover.png");
                service_img[3].style.cssText = "width:121px;height:121px;padding:41px;"
            })
            service_img[i].addEventListener("mouseout", function () {
                service_img[3].firstChild.setAttribute("src", "img/service_develoing.png");
                service_img[3].style.cssText= "width:110px;height:110px;padding:36px;"
            })
        }
    }

    //Увеличение размера иконок на 10%
   var how_we_do_img = document.querySelectorAll(".how_we_do_item img");
    for(var i = 0; i < how_we_do_img.length; i++){
        how_we_do_img[i].addEventListener("mouseover", function () {
            this.style.width = 50 +"px";
            this.style.height = 50 +"px";
        });
        how_we_do_img[i].addEventListener("mouseout", function () {
            this.style.width = 45 +"px";
            this.style.height = 45 +"px";
        });
        }
    
    //фильтр для портфолио
    var portfolio_list = document.querySelectorAll(".portfolio_list li a");
    var works_item = document.querySelectorAll(".works_item");
    portfolio_list[0].addEventListener("click", function () {
        for(var i =0; i < works_item.length; i++){
            works_item[i].style.display ="block";
        }
    })
    portfolio_list[1].addEventListener("click", function () {
        for(var i =0; i < works_item.length; i++){
                works_item[i].style.display ="block";
            }
        for(var i =0; i < works_item.length; i++){
            if(!works_item[i].classList.contains("web_design")){
                works_item[i].style.display ="none";
            }
        }
    })
    portfolio_list[2].addEventListener("click", function () {
        for(var i =0; i < works_item.length; i++){
            works_item[i].style.display ="block";
        }
        for(var i =0; i < works_item.length; i++){
            if(!works_item[i].classList.contains("graphic_design")){
                works_item[i].style.display ="none";
            }
        }
    })
    portfolio_list[3].addEventListener("click", function () {
        for(var i =0; i < works_item.length; i++){
            works_item[i].style.display ="block";
        }
        for(var i =0; i < works_item.length; i++){
            if(!works_item[i].classList.contains("photography")){
                works_item[i].style.display ="none";
            }
        }
    })
    portfolio_list[4].addEventListener("click", function () {
        for(var i =0; i < works_item.length; i++){
            works_item[i].style.display ="block";
        }
        for(var i =0; i < works_item.length; i++){
            if(!works_item[i].classList.contains("illustration")){
                works_item[i].style.display ="none";
            }
        }
    })

    //меняем цвет стрелок на кнопке
    var contact_btn = document.getElementsByClassName("contact_btn")[0];
    var contact_btn_img = document.querySelector(".contact_btn img")
    contact_btn.addEventListener("mouseover",function () {
        contact_btn_img.setAttribute("src", "img/arrows_contact_btn_hover.png");
    })
    contact_btn.addEventListener("mouseout",function () {
        contact_btn_img.setAttribute("src", "img/arrows_contact_btn.png");
    })

    //выводим количество довольных клиентов:)
    var number = document.querySelectorAll(".we_are_proud_item h3")
    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled >= 2800){
           for (var i =0; i <number.length; i++){
               if(i == 0){
                   if(number[0].innerHTML !="1600"){
                       number[0].innerHTML = "0";
                       var clients_0 = +number[0].innerHTML;
                       var count_clients_0 = setInterval(function () {
                           clients_0+=160;
                           number[0].innerHTML = clients_0;
                       },300);
                       setTimeout(function () {
                           clearInterval(count_clients_0)
                       },3000)
                   }
               }
               else if(i == 1){
                   if(number[1].innerHTML !="3200"){
                       number[1].innerHTML = "0";
                       var clients_1 = +number[1].innerHTML;
                       var count_clients_1 = setInterval(function () {
                           clients_1+=320;
                           number[1].innerHTML = clients_1;
                       },300);
                       setTimeout(function () {
                           clearInterval(count_clients_1)
                       },3000)
                   }
               }
               else if(i == 2){
                   if(number[2].innerHTML !="40"){
                       number[2].innerHTML = "0";
                       var clients_2 = +number[2].innerHTML;
                       var count_clients_2 = setInterval(function () {
                           clients_2+=4;
                           number[2].innerHTML = clients_2;
                       },300);
                       setTimeout(function () {
                           clearInterval(count_clients_2)
                       },3000)
                   }
               }
               else if(i == 3){
                   if(number[3].innerHTML !="20000"){
                       number[3].innerHTML = "0";
                       var clients_3 = +number[3].innerHTML;
                       var count_clients_3 = setInterval(function () {
                           clients_3+=2000;
                           number[3].innerHTML = clients_3;
                       },300);
                       setTimeout(function () {
                           clearInterval(count_clients_3)
                       },3000)
                   }
               }
           }
        }
    }
    //Увеличиваем размеры иконок на 10%
    var about_item_img = document.querySelectorAll(".about_item_img");
    for(var i = 0; i < about_item_img.length; i++){
        about_item_img[i].addEventListener("mouseover", function () {
            this.style.width = 77 +"px";
            this.style.height = 77 + "px";
            this.style.padding = 3 + "px";
        });
        about_item_img[i].addEventListener("mouseout", function () {
            this.style.width = 70 +"px";
            this.style.height = 70 +"px";
            this.style.padding = 0;
        });
    }

    //Круговая диаграмма

    var canvas = document.getElementsByTagName("canvas");
    var W = 150;
    var H = 150;
    var degrees = 0;
    var new_degrees = 0;
    var difference = 9;
    var color = "#ffe600";
    var bgcolor = "#fff";
    var text;
    function draw(new_degrees,ctx,animation_loop) {
        //Cancel any movement animation if a new chart is requested
        if(typeof animation_loop != undefined) clearInterval(animation_loop);


        difference = new_degrees - degrees;

        animation_loop = setInterval(function () {
            if(degrees > new_degrees)
                clearInterval(animation_loop);

            if(degrees <= new_degrees)
                degrees++;
            else
                degrees--;

            ctx.clearRect(0, 0, W, H);


            ctx.beginPath();
            ctx.strokeStyle = bgcolor;
            ctx.lineWidth = 5;
            ctx.arc(W/2, H/2, 60, 0, Math.PI*2, false); //you can see the arc now
            ctx.stroke();


            var radians = degrees * Math.PI / 180;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 5;

            ctx.arc(W/2, H/2, 60, 0 - 270*Math.PI/180, radians - 270*Math.PI/180, false);
            //you can see the arc now
            ctx.stroke();

            ctx.fillStyle = color;
            ctx.font = "35px Oswald_light";
            text = Math.floor(degrees/360*100) + "%";
            text_width = ctx.measureText(text).width;
            ctx.fillText(text, W/2 - text_width/2, H/2 + 15);

        }, 1000/difference);
    }

    for(var i = 0; i < canvas.length; i++){
        if(i == 0){
            var canvas_context_0 = canvas[i].getContext("2d");
            draw(324,canvas_context_0);
        }
        else if(i == 1){
            var canvas_context_1 = canvas[i].getContext("2d");
            draw(346,canvas_context_1);
        }
        else if(i == 2){
            var canvas_context_2 = canvas[i].getContext("2d");
            draw(306,canvas_context_2);
        }
        else if(i == 3){
            var canvas_context_3 = canvas[i].getContext("2d");
            draw(339,canvas_context_3);
        }
    }

    //Открытие информации о члене команды
    var team_img = document.querySelectorAll(".team_item img");
    var team_skills = document.querySelectorAll(".team_skills")
    for (var i = 0; i < team_img.length; i++){
        if(i == 0){
            team_img[i].addEventListener("click",function () {
                for (var i = 0; i <team_social.length; i++) {
                    if (!team_social[i].classList.contains("vision_none")) {
                        team_social[i].classList.toggle("vision_none");
                    }
                }
                team_social[0].classList.toggle("vision_none");

            })
        }
        if(i == 1){
            team_img[i].addEventListener("click",function () {
                for (var i = 0; i <team_social.length; i++) {
                    if (!team_social[i].classList.contains("vision_none")) {
                        team_social[i].classList.toggle("vision_none");
                    }
                }
                team_social[1].classList.toggle("vision_none");
            })
        }
        if(i == 2){
            team_img[i].addEventListener("click",function () {
                for (var i = 0; i <team_social.length; i++) {
                    if (!team_social[i].classList.contains("vision_none")) {
                        team_social[i].classList.toggle("vision_none");
                    }
                }
                team_social[2].classList.toggle("vision_none");
            })
        }
        if(i == 3){
            team_img[i].addEventListener("click",function () {
                for (var i = 0; i <team_social.length; i++) {
                    if (!team_social[i].classList.contains("vision_none")) {
                        team_social[i].classList.toggle("vision_none");
                    }
                }
                team_social[3].classList.toggle("vision_none");
            })
        }
    }
    // Кнопка закрытия информации о члене команды
    var exit_button = document.querySelectorAll(".exit");
    var team_social = document.querySelectorAll(".team_social")
    for(var i = 0; i < exit_button.length; i++){
        exit_button[i].addEventListener("click",function () {
            for (var i = 0; i <team_social.length; i++){
                if(!team_social[i].classList.contains("vision_none")){
                    team_social[i].classList.toggle("vision_none");
                }
            }
        })
    }
    
    // hover functions
    function hover() {
        var old_src = this.src;
        old_src = old_src.split("");
        var format = old_src.splice(old_src.length - 4, 4);
        old_src = old_src.join("");
        format = format.join("");
        var new_src = old_src + "_hover" + format;
        this.src = new_src;
    }
    function not_hover() {
        var old_src = this.src;
        old_src = old_src.split("");
        old_src.splice(old_src.length - 10, 6);
        old_src = old_src.join("");
        this.src = old_src;
    }

    //hover clients
    var clients_slider_img = document.querySelectorAll(".clients_slider_item img");
    for (var i = 0; i < clients_slider_img.length; i++){
        clients_slider_img[i].addEventListener("mouseover",hover);
        clients_slider_img[i].addEventListener("mouseout",not_hover);
    }

    // slider clients
    var clients_slider = document.querySelectorAll(".clients_slider");
    function slide_clients() {
        for(var i = 0; i < clients_slider.length; i++){
            if(clients_slider[i].classList.contains("vision_visible")){
                //проверка для последнего слайда
                if(i == 1){
                    clients_slider[i].classList.toggle("vision_visible");
                    clients_slider[i].classList.toggle("vision_none");
                    clients_slider[0].classList.toggle("vision_none");
                    clients_slider[0].classList.toggle("vision_visible");
                    break;
                }
                else{
                    clients_slider[i].classList.toggle("vision_visible");
                    clients_slider[i].classList.toggle("vision_none");
                    clients_slider[i + 1].classList.toggle("vision_none");
                    clients_slider[i + 1].classList.toggle("vision_visible");
                    break;
                }

            }
        }
    }
    var clients_slide = setInterval(slide_clients, 3000);

    //client comments
    var client_comment_item = document.querySelectorAll(".client_comment_item");
    var client_comment_controls = document.querySelectorAll(".client_comment_controls");

    client_comment_controls[0].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 0){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })
    client_comment_controls[1].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 1){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })
    client_comment_controls[2].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 2){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })
    client_comment_controls[3].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 3){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })

    //меняем изображение кнопки футера при наведение
    var footer_img = document.querySelector("footer a img");
    footer_img.addEventListener("mouseover",hover);
    footer_img.addEventListener("mouseout",not_hover);

    //Валидация формы
    var input_name = document.querySelector("input[type='text']");
    input_name.addEventListener("keypress", function () {
        if(/[^A-Za-z]/.test(input_name.value)){
            input_name.style.borderColor = "red";
        }
        else {
            input_name.style.borderColor ="#fff"
        }
    });
    var input_email = document.querySelector("input[type='email']");
    input_email.addEventListener("keypress", function () {
        if(/[^A-Za-z0-9@_.]/.test(input_email.value)){
            input_email.style.borderColor ="red";
        }
        else {
            input_email.style.borderColor = "#fff";
        }
    });
    var input_subject = document.querySelectorAll("input[type='text']")[1];
    input_subject.addEventListener("keypress", function () {
        if(/[^A-Za-z0-9]/.test(input_subject.value)){
            input_subject.style.borderColor ="red";
        }
        else {
            input_subject.style.borderColor = "#fff";
        }
    });
}