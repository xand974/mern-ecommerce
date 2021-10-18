import "./featuredInfos.scss";
import Card from "components/Card/Card";
import { useEffect } from "react";
import { adminRequest } from "api";
import { useState } from "react";
export default function FeatureInfos() {
  const [revenus, setRevenus] = useState([]);
  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const res = await adminRequest.get("/orders/stats");
        setRevenus(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRevenue();
  }, []);

  return (
    <div className="featuredInfos">
      <Card revenus={revenus} />
    </div>
  );
}
