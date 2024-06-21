"use client";

import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import styles from "./page.module.css";
import BoxSubject from "./shared/components/box-subject";

export default function Home() {
  const [isClick, setClick] = useState<boolean>(false);
  const [positionLeft, setPositionLeft] = useState<number>(0);
  const [positionTop, setPositionTop] = useState<number>(0);

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

  const day: string = "MON";
  const timeStart: number = 8;
  const timeEnd: number = 10.3;

  const getDecimalPart = (num: number): number => {
    const integerPart = Math.floor(num);
    const decimalPart = num - integerPart;
    return Math.floor(decimalPart * 100);
  };

  const lengthSubject = (start: number, end: number): number => {
    const startInteger: number = Math.floor(start);
    const endInteger: number = Math.floor(end);

    let minutes: number = 0;

    if (!Number.isInteger(start) && Number.isInteger(end)) {
      console.log("Time Start is not Integer");
      minutes = getDecimalPart(start) - 60;
    }

    if (Number.isInteger(start) && !Number.isInteger(end)) {
      console.log("Time End is not Integer");
      minutes = 60 - getDecimalPart(end);
    }

    if (!Number.isInteger(start) && !Number.isInteger(end)) {
      console.log("Both is not Integer");
      minutes = getDecimalPart(end) - getDecimalPart(start);
    }

    return (endInteger - startInteger) * 2 + minutes / 30;
  };

  const addSubject = () => {
    setClick(false);
    const tableArray: number[][] = Array.from({ length: days.length + 1 }, () =>
      Array(times.length * 2).fill(0)
    );

    console.log(tableArray);

    const dayIndex = days.indexOf(day);
    setPositionTop(dayIndex + 1);
    console.log("Day Index : ", dayIndex + 1);
    console.log("length : ", lengthSubject(timeStart, timeEnd));

    const distanceLeft: number = lengthSubject(parseInt(times[0]), timeStart);
    setPositionLeft(distanceLeft);
    console.log("from left :", distanceLeft);

    const newTableArray: number[][] = tableArray.map((row) => [...row]);

    for (let i = 0; i < lengthSubject(timeStart, timeEnd); i++) {
      newTableArray[dayIndex + 1][distanceLeft + i] = 1;
    }

    console.log(newTableArray);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      >
        <div style={{ paddingTop: "32px", boxSizing: "inherit" }}>
          <div>
            <div style={{ width: "100%" }}></div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  width: "1442px",
                  height: "450px",
                  zIndex: 0,
                  borderRadius: "10px",
                }}
              >
                <div
                  className={styles.dayHeader}
                  style={{
                    top: "0px",
                    left: "0px",
                    width: "68px",
                    height: "38px",
                  }}
                ></div>
                {days.map((value, index) => (
                  <div
                    key={index}
                    className={styles.dayHeader}
                    style={{
                      top: `${40 + index * 80}px`,
                      left: "0px",
                      width: "68px",
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
                      left: `${70 + index * 90}px`,
                      width: "88px",
                      height: "38px",
                    }}
                  >
                    <Typography variant="h6" color="black">
                      {value}
                    </Typography>
                  </div>
                ))}
                {[...Array(days.length + 1)].map((_, index) => (
                  <span
                    key={index}
                    className={styles.line}
                    style={{
                      top: `${39.5 + index * 80}px`,
                      left: "25px",
                      width: "1442px",
                      height: "1px",
                      opacity: "20%",
                    }}
                  ></span>
                ))}
                {[...Array(times.length + 1)].map((_, index) => (
                  <span
                    key={index}
                    className={styles.line}
                    style={{
                      top: "10px",
                      left: `${69.5 + index * 90}px`,
                      width: "1px",
                      height: "450px",
                      opacity: "20%",
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
