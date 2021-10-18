import "./card.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState } from "react";
export default function Card({ revenus }) {
  const [perc, setPerc] = useState(0);

  return (
    <div className="card">
      <span className="title">Revenue</span>
      <div className="money">
        <span className="dollar">${revenus[0]?.total}</span>
        <span className="evo">
          {revenus[0]?.total}
          {perc > 0 ? (
            <ArrowUpward style={{ color: "lightgreen" }} />
          ) : (
            <ArrowDownward style={{ color: "rgb(255, 107, 107)" }} />
          )}
        </span>
      </div>
      <span className="compared">Compared to last month</span>
    </div>
  );
}
