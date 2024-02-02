import React from "react";
import { Card, CardMedia, CardContent, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Icon from "@mui/material/Icon";
const DomainCard = ({ id, icon, title }) => {
  const [hovering, sethovering] = useState(false);
  const mouseenterhandler = () => {
    sethovering(true);
  };
  const mouseleavehandler = () => {
    sethovering(false);
  };
  return (
    <Link
      to={`/domain/${id}`}
      state={{
        title: title,
      }}
    >
      <Card
        onMouseEnter={mouseenterhandler}
        onMouseLeave={mouseleavehandler}
        sx={{
          width: "20vw",
          scale: hovering ? "1.1" : "1",
          minHeight: "18vw",
          transition: "0.2s linear",
          background: hovering
            ? "linear-gradient(90deg, rgba(241,162,58,1) 0%, rgba(234,174,44,1) 56%, rgba(215,209,4,1) 100%)"
            : "#262626",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Icon
              sx={{
                height: "50px",
                width: "100px",
                padding: "5px",
                marginTop: "15px",
                color: hovering ? "white" : "#F1A23A",
              }}
            >
              {icon}
            </Icon>

            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "20px",
                textDecoration: "none",
                fontFamily: "Kiwi-Maru",
                color: hovering ? "white" : "#F1A23A",
              }}
            >
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DomainCard;
