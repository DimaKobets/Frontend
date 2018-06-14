import { user } from './user.js';

export function confirmAge(){
var age = window.prompt("How old are you?");
if (age >= "18"){
    showMessage();
}
else {
    location.href = 'https://youtu.be/OK03o3BHafk' ;
    Location.assign(location.href);
}
}

export function showMessage() {
    alert('Hello ' + user.name + '. You have access!');
}