/*const button = document.querySelector('#submit_button');

button.addEventListener('click', () => {
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;

    if(login == "123" && password == "123"){
        alert('Deu boa !!!');
    }

});*/


//

const form = document.querySelector('#form');

form.addEventListener('submit', () => {
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;

    if(login == "123" && password == "123"){
        alert('Deu boa !!!');
    }
});


btn1 = document.querySelector('#modalbtn');
btn2 = document.querySelector('#fecharModal');

const switchModal = () => {
    const modal = document.querySelector('.modal');

    if (modal.style.display == 'none') {

        modal.style.display = 'block';

      } else{

          modal.style.display = 'none';}
}


btn1.addEventListener('click', switchModal)
btn2.addEventListener('click', switchModal)













