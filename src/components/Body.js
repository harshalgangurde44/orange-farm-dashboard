import React from "react";
import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import dashboard from "./assets/dashboard.svg";
import customers from "./assets/customers.svg";
import reports from "./assets/reports.svg";
import geography from "./assets/geography.svg";
import conversation from "./assets/conversation.svg";
import deal from "./assets/deals.svg";
import export1 from "./assets/export.svg";
import downarrow from "./assets/downarrow.svg";
import gustavo from "./assets/gustovo.svg";
import settings from "./assets/settings.svg";
import logout from "./assets/logout.svg";
import RightSection from "./RightSection";

const iconsData = [
  { src: dashboard, name: "Dashboard" },
  { src: customers, name: "Customers" },
  { src: reports, name: "All reports" },
  { src: geography, name: "Geography" },
  { src: conversation, name: "Conversations" },
  { src: deal, name: "Deals" },
  { src: export1, name: "Export" },
];

const Body = () => {
  return (
    <div className="main-container flex">
      <div className="left-container">
        <div className="leftside-part1">
          <div className="header">
            <div className="header-data">
              <img src={logo} alt="Logo" />
              <div className="header-name">OrangeFarm</div>
            </div>
          </div>
        </div>

        <div className="search flex">
          <img className="search-img" src={search} />
          <div className="search-name">Search</div>
        </div>
        <div className="leftside-part2">
          {iconsData.map((icon, index) => (
            <div className="dashboard flex" key={index}>
              <div className="flex">
                <img className="dashboard-img" src={icon.src} alt={icon.name} />
                <div className="dashboard-name">{icon.name}</div>
              </div>
              {index === 1 && (
                <img className="arrow" src={downarrow} alt="Down Arrow" />
              )}
            </div>
          ))}
        </div>

        <div className="footer">
          <div className="footer-part1 flex">
            <img className="gustavo-img" src={gustavo} />
            <div className="gustavo">
              <div className="gustavo-name">Gustavo Xavier</div>
              <div className="admin">Admin</div>
            </div>
          </div>

          <div className="dashboard footer-part2 flex ">
            <img className="dashboard-img1 " src={settings} />
            <div className="dashboard-name1 ">Settings</div>
          </div>

          <div className="dashboard footer-part3 flex ">
            <img className="dashboard-img1 " src={logout} />
            <div className="dashboard-name1">Log out</div>
          </div>
        </div>
      </div>

      {/* right container */}
      <div className="right-container">
        <RightSection />
      </div>
    </div>
  );
};

export default Body;
