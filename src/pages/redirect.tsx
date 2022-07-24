import { useEffect } from "react";
import { useParams } from "react-router-dom";
import redirects from "../data/redirects.json";
import Page404 from "./Page404";

export default function Redirects() {
    const { slug } = useParams()
    const route = redirects.find(f => f.location.replace("/", "").toLowerCase() === slug?.toLowerCase());
    if(!route) return <Page404/>
    useEffect(() => {window.location.href = route?.destination as string}, [])
    return <>Redirecting...</>
}