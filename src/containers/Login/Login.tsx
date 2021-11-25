import React from 'react';
import axios from 'axios';
import { UserType } from '../../utils/types/UserType';

interface LoginProps {

}

export const Login: React.FC<LoginProps> = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [server, setServer] = React.useState("empty");
    const [error, setError] = React.useState("");
    var projectID: string = "";

    const handleLogin = async (e: any) => {
        e.preventDefault();
        
        if(server === "servidor1"){
            projectID = "7a20b47a-8235-45bd-a653-6b7379fd4039";
        }else if(server === "servidor2"){
            projectID = "9e334154-e11f-4718-839c-0a2181d3d599";
        }
        
        const authObject = { 'project-ID':  projectID, 'User-Name': username, 'User-Secret': password };

        try {
            //username / password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            //works out -> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('server', server);

            window.location.reload();

        } catch (error) {
            //error -> try with new username...
            if(server === "empty"){
                setError("Debes seleccionar un servidor");
            }else{
                setError("Ups, ocurrió un error :( por favor revisa tus credenciales");
            }

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
                    <select className="login__select" value={server} onChange={(e) => { setServer(e.target.value) }} name="server" id="server">
                        <option value="empty" disabled className="login__select-option--disable">Selecciona un servidor</option>
                        <option value="servidor1" className="login__select-option">Servidor 1</option>
                        <option value="servidor2" className="login__select-option">Servidor 2</option>
                    </select>
                    <button type="submit" className="login__btn">Iniciar Sesión</button>
                    <p className="login__error">{error}</p>
                </form>
                <p className="login__password-lost">¿Olvidaste tu contraseña?</p>
            </div>
        </div>
    );
}