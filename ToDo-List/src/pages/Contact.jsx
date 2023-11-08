import React, { useEffect } from "react";
import Menu from "../components/Menu"
import Contacto from "../components/Contacto"
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginProvider";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const [datosUsuario, setDatosUsuario] = useContext(LoginContext)
    const [lightTheme, setLightTheme] = useContext(ThemeContext)
    const navegacion = useNavigate()

    useEffect(() => {
        if (datosUsuario.nombre !== "usuario"){
            navegacion("/login")
        }
    }, [])

    return(
        <>
            <Menu /> 
            <Contacto />
        </>
    )
}