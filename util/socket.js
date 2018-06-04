//tchat avec Socket.io

module.exports.tchat=function tchat(io){
    io.on('connection', (socket)=>{
        console.log('Nouvel utilisateur connecté !')
    });
}

