import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { logo } from "../Utils/Constants";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div>
      <Stack
        sx={{
          background: "#110F0F",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            style={{
              borderRadius: "10px",
            }}
            height={155}
            src={logo}
          />
          <Box
            sx={{
              width: "300px",
            }}
          >
            <Typography
              sx={{
                width: "375px",
                fontFamily: "Licorice",
                color: "white",
                fontSize: "24px",
              }}
            >
              "A paragraph is a series of sentences that are organized and
              coherent, and are all related to a single topic. Almost every
              piece of writing you do that is longer than a few sentences should
              be organized into paragraphs."
            </Typography>
          </Box>
          <Box
            sx={{
              paddingTop: "160px",
            }}
          >
            <a href="https://m.facebook.com/kiitelabs">
              <FacebookIcon
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F1A23A";
                  e.currentTarget.style.scale = "1.1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.scale = "1";
                }}
                sx={{
                  fontSize: "48px",
                  marginRight: "10px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://www.instagram.com/elabs.kiit?igsh=NmU1emd0cmxoOGk2">
              <InstagramIcon
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F1A23A";
                  e.currentTarget.style.scale = "1.1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.scale = "1";
                }}
                sx={{
                  fontSize: "48px",
                  marginRight: "10px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://www.linkedin.com/company/kiit-elabs/">
              <LinkedInIcon
                onMouseEnter={(e) => {
                  e.currentTarget.style.scale = "1.1";
                  e.currentTarget.style.color = "#F1A23A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.scale = "1";
                  e.currentTarget.style.color = "white";
                }}
                sx={{
                  fontSize: "48px",
                  marginRight: "10px",
                  color: "white",
                }}
              />
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#909090",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Made with Love~ELabs
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Footer;
