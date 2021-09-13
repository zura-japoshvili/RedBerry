const formStorage = [
    {
        makeForm: [
            {for: "fname",text: "სახელი*",minLength: 3, maxLength: 255, p_class: "fname-p"},
            {for: "lname",text: "გვარი*",minLength: 3, maxLength: 255, p_class: "lname-p"},
            {for: "email",text: "მეილი*",minLength: 3, maxLength: 255, p_class: "email-p"}
        ],
        forImg: {
            location: "img/Group 5.svg",
            alt: "Main Img"
        },
        alert: "*-ით მონიშნული ველების შევსება სავალდებულოა"
    },
    {
        
        imgLocation: "img/Group 4.svg"
    },
    {},
    {}
];


const maxLength = formStorage.length;
let currentIndex = 0;
document.querySelector(".max-num").textContent = maxLength;
document.querySelector(".current-num").textContent = currentIndex + 1;

const form = document.querySelector(".form");
const main_img = document.querySelector(".main-img");
const form_cont = document.querySelector(".form-cont");

const r_arrow = document.querySelector(".r-arrow");

function distributorFunc(){
    if(currentIndex == 0){
        firstPage()
    }
}

function firstPage(){
    for(let i = 0; i< formStorage[currentIndex].makeForm.length;i++){
        console.log(formStorage[currentIndex].makeForm[i].for);
        let label = document.createElement("label");
        label.classList.add('question');
        form.appendChild(label);
        label.textContent = formStorage[currentIndex].makeForm[i].text;
        label.setAttribute("for", `${formStorage[currentIndex].makeForm[i].for}`);

        let input = document.createElement("input");
        form.appendChild(input);
        input.setAttribute("type", "text");
        input.setAttribute("name", `${formStorage[currentIndex].makeForm[i].for}`);
        input.setAttribute("id",`${formStorage[currentIndex].makeForm[i].for}`);
        input.setAttribute("minLength",`${formStorage[currentIndex].makeForm[i].minLength}`);
        input.setAttribute("maxLength",`${formStorage[currentIndex].makeForm[i].maxLength}`);
        input.required = true;
        
        let paragraph = document.createElement("p");
        form.append(paragraph);
        paragraph.classList.add(`${formStorage[currentIndex].makeForm[i].p_class}`);
    }
    let alert_p = document.createElement("p");
    form_cont.appendChild(alert_p);
    alert_p.textContent = formStorage[currentIndex].alert;
    main_img.src = formStorage[currentIndex].forImg.location;
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
        r_arrow.classList.add("show");
    }
}


