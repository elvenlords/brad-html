/* A simple animation using Javascript & CSS */

/* Get the h1 element using the class selector*/
const text = document.querySelector(".fancy");
const stringText = text.textContent;

/* Split the text content string into an array of characters 
 * which we can animate by adding css properites.
 */
const splitText = stringText.split("");

/* Reset the text content to avoid text duplication when the 
 * animation effect is added later.
 */ 
text.textContent = "";

/* Loop through each character and make it into a span */
for(let i=0; i < splitText.length; i++) {
    if (splitText[i] === " ") {
        text.innerHTML += "<span>" + "&nbsp" + "</span>";
    } else {
        text.innerHTML += "<span>"+ splitText[i] + "</span>";
    }
}

/* Timing code */
let char = 0;

/* This tells the browser to call the function onTick
 * every 50 ms; try increasing the callback timer and
 * see how the output varies
 */
let timer = setInterval(onTick, 50);

/* This function will iterate through the spans and add 
 * the "fade" class to each span element. As the function 
 * is called every 50 ms we get a transition effect. The 
 * variable "char" is incremented during each invocation 
 * and the timer is cleared once the end of the string 
 * condition is reached.
 */
function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

/* Function to clear the timer once the animation is complete */
function complete() {
    clearInterval(timer);
    timer = null;
}
