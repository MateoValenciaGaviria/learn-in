import React, { useEffect } from 'react';
import axios from 'axios';
import { UserType } from '../../utils/types/UserType';

interface LoginProps {
    onUserChange: (user: UserType) => void;
}

export const Login: React.FC<LoginProps> = ({ onUserChange }) => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleLogin = async (e: any) => {
        e.preventDefault();

        const authObject = { 'project-ID': "7a20b47a-8235-45bd-a653-6b7379fd4039", 'User-Name': username, 'User-Secret': password };

        try {
            //username / password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            //works out -> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            //error -> try with new username...
            setError("Ups, ocurrió un error :( por favor revisa tus credenciales");
        }

    }

    return (
        <div className="login">
            <h1 className="login__platform-title">Learn-in</h1>
            <div className="login__container">
                <h3 className="login__title">Inicia Sesión</h3>
                <form onSubmit={handleLogin}>
                    <input type="text" className="login__input" placeholder="Usuario" value={username} onChange={(e) => { setUsername(e.target.value) }} required></input>
                    <input type="password" className="login__input" placeholder="Contraseña" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                    <button type="submit" className="login__btn">Iniciar Sesión</button>
                    <p className="login__error">{error}</p>
                </form>
                <p className="login__password-lost">¿Olvidaste tu contraseña?</p>
            </div>
        </div>
    );
}