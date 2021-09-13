const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page"); 

const main_img = document.querySelector(".main-img");

let interval;

const currentPage = [
    {
        imgLoc: "img/Group 5.svg",
        makeVisible(){
            firstPage.style.display = "flex"
            main_img.src = this.imgLoc;
            interval = setInterval(() => {
              checkFirstPage();
            },);
        }
    },
    {
        imgLoc: "img/Group 4.svg",
        makeVisible(){
            firstPage.style.display = "none";
            secondPage.style.display = "flex"
            main_img.src = this.imgLoc;
            interval = setInterval(() => {
                check2ndPage();  
            },);
        }
    },
    {},
    {}
];



const maxLength = currentPage.length;
let currentIndex = 0;
document.querySelector(".max-num").textContent = maxLength;
document.querySelector(".current-num").textContent = currentIndex + 1;

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
    if(currentIndex == 0){
        currentPage[currentIndex].makeVisible();
    }else if(currentIndex == 1){
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

