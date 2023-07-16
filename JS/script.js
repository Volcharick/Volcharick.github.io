const stringFirst = document.querySelector(".list__string");
const stringArray = document.querySelectorAll(".list__string");
const arrow = document.querySelector(".list__arrow-down");
const cross = document.querySelectorAll(".list__cross")
const date = document.querySelectorAll(".up-part__datetime")
const checkbox = document.querySelectorAll(".up-part__checkbox")
const checkbox_id_1 = document.querySelectorAll("#up-part__checkbox-1")
const checkbox_id_2 = document.querySelectorAll("#up-part__checkbox-2")
const date_id_1 = document.getElementById("up-part__date-1")
const date_id_2 = document.getElementById("up-part__date-2")




const mainForm = document.forms.main
mainForm.addEventListener("submit", function(event){
    console.log("Форма отправляется")
})

// arrow.insertAdjacentHTML("afterend",`<div class="list__string"> <img src="./img/Plus.png" alt="" class="list__cross"> <div class="list__substring">Рыба</div></div`);

function addString(){
    stringFirst[stringFirst.length-1].insertAdjacentHTML("afterend",`<div class="list__string"> <img src="./img/Plus.png" alt="" class="list__cross"><div class="list__substring">Рыба</div></div>`);
    arrow.scrollIntoView(true);
};
function addDisableFirst(){
    if (date_id_1.disabled == false){
        date_id_1.disabled = true;
    }
    else {
        date_id_1.disabled = false;
    }
    
};
function addDisableSecond(){
    if (date_id_2.disabled == false){
        date_id_2.disabled = true;
    }
    else {
        date_id_2.disabled = false;
    }
}
// function deleteCross(given){
//     given.closest(".list__string").remove() ;
// }
arrow.addEventListener("click",addString);
checkbox[0].addEventListener("click",addDisableFirst);
checkbox[1].addEventListener("click",addDisableSecond);
// cross.addEventListener("click",deleteCross);

function deleteCross(event){
        event.target.closest(".list__string").remove()
}

cross.forEach( function deleteCrossAll(item,index,array){
    item.addEventListener("click",deleteCross)
})


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0){
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e){
            const popupName = popupLink.getAttribute('href').replace("#", "")
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })    
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
    for (let index = 0; index < popupCloseIcon.length; index++){
        const el = popupCloseIcon[index]
        el.addEventListener('click', function (e) {
            popupCloseIcon(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup){
    if (curentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')){
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true){
    if (unlock){
        popupActive.classList.remove('open');
        if (doUnlock){
            bodyUnlock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    for (let index= 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout( function() { 
        unlock = true;
    }, timeout);
}

function bodyUnlock(){
    setTimeout(function() {
        for (let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e){
    if (e.which == 27){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

const ingredient = document.querySelectorAll(".popup-ingredient__ingredient");
const category = document.querySelectorAll(".popup-category__category") 
const blockIngredient = document.querySelectorAll(".popup-ingredient");
const arrowList = document.querySelectorAll(".list-popup__arrow")
const blockIngredientAll = document.querySelectorAll('.popup-category')
const listArray = document.querySelectorAll('.list-popup__array')
const popup = document.querySelector(".popup")
const popupSubBlock = document.querySelectorAll(".list-popup__subblock")
const bigListBlock = document.querySelector(".list")


function useIngredients(event){
    if (event.target.closest(".popup-ingredient").classList.contains('popup-ingredient_background')){
        event.target.closest(".popup-ingredient").classList.remove('popup-ingredient_background');
    }
    else{
        event.target.closest(".popup-ingredient").classList.add('popup-ingredient_background');
    }
}

function useBlockIngredients(event){
    if (event.target.closest(".popup-category").nextElementSibling.classList.contains('list-popup__array_background')){
        event.target.closest(".popup-category").nextElementSibling.classList.remove('list-popup__array_background');
    } else{
        event.target.closest(".popup-category").nextElementSibling.classList.add('list-popup__array_background');
    }
}

function useArrowList(event){
    if (event.target.closest(".popup-category").nextElementSibling.hidden == false){
        event.target.closest(".popup-category").nextElementSibling.hidden = true;
        blockIngredientAll[blockIngredientAll.length-1].classList.add("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.remove("list-popup__arrow_rotate");
    } else{
        event.target.closest(".popup-category").nextElementSibling.hidden = false;
        blockIngredientAll[blockIngredientAll.length-1].classList.remove("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.add("list-popup__arrow_rotate");
    }
}
function usePopup(event){
    let mas = []

    if (true) {
        let sum = 0
        popupSubBlock.forEach(function useSubBlockList(item,index,array){
            let elemArray= item.firstElementChild.nextElementSibling;
            let masChild = elemArray.children
            if (elemArray.classList.contains("list-popup__array_background")){
                sum+=masChild.length;
                console.log(sum);
                mas.push(item.firstElementChild.textContent.replace(/\n/g, '').trim());
            } else {
                for( let index = 0; index < masChild.length;index++){
                    if (elemArray.children[index].classList.contains("popup-ingredient_background")){
                        sum+=1;
                        console.log(sum);
                        mas.push(elemArray.children[index].textContent.replace(/\n/g, '').trim());
                    }
                }
            }
        })
        console.log(mas)
        if (event.target.closest(".popup__content") == null){
            if (sum > 0 && sum<=5){
                stringFirst.remove()
            } else if (sum > 5) {
                arrow.hidden = false;
                stringFirst.remove()
            } else {
                arrow.hidden = true;
            }
            mas.reverse().forEach(function sortMas(item,index,array){
            console.log(item);
            bigListBlock.insertAdjacentHTML("afterbegin",`<div class="list__string"> <img src="./img/Plus.png" alt="" class="list__cross"><div class="list__substring">${item}</div></div>`);

        })}
    }
}

blockIngredient.forEach( function useIngredientsAll(item, index, array){
    item.addEventListener("click",useIngredients)
});

blockIngredientAll.forEach( function useBlockIngredientsAll(item,index,array){
    item.addEventListener("dblclick",useBlockIngredients)
});

arrowList.forEach( function useArrowListAll(item,index,array){
    item.addEventListener("click",useArrowList)
});
popup.addEventListener("click", usePopup);
