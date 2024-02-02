import React from "react";

import { Card, CardMedia, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const StudentCard = () => {
  return (
    <Card
      sx={{
        width: "15  00px",
        margin: "20px",
        transition: "0.2s linear",
        background: "#262626",
        minHeight: "10vw",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "60px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: "#F1A23A",
              }}
            >
              Student Name
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "20px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: "#F1A23A",
              }}
            >
              E-mail
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "20px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: "#F1A23A",
              }}
            >
              Branch
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignContent: "center",
              height: "80px",
            }}
          >
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "20px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: "#F1A23A",
              }}
            >
              Github:
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "20px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: "#F1A23A",
              }}
            >
              Resume:
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "20px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: "#F1A23A",
              }}
            >
              Linkedin:
            </Typography>
          </Box>
          <FormControlLabel
            sx={{
              color: "#F1A23A",
            }}
            control={<Switch color="warning" defaultChecked />}
            label="Present"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
