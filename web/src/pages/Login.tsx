import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useLoginMutation } from '../generated/graphql';
import { setAccessToken } from '../accessToken';

interface Props {}

export const Login: React.FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [login] = useLoginMutation();
        return (
           <fieldset><legend>login</legend>
             <form onSubmit={async e => {
               e.preventDefault()
               console.log("form submitted");
               const response =  await login({
                 variables: {
                   email,
                   password
                 }
               });
               console.log(response);
               if (response && response.data) {
                 setAccessToken(response.data.login.accessToken);
               }
               history.push("/");
             }}>
               <div>
                 <input value={email}
                   placeholder="email" 
                   required
                   onChange={e => { setEmail(e.target.value); }} />
               </div>
               <div>
                 <input type="password"
                   value={password} 
                   placeholder="password" 
                   required
                   onChange={e => { setPassword(e.target.value); }} />
               </div>
               <button type="submit">login</button>
             </form>
           </fieldset>
        );
}