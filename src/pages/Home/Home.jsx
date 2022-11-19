import React from "react";
import Chart from "../../components/chart/Chart";
import Feautredinfo from "../../components/feautredinfo/Feautredinfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <Feautredinfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <h1>ahmed</h1>
        <h1>khawla</h1>
        <h1>khawla1</h1>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
