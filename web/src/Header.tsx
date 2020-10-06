import React from 'react'
import { Link } from 'react-router-dom';
import { setAccessToken } from './accessToken';
import { useLogoutMutation, useMeQuery } from "./generated/graphql";

interface Props {}

export const Header: React.FC<Props> = () => { 
  // for using cache from apollo remove "network-only"
// { fetchPolicy: "network-only" } 
 //   const { data, loading } = useMeQuery({ fetchPolicy: "network-only" });
    const { data, loading } = useMeQuery();
    const [logout, {client}] = useLogoutMutation();
    let body: any = null;
    if (loading) { body = null; } 
    else if (data && data.me) { body = <div>you are logged in as: {data.me.email}</div>; } 
         else { body =  <div>not logged in</div>; }
    return (
          //  <fieldset><legend>Header page</legend>
        <header>header page
          <div>
            <Link to="/"><strong><b>Home</b></strong></Link>
          </div>
          <div>
            <Link to="/register"><strong>register</strong></Link>
          </div>
          <div>
          <Link to="/login"><b>login</b></Link>
          </div>
          <div>
            <Link to="/bye"><strong><b>Bye</b></strong></Link>
          </div>
          <div>
            {
              !loading && data && data.me ? (
                <button  onClick={async () => {
                  await logout();
                  setAccessToken("");
                  await client!.resetStore(); // clean cache
                }} >logout</button>
              ) : null
            } 
            {/* <button  onClick={async () => {
              await logout();
              setAccessToken("");
              await client!.resetStore(); // clean cache
            }} >logout</button> */}
          </div>
          {/* <div>
            <Link to="/hello"><strong><b>myHello</b></strong></Link>
          </div> */}
          { body }
        </header>
          //  </fieldset>
        );
}