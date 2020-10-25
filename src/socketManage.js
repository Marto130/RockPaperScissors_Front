import io from 'socket.io-client';



export const userLoginEntry= io.emit('userLoginEntry', ()=>{
  console.log('Ingreso nombre de usuario');
})
