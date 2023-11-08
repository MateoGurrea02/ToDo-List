import React, { useEffect, useState } from "react";
import { Pagination, Button, Skeleton, Stack } from "@mui/material";
import Tarjeta from "./Tarjeta";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


export default function Lista_todo() {
  const [tareas, setTareas] = useState([]);
  const [cantidadTareas, setCantidadTareas] = useState(5); //por defecto, la lista muestra 5 tareas
  const [pagActual, setPagActual] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [open, setOpen] = React.useState(false);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPagActual(value)
  };

  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setTareas(data);
        setCargando(false);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function handleSelect(e) {
    setCantidadTareas(e.target.value);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {cargando && <Skeleton animation="wave" />}
      <h1 style={{margin:"1em"}}>
        Tareas
      </h1>
      <FormControl>
        <InputLabel id="demo-controlled-open-select-label">
          Nro. Tareas
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          label="Nro. Tareas"
          onChange={handleSelect}
        >
          <MenuItem value="">
            <em>Seleccione la cantidad de tareas</em>
          </MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"10"}>10</MenuItem>
          <MenuItem value={"15"}>15</MenuItem>
          <MenuItem value={"20"}>20</MenuItem>
          {/* <option value="" disabled selected>Seleccione la cantidad de tareas</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option> */}
        </Select>
        {tareas
          .slice((pagActual - 1) * cantidadTareas, cantidadTareas * pagActual)
          .map((item, index) => {
            return (
              <Tarjeta
                key={index}
                titulo={item.title}
                estado={item.completed ? "Completado" : "Incompleto"}
              ></Tarjeta>
            );
          })}
      </FormControl>
      <div style={{flexDirection:"row", margin:"1em"}}>
        <Stack>
            <Pagination count={200/cantidadTareas} page={pagActual} rowsPerPage={cantidadTareas} onChange={handleChange} variant="outlined" shape="rounded"  />
         </Stack>
      </div>
    </div>
  );
}
