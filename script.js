/*=================================================================*/
/*                              start tabs                         */
/*=================================================================*/
let tab = document.querySelectorAll('.tabs__item');
    
tab.forEach(function(element){
    element.onclick = showTabs;   
});
 
function showTabs(){
    let data = this.getAttribute('data');
    let tabBody = document.querySelectorAll('.tabs__block');
    for(let i = 0; i < tabBody.length; i++){  
        tabBody[i].style.display = 'none'; 
    };
    document.querySelector(`.tabs__block[data="${data}"]`).style.display = 'block';

    for(let i = 0; i < tab.length; i++){
        tab[i].style.background = '#fff';
        tab[i].style.color = '#000';
    };
    this.style.background = '#03A3FF';
    this.style.color = '#fff';
};
/*=================================================================*/
/*                               end tabs                          */
/*=================================================================*/
/*=================================================================*/
/*                              start tabs_2                       */
/*=================================================================*/
let tab2 = document.querySelectorAll('.tabs__item_2');
    
tab2.forEach(function(element){
    element.onclick = showTabs2;
});
 
function showTabs2(){
    let data = this.getAttribute('data');
    let tabBody = document.querySelectorAll('.tabs__block_2');
    for(let i = 0; i < tabBody.length; i++){ 
        tabBody[i].style.display = 'none';  
    };
    document.querySelector(`.tabs__block_2[data="${data}"]`).style.display = 'block';

    for(let i = 0; i < tab2.length; i++){
        tab2[i].style.background = '#fff';
        tab2[i].style.color = '#000';
    };
    this.style.background = '#03A3FF';
    this.style.color = '#fff';
};
/*=================================================================*/
/*                               end tabs_2                        */
/*=================================================================*/
/*=================================================================*/
/*                  start progress input[type="range"]             */
/*=================================================================*/
/**
 * <input type="range" name="" id=" "min="0" max="365" value="50" step="1">
 * 
 *  allRang[i].defaultValue - value="50" - выставлять для каждого input
 *  allR[j].max - max="365" - - выставлять для каждого input
 * 
 * if (allR[j].max == 365) - также менять в условиях, при маштабировании или изменении
 */


window.addEventListener('load', (event) => {
  document.querySelector('.tabs__item:nth-child(1)').click();
  document.querySelector('.tab_active').click();
  document.querySelector('.tab_active_2').click();

  let ra = document.querySelector('input[type="range"]');
  event = ra.value;
  ran(event); 
});

function ran(n){
  let allRang = document.querySelectorAll('input[type="range"]');

  for (let i = 0; i < allRang.length; i++) {
      if (allRang[i].defaultValue == 4000000) {
          n = allRang[i].defaultValue*100/allRang[i].max  + "%";
          allRang[i].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
          allRang[i].style.borderRadius = "5px";
      } else if (allRang[i].defaultValue == 20) {
          n = allRang[i].defaultValue*100/allRang[i].max  + "%";
          allRang[i].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
          allRang[i].style.borderRadius = "5px";
      } else if (allRang[i].defaultValue == 18) {
        n = allRang[i].defaultValue*100/allRang[i].max  + "%";
        allRang[i].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
        allRang[i].style.borderRadius = "5px";
      } else if (allRang[i].defaultValue == 50) {
          n = allRang[i].defaultValue*100/allRang[i].max  + "%";
          allRang[i].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
          allRang[i].style.borderRadius = "5px";
      }
  }
}
//======================================================
let allR = document.querySelectorAll('input[type="range"]');

for (let j = 0; j < allR.length; j++) {
  if (allR[j].max == 365) {
      allR[j].addEventListener('mousemove', function () {
          let allCurrent = document.querySelectorAll('.current span');
          let event = allR[j].value;
          let pix = allR[j].max/100;
          let n = allR[j].value/pix + "%";
          allCurrent[j].textContent = event;
          allR[j].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
      });
  }
  if (allR[j].max == 31) {
      allR[j].addEventListener('mousemove', function () {
          let allCurrent = document.querySelectorAll('.current span');
          let event = allR[j].value;
          let pix = allR[j].max/100;
          let n = allR[j].value/pix + "%";
          allCurrent[j].textContent = event;
          allR[j].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
      });
  }
  if (allR[j].max == 36) {
    allR[j].addEventListener('mousemove', function () {
        let allCurrent = document.querySelectorAll('.current span');
        let event = allR[j].value;
        let pix = allR[j].max/100;
        let n = allR[j].value/pix + "%";
        allCurrent[j].textContent = event;
        allR[j].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
    });
}
  if (allR[j].max == 15000000) {
      allR[j].addEventListener('mousemove', function () {
          let allCurrent = document.querySelectorAll('.current span');
          let event = allR[j].value;
          let pix = allR[j].max/100;
          let n = allR[j].value/pix + "%";
          allCurrent[j].textContent = new Intl.NumberFormat('ru-RU').format(event);
          allR[j].style.backgroundImage = "-webkit-linear-gradient(left , #03A3FF " + n + ", #e8e8e8 " + n + ", #e8e8e8 100%)";
      });
  }
}
/*=================================================================*/
/*                  end progress input[type="range"]               */
/*=================================================================*/
