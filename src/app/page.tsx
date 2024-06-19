  'use client'

  import React, { useState } from "react";
  import { Container, Button } from "@mui/material";
  import styles from './page.module.css'
  import EmptyBox from "./shared/components/box-subject";

  type GridType = string[][]

  export default function Home() {

    const days : string[] = ["MON", "TUE", "WED", "THU", "FRI"]
    const times : string[] = ['8', '9', '10', '11', '12']

    const initialGrid : GridType = days.map(() => Array(times.length * 2).fill(""))
    const [grid, setGrid] = useState<GridType>(initialGrid)

    return (
      <Container sx={{ 
        maxWidth: 2000,
        maxHeight: 1000 
        }}>
        <table> 
          <thead>
            <tr>
              <th style={{ width: 100 }}>Day/Time</th>
              {times.map((time, timeIndex) => (
                <th key={timeIndex} className={styles.timeHeader} colSpan={4}>{time}</th>
              ))}
            </tr>
          </thead>
          <tbody> 
          {days.map((dayname, dayIndex) => (
            <tr key={dayIndex}>
              <th className={styles.dayHeader}>{dayname}</th>
              {grid[dayIndex].map((cell, cellIndex) => (
                <th key={cellIndex} className={styles.subject} colSpan={2}></th>
              ))}
            </tr>
          ))}
          </tbody>
        </table>

        <Button variant="outlined">Add EmptyBox</Button>
      </Container>
    );
  }

