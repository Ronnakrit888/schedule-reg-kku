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

  const day : string = "MON"
  const timeStart : number = 9
  const timeEnd : number = 10.30

  const getDecimalPart = (num : number) : number => {
    
    const integerPart = Math.floor(num)
    const decimalPart = num - integerPart
    return Math.floor(decimalPart * 100)

  }

  const lengthSubject = (start : number, end : number) : number => {

    const startInteger : number = Math.floor(start)
    const endInteger : number = Math.floor(end)

    let minutes : number = 0

    if (!Number.isInteger(start) && Number.isInteger(end)) {
      console.log("Time Start is not Integer")
      minutes = getDecimalPart(start) - 60
    }

    if (Number.isInteger(start) && !Number.isInteger(end)) {
      console.log("Time End is not Integer")
      minutes = 60 - getDecimalPart(end)
    }

    if (!Number.isInteger(start) && !Number.isInteger(end)) {
      console.log("Both is not Integer")
      minutes = getDecimalPart(end) - getDecimalPart(start)
    }

    return (endInteger - startInteger) * 2 + (minutes / 30)

  }


  const addSubject = () => {
    const tableArray : number[][] = Array(days.length + 1).fill(null).map((_, index) => new Array(times.length * 2).fill(0))
    console.log(tableArray)

    const dayIndex = days.indexOf(day)
    console.log("Day Index : " , dayIndex + 1)
    console.log("length : ", lengthSubject(timeStart, timeEnd))

    const distanceLeft : number = lengthSubject(parseInt(times[0]), timeStart)
    console.log("from left :", distanceLeft)

   for (let i = 0; i < lengthSubject(timeStart, timeEnd); i++) {
    tableArray[dayIndex + 1][distanceLeft + i] = 1
   }
    console.log(tableArray)

  }
  
  return (
    <Container>
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
                <Typography variant="h6" color="initial">
                  {value}
                </Typography>
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
      <Button variant="outlined" sx={{ top : '500px'}} onClick={addSubject}>Mock</Button>
    </Container>
    
  );
}
