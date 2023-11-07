import React, { useEffect, useState } from "react";
import { Pagination, Button, Skeleton } from "@mui/material";
import Tarjeta from './Tarjeta'

export default function Lista_todo(){
    const [tareas, setTareas] = useState([])
    const [cantidadTareas, setCantidadTareas] = useState(5) //por defecto, la lista muestra 5 tareas
    const [pagActual, setPagActual] = useState(1)
    const [cargando, setCargando] = useState(true)
    const url = 'https://jsonplaceholder.typicode.com/todos'
    
    useEffect(() => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            setTareas(data)
            setCargando(false)
        })
    }, [])

    function handleSelect(e){
        setCantidadTareas(e.target.value)
    }

    function paginaAnterior(){
        if (pagActual === 1){

        }
        else{
            setPagActual(pagActual - 1)
        }
    }

    function siguientePagina(){
        if (pagActual === (tareas.length / cantidadTareas)){

        }
        else{
            setPagActual(pagActual + 1)
        }
    }

    return(
        <>
            {(cargando) && <Skeleton animation="wave" />}
            <h1>Tareas</h1>
            <div>
                <select name="cantidadTareas" id="" onChange={handleSelect}>
                    <option value="" disabled selected>Seleccione la cantidad de tareas</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                {tareas.slice((pagActual - 1) * cantidadTareas, (cantidadTareas * pagActual)).map((item, index) => {
                    return <Tarjeta titulo={item.title} estado={item.completed ? "Completado" : "Incompleto"}></Tarjeta>
                })}
                
            </div>
            <Button variant="outlined" onClick={paginaAnterior}>Pagina anterior</Button>
            <Button variant="outlined" disabled>
            {pagActual}
            </Button>
            <Button variant="outlined" href="#outlined-buttons" onClick={siguientePagina}>
            Pagina siguiente
            </Button>
        </>
    )
}