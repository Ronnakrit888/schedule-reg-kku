"use client";

import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import styles from "./page.module.css";
import BoxSubject from "./shared/components/box-subject";

export default function Home() {

  const [isClick, setClick] = useState<boolean>(false)
  const [positionLeft, setPositionLeft] = useState<number>(0)
  const [positionTop, setPositionTop] = useState<number>(0)

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
  const timeEnd: number = 10.30;

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

    setClick(false)
    const tableArray: number[][] = Array.from({ length: days.length + 1 }, () =>
      Array(times.length * 2).fill(0)
    );

    console.log(tableArray);

    const dayIndex = days.indexOf(day);
    setPositionTop(dayIndex + 1)
    console.log("Day Index : ", dayIndex + 1);
    console.log("length : ", lengthSubject(timeStart, timeEnd));

    const distanceLeft: number = lengthSubject(parseInt(times[0]), timeStart);
    setPositionLeft(distanceLeft)
    console.log("from left :", distanceLeft);

    const newTableArray: number[][] = tableArray.map((row) => [...row]);

    for (let i = 0; i < lengthSubject(timeStart, timeEnd); i++) {
      newTableArray[dayIndex + 1][distanceLeft + i] = 1;
    }

    console.log(newTableArray);
  };

  return (

    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth='lg' style={{ width : '100%', marginLeft : 'auto', boxSizing : 'border-box', marginRight : 'auto', display : 'block'}} />
        <div style={{ position : 'relative' }}>
          <div style={{ width: "100%" }}>
            <div
              className={styles.dayHeader}
              style={{
                top: "0px",
                left: "0px",
                width: "98px",
                height: "58px",
                backgroundColor: "grey",
                zIndex: 0,
              }}
            >
              <Typography variant="h6" color="black">
                Day/Time
              </Typography>
            </div>
            {days.map((value, index) => (
            <div
              key={index}
              className={styles.dayHeader}
              style={{
                top: `${61 + index * 81}px`,
                left: "0px",
                width: "98px",
                height: "78px",
                zIndex: 0,
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
                zIndex: 0,
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
          top: "-1px",
          left: "-1px",
          width: "1414px",
          height: "1px",
          zIndex: 0,
        }}
      ></span>
      {[...Array(days.length + 1)].map((_, index) => (
        <span
          key={index}
          className={styles.line}
          style={{
            top: `${60 + (index * 81)}px`,
            left: "0px",
            width: "1414px",
            height: "1px",
            zIndex: 0,
          }}
        ></span>
      ))}
      <span
        className={styles.line}
        style={{
          top: "-1px",
          left: "-1px",
          width: "1px",
          height: "466px",
          zIndex: 0,
        }}
      ></span>
      {[...Array(times.length + 1)].map((_, index) => (
        <span
          key={index}
          className={styles.line}
          style={{
            top: "-1px",
            left: `${100 + index * 101}px`,
            width: "1px",
            height: "466px",
            zIndex: 0,
          }}
        ></span>
      ))}

      {isClick && (
        <BoxSubject fromLeft={positionLeft} fromTop={positionTop} length={lengthSubject(timeStart, timeEnd)} />
      )}
    </div><Button variant="outlined" sx={{ top: "500px" }} onClick={addSubject}>
        Mock
      </Button><Button variant="outlined" sx={{ top: "500px" }} onClick={() => setClick(true)}>
        Click
      </Button><div /></>
  );
}
