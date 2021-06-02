import{FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Button} from '../../components/Button';
import {Container,Content,FormContainer, InputContainer,Background,Error} from './styles';
import api from '../../services/api';

interface FormData{
    email: string;
    password: string;
}



export function Login(){

    const {register,handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data=> api.post('/auth', data).then(response=> alert(response.data)))

    return(
       <Container>
           <Content>
               <FormContainer>
                   <h2>Faça seu login</h2>
                   <form onSubmit={onSubmit}>
                       <InputContainer>
                            <FiMail size={40}/>
                            <input
                             type="email"
                             placeholder="email"
                             {...register("email", {required:true})}
                             />
                       </InputContainer>
                       {errors.email && <Error>O preenchimento do campo é obrigatorio</Error>}
                       <InputContainer>
                            <FiLock size={40}/>
                            <input
                             type="password"
                             placeholder="senha"
                             {...register("password", {required:true})}
                             />
                       </InputContainer>
                       {errors.password && <Error>O preenchimento do campo é obrigatorio</Error>}
                       <Button type="submit">Entrar</Button>
                   </form>
                   <Link to="/register">
                       <FiLogIn size={40}/>
                       Cadastre seu acesso
                   </Link>
               </FormContainer>
           </Content>
           <Background/>
       </Container>
    )
}