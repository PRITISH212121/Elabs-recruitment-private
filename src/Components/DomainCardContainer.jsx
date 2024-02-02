import React from "react";
import { Card, CardMedia, CardContent, Grid } from "@mui/material";
import { domains } from "../Utils/Constants";
import DomainCard from "./DomainCard";

const DomainCardContainer = () => {
  return (
    <Grid
      container
      sx={{
        padding: "60px",
      }}
      spacing={5}
    >
      {domains.map((domain) => (
        <Grid item>
          <DomainCard id={domain.id} icon={domain.icon} title={domain.title} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DomainCardContainer;
