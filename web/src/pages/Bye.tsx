import React from 'react'
import { useByeQuery } from '../generated/graphql';

interface Props {

}

export const Bye: React.FC<Props> = () => {
    const {data, loading, error} = useByeQuery();
    if (loading) { return ( <fieldset><legend>Bye page</legend>loadign...</fieldset>); }
    if (error) { 
        console.log(error);
        return ( <fieldset><legend>Bye page</legend>
          error: {error.message}</fieldset> );
     }
     if (!data) { return ( <fieldset><legend>Bye page</legend>no data</fieldset>); }
      return ( <fieldset><legend>Bye page</legend>{data.bye}</fieldset> );
}