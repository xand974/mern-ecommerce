import "./chart.scss";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersStats } from "redux/apiCalls";
import { useState } from "react";
import { useMemo } from "react";

export default function Chart({ grid }) {
  const { stats } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userStats, setUserStats] = useState(stats);
  console.log(userStats);
  const MONTHS = useMemo(
    () => [
      "Jav",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    fetchUsersStats(dispatch, setUserStats, MONTHS);
  }, [dispatch, MONTHS]);

  // userStats.map((stat) => {
  //   return setUserStats((prev) => {
  //     return [...prev, { name: MONTHS[stat._id - 1], Users: stat.total }];
  //   });
  // });

  return (
    <div className="chart">
      <h2 className="title">User Analystics</h2>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userStats}>
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="Users" color="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
