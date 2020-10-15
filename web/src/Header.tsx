import React from 'react'
import { Link } from 'react-router-dom';
import { setAccessToken } from './accessToken';
import { useLogoutMutation, useMeQuery } from "./generated/graphql";
import "./nav/nav.css" ;;

interface Props {}

export const Header: React.FC<Props> = () => { 
  // for using cache from apollo remove "network-only"
// { fetchPolicy: "network-only" } 
 //   const { data, loading } = useMeQuery({ fetchPolicy: "network-only" });
    const { data, loading } = useMeQuery();
    const [logout, {client}] = useLogoutMutation();
   // const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        const liarray = document.getElementsByClassName('navbarli');
        // "home" is programaticaly clicked but after login=>home there two clicked
        // const homeli = document.getElementById("homeli");
        // if (homeli) {
        //   homeli.classList.add('bgcolor');
        // } else { console.log("homeli is null "); }
        const messagebody = document.getElementsByClassName('messagebody')[0];
        for (let i = 0; i < liarray.length; i++) {
          liarray[i].addEventListener('click', function (e) {
              // e.preventDefault();
              liarray[i].classList.add('bgcolor');
              for (let j = 0; j < liarray.length; j++) {
                  if (j !== i) {
                      liarray[j].classList.remove('bgcolor');
                  }
              }
          });
      }
   
    let body: any = null;
    if (loading) { body = null; } 
    else if (data && data.me) { body = <div>you are logged in as: {data.me.email}</div>; } 
         else { body =  <div>not logged in</div>; }
    return (
        <header>Header.tsx
          <nav className="navbar">
          <div className="brand-title">React&Postgres&JWT
          </div>
          <button onClick={() => {navbarLinks.classList.toggle('active1');}} 
            className="toggle-button">
		      	<span className="bar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
		      	<span className="bar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	      		<span className="bar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	      	</button>
          <div className="navbar-links">
          <ul>
            <li  className="navbarli" id="homeli">
              <Link to="/"><span  className="navtitle">Home</span></Link>
            </li>
            <li className="navbarli">
              <Link to="/register"><span className="navtitle">register</span></Link>
            </li>
            <li className="navbarli">
              <Link to="/login"><span className="navtitle">login</span></Link>
            </li>
            <li className="navbarli">
              <Link to="/bye"><span className="navtitle">bye</span></Link>
            </li>
		  		</ul>
          </div>
          <div className="space"></div>
          </nav>
          <div>
            {
              !loading && data && data.me ? (
                <button  onClick={async () => {
                  await logout();
                  setAccessToken("");
                  await client!.resetStore(); 
                }} >logout</button>
              ) : null
            } 
            
          </div>
          <div className="statusdiv">
            <button onClick={() => { messagebody.classList.toggle('active2'); }}>Show my status
            </button>
            <span  className="messagebody">{ body }</span>
          </div>
          
        </header>
          
        );
}