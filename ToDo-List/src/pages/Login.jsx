import * as React from "react";
import { useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginContext } from "../contexts/LoginProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Copyright from "../components/Copyright"


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [datosUsuario, setDatosUsuario] = useContext(LoginContext);
  const navegacion = useNavigate();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setDatosUsuario({
      nombre: "",
      contraseña: "",
    });
  }, []);

  {if (
    datosUsuario.nombre === "usuario" &&
    datosUsuario.contraseña === "demo"
  ){
    navegacion("/home");
  }}
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDatosUsuario({
      nombre: data.get("usuario"),
      contraseña: data.get("contraseña"),
    });
    if (
      datosUsuario.nombre === "usuario" &&
      datosUsuario.contraseña === "demo"
    ){
      navegacion("/home");
    }else{
      setOpen(true)
    }
    
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de sesión
          </Typography>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" color={'red'}>
              {"Usuario o contraseña incorrectos"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Intentar nuevamente</Button>
            </DialogActions>
          </Dialog>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contraseña"
              label="contraseña"
              type="password"
              id="contraseña"
              autoComplete="current-contraseña"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
