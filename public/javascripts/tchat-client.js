console.log('Ouverture du tchat coté client');
let socket=io(); 

let formConnection = document.getElementById('form-connection');
let inputName = document.getElementById('name');

formConnection.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('Autentification');
    const username= inputName.value;

    //Emission de l'evenement vers le serveur 
    socket.emit('newUser', username);
})