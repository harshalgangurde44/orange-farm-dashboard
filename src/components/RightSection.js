import { useState, useEffect } from "react";
import "./rightside.css";
import navarrow from "./assets/navarrow.svg";
import rightarrow from "./assets/rightarrow.svg";
import downarrow from "./assets/downarrow.svg";
import chris from "./assets/chris.svg";
import maggie from "./assets/maggie.svg";
import gael from "./assets/gael.svg";
import jenna from "./assets/jenna.svg";
import pen from "./assets/pen.svg";
import msg from "./assets/msg.svg";
import star from "./assets/star.svg";
import menu from "./assets/menu.svg";
import chat1 from "./assets/chat1.svg";
import chat2 from "./assets/chat2.svg";
import chat3 from "./assets/chat3.svg";
import chat4 from "./assets/chat4.svg";
import plus from "./assets/plus.svg";
import dataset from "./assets/data/dataset.csv";
import { Chart } from "react-google-charts";

import SemiCircleProgressBar from "react-progressbar-semicircle";
const RightSection = () => {
  const options = {
    title: "Profit Percentage Over Time",
    hAxis: {
      title: "Timestamp",
      titleTextStyle: { color: "#333" },
    },
    vAxis: {
      title: "Profit Percentage",
      format: "#'k'",
    },
    legend: "none",
    chartArea: { width: "80%", height: "30%" },
    colors: ["#25CD25"],
  };

  const [data, setData] = useState([]);

  // Downsampling algorithm (simple example: keep every nth row)
  const downsample = (data, factor) => {
    return data.filter((row, index) => index % factor === 0);
  };

  useEffect(() => {
    fetch(dataset)
      .then((res) => res.text())
      .then((data) => {
        const rows = data.split("\n");

        const downSampledRows = downsample(rows.slice(1), 3000);

        const finalData = [rows[0], ...downSampledRows].map((row, idx) => {
          const [x, y] = row.split(",");

          if (idx == 0) return [x, y];

          return [x, Number(y)];
        });
        setData(finalData);
        console.log(rows.slice(0, 10));
      });
  }, []);
  return (
    <div className="main-right-container">
      <div className="section-part1">
        <div className="revenues">
          <div className="revenues-name">Revenues</div>
          <div className="revenues-percent flex">
            <div className="percent">15%</div>
            <img className="navarrow" src={navarrow} />
          </div>
          <div>Increase compared to last week</div>
          <div className="r1 flex ">
            <div>Revenues report</div>
            <img className="r1-img" src={rightarrow} />
          </div>
        </div>

        <div className="lost-deals ">
          <div className="revenues-name">Lost deals</div>
          <div className="revenues-percent flex">
            <div className="percent">4%</div>
          </div>
          <div>You closed 96 out of 100 deals</div>
          <div className="r1 flex  ">
            <div>All deals</div>
            <img className="r1-img" src={rightarrow} />
          </div>
        </div>

        <div className="quarter-goal">
          <div className="circle-name">Quarter goal</div>
          <div className="half-circle1">
            <SemiCircleProgressBar
              percentage={86}
              stroke=" #FFCD71"
              background="#FFF7E8"
              diameter={200}
              strokeWidth={15}
              showPercentValue
            />
          </div>
          <div className="r2 flex  ">
            <div>All goals</div>
            <img className="r1-img" src={rightarrow} />
          </div>
        </div>
      </div>

      <div className="middle-section-part2 flex">
        <div className="customers-content">
          <div className="customer-header flex">
            <div className="name-c1">Customer</div>
            <div className="flex ">
              <div className="sort">Sort by Newest</div>
              <img src={downarrow} />
            </div>
          </div>

          <div className="customer-middle">
            <div className="customer-middle-data bg-o1 flex">
              <img className="middle-img" src={chris} />
              <div className="p1">
                <div className="middle-chris">Chris Friedkly</div>
                <div className="middle-subpart">Supermarket Villanova</div>
              </div>
            </div>
          </div>
          <div className="customer-middle">
            <div className="customer-middle-data bg-o flex">
              <img className="middle-img1 img-change" src={maggie} />
              <div className="p1">
                <div className="middle-chris">Maggie Johnson</div>
                <div className="middle-subpart">Oasis Organic Inc.</div>
              </div>
              <div className="flex icons">
                <img src={msg} />
                <img src={star} />
                <img src={pen} />
                <div className="line"></div>
                <img src={menu} />
              </div>
            </div>
          </div>
          <div className="customer-middle">
            <div className="customer-middle-data bg-o1 flex">
              <img className="middle-img" src={gael} />
              <div className="p1">
                <div className="middle-chris">Gael Harry</div>
                <div className="middle-subpart">New York Finest Fruits</div>
              </div>
            </div>
          </div>
          <div className="customer-middle">
            <div className="customer-middle-data bg-o1 flex">
              <img className="middle-img" src={jenna} />
              <div className="p1">
                <div className="middle-chris">Jenna Sullivan</div>
                <div className="middle-subpart">Walmart</div>
              </div>
            </div>
          </div>

          <div className="flex foot-part">
            <div>All customers</div>
            <img className="arrow3" src={rightarrow} />
          </div>
        </div>

        <div className="growth-content">
          <div className="main-graph">
            <div className="graph-heading flex">
              <div className="font-w">Growth</div>
              <div className="flex w">
                <div>Yearly</div>
                <img src={downarrow} />
              </div>
            </div>
            <Chart
              chartType="AreaChart"
              data={data}
              options={options}
              width="100%"
              height="170px"
            />
          </div>

          <div className="bottom-graphpart flex">
            <div className="nov">
              <div className="detail-month">Top month</div>
              <div className="detail-month1">November</div>
              <div className="detail-month2">2019</div>
            </div>

            <div className="nov1">
              <div className="detail-month4">Top year</div>
              <div className="detail-month5">2023</div>
              <div className="detail-month6">96k sold so far</div>
            </div>

            <div className="nov2">
              <div className="detail-month7">Top buyer</div>
              <img className="maggie1" src={maggie} />
              <div className="detail-month8">Maggie Johnson</div>
              <div className="detail-month9">Oasis Organic Inc.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ///// */}
      <div className="section-part3 flex">
        <div className="part3-chats">
          <div className="chats-name">Chats</div>
          <div className="chats-name-content">2 unread messages</div>
          <div className="flex chats-image">
            <img src={chat1} />
            <img src={chat2} />
            <img src={chat3} />
            <img src={chat4} />
          </div>
        </div>

        <div className="part3-top">
          <div className="states-content">Top states</div>

          <div className="ny flex linear">
            <div className="ny-name">NY</div>
            <div className="ny-money">120k</div>
          </div>

          <div className="ma flex linear">
            <div className="ny-name">MA</div>
            <div className="ny-money">80k</div>
          </div>

          <div className="nh flex linear">
            <div className="ny-name">NH</div>
            <div className="ny-money">70k</div>
          </div>

          <div className="or flex linear">
            <div className="ny-name">OR</div>
            <div className="ny-money">50k</div>
          </div>
        </div>

        <div className="part3-new-deals">
          <div className="newdeal-1">New deals</div>
          <div className="s1 flex">
            <div className="flex s1-content1">
              <img src={plus} />
              <div>Fruit2Go</div>
            </div>
            <div className="flex s1-content2">
              <img src={plus} />
              <div>Marshall's MKT</div>
            </div>
            <div className="flex s1-content3">
              <img src={plus} />
              <div>CCNT</div>
            </div>
          </div>

          <div className="s2 flex">
            <div className="flex s2part-content1">
              <img src={plus} />
              <div>Joana Mini-market</div>
            </div>
            <div className="flex s2part-content2">
              <img src={plus} />
              <div>Little Brazil Vegan</div>
            </div>
          </div>

          <div className="s3 flex ">
            <div className="flex s3part-content1">
              <img src={plus} />
              <div>Target</div>
            </div>
            <div className="flex s3part-content2 w1">
              <img src={plus} />
              <div>Organic Place</div>
            </div>
            <div className="flex s3part-content3">
              <img src={plus} />
              <div>Morello's</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
