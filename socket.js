module.exports = (io) => {
  io.on('connection', (socket) => {
    // 유저 접속 확인
    console.log('A user is now connected') 

    //메시지 
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      console.log("message: ", msg);
    });

    // 유저 접속 종료 확인
    socket.on('disconnect',() => {
      console.log('disconnected');
    });
  });
};
