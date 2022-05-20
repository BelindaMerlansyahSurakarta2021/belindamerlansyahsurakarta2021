const nama = document.querySelector('#nama');
const hari = document.querySelector('#WIB');
const activity = document.querySelector('#Activity');
const activity1 = document.querySelector('#Activity1');
const activity2 = document.querySelector('#Activity2');
const activity3 = document.querySelector('#Activity3');
const activity4 = document.querySelector('#Activity4');
const activity5 = document.querySelector('#Activity5');
const activity6 = document.querySelector('#Activity6');



nama.addEventListener('click', updateName);
hari.addEventListener('click', updateDate);
activity.addEventListener('click',updateactivity);
activity1.addEventListener('click',updateactivity1);
activity2.addEventListener('click',updateactivity2);
activity3.addEventListener('click',updateactivity3);
activity4.addEventListener('click',updateactivity4);
activity5.addEventListener('click',updateactivity5);
activity6.addEventListener('click',updateactivity6)




function updateName(){
    const name =prompt('Masukkan nama : ');
    nama.textContent = name;
 
}

function updateDate(){
    const date =prompt('Masukkan Activity ke-1 : ');
    WIB.textContent = date;
}

function updateactivity1(){
    const matkul=prompt('Masukkan Activity ke-2 : ');
    Activity.textContent = activity1;
}

function updateactivity2(){
    const matkul2=prompt('Masukkan Activity ke-3 : ');
    Activity1.textContent = activity2;
}

function updateactivity3(){
    const matkul3=prompt('Masukkan Activity ke-4 : ');
    Activity2.textContent = activity3;
}
function updateactivity4(){
    const matkul4=prompt('Masukkan Activity ke-5 : ');
    Activity3.textContent = activity4;
}
function updateactivity5(){
    const matkul5=prompt('Masukkan Activity ke-6 : ');
    Activity4.textContent = activity5;
}
function updateactivity6(){
    const matkul5=prompt('Masukkan Activity ke-6 : ');
    Activity4.textContent = activity6;
}