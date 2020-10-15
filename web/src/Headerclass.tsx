import React from 'react'
import { Link } from 'react-router-dom';
import { setAccessToken } from './accessToken';
import { useLogoutMutation, useMeQuery } from "./generated/graphql";
import "./nav/nav.css" ;

export class Header1 extends React.Component {
	constructor(props: Readonly<{}>) {
		super(props);
		// this.myRef = React.createRef();
	}
	componentDidMount() {
    // const { data, loading } = useMeQuery();
		// const [logout, {client}] = useLogoutMutation();
		// this.navbarLinks = document.getElementsByClassName('navbar-links')[0];
		const liarray = document.getElementsByClassName('navbarli');
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
	}
    render() {
			
        return (
            <header>Header1.tsx
                      
          <nav className="navbar">
          <div className="brand-title">React&Postgres&JWT
          </div>
					<button 
					// onClick={() => {this.navbarLinks.classList.toggle('active1');}} 

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
              // !loading && data && data.me ? (
              //   <button  onClick={async () => {
              //     await logout();
              //     setAccessToken("");
              //     await client!.resetStore(); 
              //   }} >logout</button>
              // ) : null
            } 
            
          </div>
          {/* <div className="statusdiv">
            <button onClick={() => { messagebody.classList.toggle('active2'); }}>Show my status
            </button>
            <span  className="messagebody">{ body }</span>
          </div> */}
          
        </header>
          
        );
    }
}