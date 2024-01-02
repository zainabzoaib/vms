import { React, useState } from "react";
import Company from "./Company.png";
import dashboard_img from "./dashboard-icon.png";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import LogoutIconComponent from "./components/logout.jsx";
import ProfileAvatarButton from "./components/ProfileAvatar.jsx";
import PieChartWithText from "./components/PieChartsRow.jsx";
import Barchart from "./components/BarChart.jsx";
import CalendarSection from "./components/Calendar.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function DashboardHome() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <section>
      <div className="md:column-1 bg-midnight items-center">
        <img className="mx-auto pt-4" src={Company} alt="Logo" />;
      </div>
      <div className="grid grid-cols-4">
        <div className="bg-midnight col-span-1 h-full container">
          <img className="" src={dashboard_img} alt="dashboard-icon" />
          <div className="items-left flex">
          <Tabs
            value={selectedTab}
            style={{ color: 'white', width: '100%', textAlign:'left'}}
            onChange={handleTabChange}
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto">
            <Tab label="Overview" style={{ color: 'white', textAlign: 'left' }} />
            <Tab label="Entries" style={{ color: 'white',textAlign: 'left' }}/>
            <Tab label="Users" style={{ color: 'white', textAlign: 'left' }}/>
          </Tabs>
          </div>     
            {/* Render different content based on the selected tab */}
            
            {selectedTab === 1 && <div>Content for Tab 2</div>}
            {selectedTab === 2 && <div>Content for Tab 3</div>}

        </div>
        {selectedTab === 0 &&
        <div className="w-auto col-span-3 items-start h-full">
          <div className="grid bg-gray">
          
            <div className="container bg-white h-auto mx-auto p-4 flex justify-end space-x-4">
              <SearchBar />
              <ProfileAvatarButton />
              <LogoutIconComponent />
            </div>
            <div className="mx-auto pt-4 flex justify-start gap-3 p-3">
              <PieChartWithText />
              <PieChartWithText />
              <PieChartWithText />
            </div>
            <div className="pt-4 flex justify-start gap-3 p-3">
              <Barchart />
              <CalendarSection />
            </div>
          </div>
        </div>
        }
      </div>
      <div className="md:column-2 bg-midnight items-center">
        <div className="text-white text-center py-4">
          <p> © Zainab & keerthika 2023. All right reserved</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardHome;
