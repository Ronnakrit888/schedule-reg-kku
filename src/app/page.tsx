"use client";

import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import styles from "./page.module.css";
import BoxSubject from "./shared/components/box-subject";

export default function Home() {
  const [isClick, setClick] = useState<boolean>(false);
  const [positionLeft, setPositionLeft] = useState<number>(0);
  const [positionTop, setPositionTop] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

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
  const timeStart: number = 9;
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

  const findNumberInArray = (
    array: number[][]
  ): { row: number; column: number; length: number } | null => {
    for (let row = 0; row < array.length; row++) {
      let firstOneColumn: number = -1;
      let length: number = 0;
      for (let col = 0; col < array[row].length; col++) {
        if (array[row][col] === 1) {
          if (firstOneColumn === -1) {
            firstOneColumn = col;
          }
          length++;
        }
      }

      if (firstOneColumn !== -1) {
        return { row, column: firstOneColumn, length };
      }
    }

    return null;
  };

  const createMatrixWithSubject = (): { array: number[][] } => {
    setClick(false);
    const tableArray: number[][] = Array.from({ length: days.length + 1 }, () =>
      Array(times.length * 2).fill(0)
    );

    console.log(tableArray);

    const dayIndex = days.indexOf(day);
    const distanceLeft: number = lengthSubject(parseInt(times[0]), timeStart);
    console.log("from left :", distanceLeft);

    const newTableArray: number[][] = tableArray.map((row) => [...row]);

    for (let i = 0; i < lengthSubject(timeStart, timeEnd); i++) {
      newTableArray[dayIndex + 1][distanceLeft + i + 1] = 1;
    }

    console.log(newTableArray);
    return { array: newTableArray };
  };

  const addSubjectToTable = () => {
    setClick(true)
    const matrix = createMatrixWithSubject().array;
    const numberFound = findNumberInArray(matrix)

    if (numberFound)  {
      console.log("Found Number 1")
      console.log(`Position Left: ${numberFound.column}, Position Top: ${numberFound.row}, Width: ${numberFound.length}`);
      setPositionLeft(numberFound.column)
      setPositionTop(numberFound.row)
      setWidth(numberFound.length)
    }
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
          position: "absolute",
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
                <BoxSubject length={width} row={positionTop} column={positionLeft} color="rgb(248, 196, 113)" colorBorder="rgb(243, 156, 18)"/>
                <BoxSubject length={width} row={positionTop} column={positionLeft * 2} color="rgb(236, 112, 99)" colorBorder="rgb(203, 67, 53)"/>
                <BoxSubject length={2} row={positionTop} column={1} color="rgb(236, 112, 99)" colorBorder="rgb(203, 67, 53)"/>
                <BoxSubject length={2} row={positionTop + 1} column={1} color="rgb(187, 143, 206)" colorBorder="rgb(125, 60, 152)"/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div style={{ display: "flex" }}>
        <div>
          <Button variant="outlined" onClick={addSubjectToTable}>Subject</Button>
        </div>
      </div>
    </div>
  );
}
