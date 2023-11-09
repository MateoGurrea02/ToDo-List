import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function BasicCard({ titulo, estado, clase }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{ minWidth: 800 }}
        variant="outlined"
        style={{ margin: "0.2em" }}
        className={clase}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            {titulo}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color={estado == "Completado" ? "green" : "red"}
          >
            {estado}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
