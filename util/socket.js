//tchat avec Socket.io

module.exports.tchat=function tchat(io){
    io.on('connection', (socket)=>{
        console.log('Nouvel utilisateur connecté !')
        // traitement de l'evenement "new user"
        socket.on('newUser',(username)=>{
            console.log("Autentification (coté serveur)");
            console.log(username);
        })
    }); 
}

