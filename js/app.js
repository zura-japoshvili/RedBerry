const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page"); 
const thirdPage = document.querySelector(".third-page");
const forthPage = document.querySelector(".forth-page");



const main_img = document.querySelector(".main-img");

let interval;

const currentPage = [
    {
        imgLoc: "img/Group5.svg",
        makeVisible(){
            firstPage.style.display = "flex"
            secondPage.style.display = "none"
            main_img.src = this.imgLoc
            interval = setInterval(() => {
              checkFirstPage();
            },);
        }
    },
    {
        imgLoc: "img/Group4.svg",
        makeVisible(){
            firstPage.style.display = "none"
            thirdPage.style.display = "none"
            secondPage.style.display = "flex"
            main_img.src = this.imgLoc;
            interval = setInterval(() => {
                check2ndPage();  
            },);
        }
    },
    {
        imgLoc: "img/doctor2.svg",
        makeVisible(){
            secondPage.style.display = "none"
            forthPage.style.display = "none"
            thirdPage.style.display = "flex"
            main_img.src = this.imgLoc
            interval = setInterval(() => {
                check3rdPage(); 
            },);
        }
    },
    {
        imgLoc: "img/Group6.svg",
        makeVisible(){
            thirdPage.style.display = "none";
            forthPage.style.display = "flex"
            main_img.src = this.imgLoc
            setInterval(() => {
               correctArrows(); 
            }, interval);
        }
    }
];



const maxLength = currentPage.length;
let currentIndex = 0;
document.querySelector(".max-num").textContent = maxLength;


const form = document.querySelector(".form");
const form_cont = document.querySelector(".form-cont");

const r_arrow = document.querySelector(".r-arrow");
const l_arrow = document.querySelector(".l-arrow");


const start_btn = document.querySelector(".start-btn");
const start = document.querySelector(".start");
const content = document.querySelector(".content");


addEventListener("load", function(){
    check2ndPage();
    setTimeout(() =>{
        start_btn.style.display = "flex";
    },500);
});

start_btn.addEventListener("click", function(){
    start.style.display = "none";
    content.style.display = "unset";
    distributorFunc();
});

r_arrow.addEventListener("click", function(){
    clearInterval(interval);
    currentIndex++;
    distributorFunc();
});
l_arrow.addEventListener("click", function(){
    clearInterval(interval);
    currentIndex--;
    distributorFunc();
});

function distributorFunc(){
    document.querySelector(".current-num").textContent = currentIndex + 1;
    if(currentIndex == 0){
        currentPage[currentIndex].makeVisible();
    }else if(currentIndex == 1){
        currentPage[currentIndex].makeVisible();
    }else if(currentIndex == 2){
        currentPage[currentIndex].makeVisible();
    }else if(currentIndex == 3){
        currentPage[currentIndex].makeVisible();
    }
}



function checkFirstPage(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const fname_alert = document.querySelector(".fname-p");
    const lname_alert = document.querySelector(".lname-p");
    const email_alert = document.querySelector(".email-p");
    let checkEmail = /.@redberry.ge\b/.test(email);
    let checkName  = /[ა-ჰ, a-z, A-Z]/.test(fname);
    let checkLname  = /[ა-ჰ, a-z, A-Z]/.test(lname);

    if(fname.length < 3 || fname.length < 3 || checkName == false){
        if(fname.length < 3){
            fname_alert.textContent = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        }else if(fname.length < 3){
            fname_alert.textContent = "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        }else if(checkWord == false){
            fname_alert.textContent = "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
        }
    }if(lname.length < 3 || lname.length > 255 || checkLname == false){
        if(lname.length < 3){
            lname_alert.textContent = "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        }else if(lname.length > 255){
            lname_alert.textContent = "გრავის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        }else if(checkLname == false){
            lname_alert.textContent = "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
        }
    }else if(checkEmail == false){
        fname_alert.textContent = "";
        lname_alert.textContent = "";
        email_alert.textContent = "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
    }else{
        email_alert.textContent = "";
        r_arrow.style.display = "flex";
    }
}

function check2ndPage(){
    const antiBody_Q = document.querySelector(".antibody-q");
    const antiBody_Num = document.querySelector(".antibody_num");
    const checkDate = document.querySelector(".checkdate");

    r_arrow.style.display = "none";
    const check_c19 = document.querySelectorAll('input[name=check-c19]');
    const antibody = document.querySelectorAll('input[name=antibody]');

    let numbers = document.getElementById("antibody-num").value;
    let quantity = document.getElementById("quantity").value;
    let date_19 = document.getElementById("date_19").value;

    if(check_c19[0].checked){
        r_arrow.style.display = "none";
        antiBody_Q.style.display = "unset";
        if(antibody[0].checked){
            antiBody_Num.style.display = "unset";
            r_arrow.style.display = "none";
            checkDate.style.display = "none";
            if(numbers > 0 && quantity > 0){
                r_arrow.style.display = 'flex';
            }
            else{
                r_arrow.style.display = 'none';
            }
        }else if(antibody[1].checked){
            checkDate.style.display = "unset";
            antiBody_Num.style.display = "none";
            if(date_19 !== ""){
                r_arrow.style.display = 'flex';
            }
            else{
                r_arrow.style.display = 'none';
            }
        }
    }if(check_c19[1].checked || check_c19[2].checked){
        antiBody_Q.style.display = "none";
        r_arrow.style.display = 'flex';
    }  
}


function check3rdPage(){
    const chooseStage = document.querySelector(".choose_stage");
    const check_step_p = document.querySelector(".check-step-p");
    const waiting_for = document.querySelector(".waiting-for");
    const only_link = document.querySelector(".only-link");
    const text_link = document.querySelector(".text-link");

    const vaccinated = document.querySelectorAll('input[name=vaccinated]');
    const check_step = document.querySelectorAll("input[name=check-step]");
    const waiting = document.querySelectorAll("input[name=waiting]");


    if(vaccinated[0].checked){
        chooseStage.style.display = "unset";
        waiting_for.style.display = "none";
        if(check_step[0].checked || check_step[1].checked){
            r_arrow.style.display = "flex";
            l_arrow.style.display = "flex";
        }else if(check_step[2].checked){
            check_step_p.style.display = "unset";
        }else{
            r_arrow.style.display = "none";
            l_arrow.style.display = "none";
            check_step_p.style.display = "none";
        }
    }
    else if(vaccinated[1].checked){
        chooseStage.style.display = "none";
        waiting_for.style.display = "unset";
        if(waiting[0].checked){
            r_arrow.style.display = "flex";
            l_arrow.style.display = "flex";
        }else if(waiting[1].checked){
            r_arrow.style.display = "flex";
            l_arrow.style.display = "flex";
            only_link.style.display = "unset";
        }else if(waiting[2].checked){
            r_arrow.style.display = "flex";
            l_arrow.style.display = "flex";
            text_link.style.display = "unset";
        }
        else{
            r_arrow.style.display = "none";
            l_arrow.style.display = "none";
            text_link.style.display = "none";
            only_link.style.display = "none";
        }

    }
    else{
        chooseStage.style.display = "none";
        waiting_for.style.display = "none";
        r_arrow.style.display = "none";
        l_arrow.style.display = "none";
    }
}

function correctArrows(){
    if(currentIndex == 0){
        l_arrow.style.display = "none";
    }else if(currentIndex == 3){
        r_arrow.style.display = "none";
    }else{
        l_arrow.style.display = "flex";
        r_arrow.style.display = "flex";
    }
}
