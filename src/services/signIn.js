import api from "./api";



export default function singIn(email,password){
    try{
        await api.post('/api/singIn/',{
            email:email,
            password:password
        });
        return Response
    }catch(erro){
        return console.log(erro)
    }
}