import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigation = useNavigate();


    async function entrarLogin(){
        try {
                await axios.post( 'http://localhost:5000/usuario/login', { 
                    email: email, 
                    senha: senha 
            });
            
            navigation('/admin')
            
        } catch (err) {
            setErro( err.response.data.erro )
        }
    }
            

    return (
        <main className='page page-login'>
            <section className="box-login">

                <div className="bem-vindo">
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <h1> Seja Bem-vindo!</h1>
                </div>

                <div>
                    <div className='form-row'>
                        <label>E-mail:</label>
                        <input type='text' placeholder='Informe seu e-mail' value={email} onChange={ e => setEmail (e.target.value) } />
                    </div>
                    <div className='form-row'>
                        <label>Senha:</label>
                        <input type='password' placeholder='***' value={senha} onChange={ e => setSenha (e.target.value) } />
                    </div>
                    <div className='form-entrar'>
                        <button className='btn-black' onClick={ entrarLogin }>ENTRAR</button> 
                    </div>
                    <div className='form-entrar invalido'>
                        { erro }
                    </div>
                </div>

            </section>
        </main>
    )
}