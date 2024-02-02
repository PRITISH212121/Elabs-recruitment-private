import React from "react";

import { Typography, Box, Stack } from "@mui/material";

import DomainCard from "./DomainCard";
import Footer from "./Footer";
import DomainCardContainer from "./DomainCardContainer";

const Home = () => {
  return (
    <div
      style={{
        background: "#110F0F",
      }}
    >
      <Typography
        sx={{
          paddingLeft: "60px",
        }}
        color="#F1A23A"
        variant="h2"
        fontFamily="Khmer   "
        fontWeight="bold"
        p={2}
      >
        Our Domains
      </Typography>
      <DomainCardContainer />
      <Footer />
    </div>
  );
};

export default Home;
