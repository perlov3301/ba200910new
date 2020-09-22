import React from "react";
import { useHelloQuery } from "../generated/graphql";

export const Hello: React.FC = () => {
    const  { data, loading } = useHelloQuery();
    if (loading || !data) {
    return <fieldset><legend>hello page</legend>
    loading...</fieldset>
    }
    return <fieldset><legend>hello page</legend>
    {data.hello}</fieldset>

};