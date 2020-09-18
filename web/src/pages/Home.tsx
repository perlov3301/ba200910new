import React from 'react'
import { useUsersQuery } from '../generated/graphql';

interface Props {

}

export const Home: React.FC<Props> = () => {
  const {data, } = useUsersQuery({fetchPolicy: 'network-only'});
  if (!data) { return <fieldset><legend>home: users</legend>loading...</fieldset>; }
        return (
            <fieldset><legend>home: users</legend>
              <ul>
                {data.users.map(x => {
                  return (
                  <li  key={x.id}>
                    {x.email}, {x.id}
                  </li>
                  );
                })}
              </ul>
            </fieldset>
        );
}