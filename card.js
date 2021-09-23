const myForm = document.querySelector('#the-form');

const theBody = document.querySelector('body');

myForm.addEventListener("submit", e => {
    e.preventDefault();
    const greetingMessage = e.target.greeting.value;
    const fullMessage = e.target.msg.value;

    theBody.textContent = greetingMessage;

    console.log(greetingMessage);
    console.log(fullMessage);
});
 