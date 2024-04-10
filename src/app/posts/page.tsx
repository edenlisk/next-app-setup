'use client';

import {useSelector} from "react-redux";
import {useGetAllProjectsQuery} from "@/redux/slices/apiSlice";
import {useEffect} from "react";

export default function Posts () {
    const token = useSelector((state:any) => state.auth.token);
    const { data } = useGetAllProjectsQuery('');
    useEffect(() => {
        console.log(token);
        if (data) {
            console.log(data);
        }
    }, [token, data]);
    return (
        <div>posts</div>
    )
}