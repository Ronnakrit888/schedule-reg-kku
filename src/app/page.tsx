"use client";

import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const days: string[] = ["MON", "TUE", "WED", "THU", "FRI"];
  const times: string[] = [
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  return (
    <Container sx={{ maxWidth: "1440px" }}>
      <div style={{ display: "block" }}>
        <div style={{ width: "100%" }}>
          <div
            className={styles.dayHeader}
            style={{
              top: "0px",
              left: "0px",
              width: "98px",
              height: "58px",
              backgroundColor: "grey",
            }}
          >
            <Typography variant="h6" color="black">
              Day/Time
            </Typography>
          </div>
          {days.map((value, index) => (
            <div
              className={styles.dayHeader}
              style={{
                top: `${61 + index * 81}px`,
                left: "0px",
                width: "98px",
                height: "78px",
              }}
            >
              <Typography variant="h6" color="black">
                {value}
              </Typography>
            </div>
          ))}
          {times.map((value, index) => (
            <div
              key={index}
              className={styles.dayHeader}
              style={{
                top: "0px",
                left: `${101 + index * 101}px`,
                width: "98px",
                height: "58px",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <span
        className={styles.line}
        style={{
          top: "-0.5px",
          left: "-0.5px",
          width: "1414px",
          height: "1px",
        }}
      ></span>
      {[...Array(days.length + 1)].map((_, index) => (
        <span
          key={index}
          className={styles.line}
          style={{
            top: `${60 + index * 81}px`,
            left: "-0.5px",
            width: "1414px",
            height: "1px",
          }}
        ></span>
      ))}
      <span
        className={styles.line}
        style={{
          top: "-0.5px",
          left: "-0.5px",
          width: "1px",
          height: "1000px",
        }}
      ></span>
      {[...Array(times.length + 1)].map((_, index) => (
        <span
          key={index}
          className={styles.line}
          style={{
            top: "-0.5px",
            left: `${100 + index * 101}px`,
            width: "1px",
            height: "466px",
          }}
        ></span>
      ))}
    </Container>
  );
}
