import { useState } from 'react'
import axios from 'axios'
import './index.scss'

export default function Index() {

    [email, setEmail] = useState('');
    [senha, setSenha] = useState('');


    function entrarLogin(){
        
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
                        Credenciais inválidas
                    </div>
                </div>

            </section>
        </main>
    )
}