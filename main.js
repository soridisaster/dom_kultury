//проветка даты и выбранных мест в полной рассидке
function IsEmpty() {
    let places1 = document.getElementsByClassName("place1")
    let alert_mess = document.getElementById("alert_mess1");
    let data1 = document.getElementById("data1").value;
    let arr1 = [...places1];
    
    if (arr1.some((element)=>element.classList.contains("selected1")) ){
       
        if(Date.parse(data1)){
            alert_mess.innerHTML = "Бронь оформлена"
        }
        else{
            alert_mess.innerHTML = "Выберите дату"
        }
    }
    else{
        alert_mess.innerHTML = "Вы не выбрали место"
    }
    
  }

  let submit1 = document.getElementById("submit1");
  if (submit1.addEventListener)
    submit1.addEventListener("click", IsEmpty, false);

//проверка даты и колва человек в стоячих местах

function IsEmpty2(){
    let data2 = document.getElementById("data2").value;
    let numberOfPlaces = document.getElementById("numberOfPlaces").value;
    let alert_mess2 = document.getElementById("alert_mess2");

    if((numberOfPlaces != "") || (numberOfPlaces != null)){
        if(Date.parse(data2)){
            
            if(numberOfPlaces <= 30){
                alert_mess2.innerHTML = "Бронь оформлена";
            }
            else{
                alert_mess2.innerHTML = "Максимальное число посетителей 30"
            }
        }
        else{
            alert_mess2.innerHTML = "Выберите дату";
        }
    }
    else{
        alert_mess2.innerHTML = "Выберите количество мест"
    }
}

let submit2 = document.getElementById("submit2");
  if (submit2.addEventListener)
    submit2.addEventListener("click", IsEmpty2, false);


//смешанные места

function IsEmpty3(){
    let places = document.getElementsByClassName("place")
    let arr = [...places];
    let numberOfPlaces2 = document.getElementById("numberOfPlaces2").value;
    let alert_mess = document.getElementById("alert_mess");


    if (arr.some((element)=>element.classList.contains("selected")) || (numberOfPlaces2 != 0)){
       
        if(numberOfPlaces2 <= 30){
            alert_mess.innerHTML = "Бронь оформлена";
        }
        else{
            alert_mess.innerHTML = "Максимальное число посетителей 20"
        }
            
        
    }
    else{
        alert_mess.innerHTML = "Вы не выбрали место"
    }
}

let submit3 = document.getElementById("submit3");
  if (submit3.addEventListener)
    submit3.addEventListener("click", IsEmpty3, false);