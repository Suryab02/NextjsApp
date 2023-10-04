"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
function Dashboard() {
  // const [data, setData] = useState([]);
  // const [err, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = res.json();
  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);

  return <div className={styles.container}>DashbOarad Page</div>;
}

export default Dashboard;
