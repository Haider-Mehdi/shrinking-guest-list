"use strict";
let guestList = [
    'Asad Raza',
    'Zamaan Khan',
    'Daniyal Qaiser',
    'Rehan Asif',
    'Umair Gujjar',
    'Huzaifa Gujjar'
];
// Step 1
console.log(`I can invite only two people for dinner.`);
//   Step 2
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, Due to some reason I can't invite you to dinner.`);
}
//   Step 3
guestList.forEach((guest) => {
    console.log(`Hi ${guest}, you're still invited to dinner.`);
});
// Step 4
// guestList.forEach((guest) => {
guestList.pop();
guestList.pop();
// Step 5
console.log(`Guest List after dinner:`, guestList);
