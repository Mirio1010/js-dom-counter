//let value = document.getElementById('value');

// let decrease = document.querySelector('.decrease');
// let reset = document.querySelector('.reset');
// let increase = document.querySelector('.increase');

// increase.addEventListener('click', function() {
//     value.textContent++;
//     if (value.textContent > 0) {
//         value.style.color = 'green';
//     } 
// })

// decrease.addEventListener('click', function() {
//     value.textContent--;
//     if (value.textContent < 0) {
//         value.style.color = 'red';
//     }
// })

// reset.addEventListener('click', function() {
//     value.textContent = 0;
//     value.style.color = "hsl(209, 61%, 16%)";
// })



/* Below you will find a better approach, why?

Less repeated code: you don’t write 3 separate listeners.

Scales better: if you add more buttons (x2, +5, etc.), you don’t have to create new variables and listeners—just add a class and extend the logic.

Cleaner structure: one place controls how the counter changes.
*/
let buttons = document.querySelectorAll('.btn');
let count = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) count--;
    else if (styles.contains("increase")) count++;
    else count = 0;

    value.textContent = count;

    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "hsl(209, 61%, 16%)";
  });
});


