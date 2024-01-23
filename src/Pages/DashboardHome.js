import { React, useState, useEffect } from "react";
import Logo from "./assests/Company.png";
import dashboard_img from "./assests/dashboard-icon.png";
import { Routes, Route } from "react-router-dom";
import LogoutIconComponent from "./components/logout.jsx";
import ProfileAvatarButton from "./components/ProfileAvatar.jsx";
import PieChartWithText from "./components/PieChartsRow.jsx";
import Barchart from "./components/BarChart.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EntriesRecords from "./components/EntriesRecords.jsx";
import UserRecords from "./components/UserRecords.jsx";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./LoginPage";
import axios from "axios";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import {
  useTheme,
  useMediaQuery,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function DashboardHome() {
  const [barChartData, setBarChartData] = useState([]);
  //const COLORS = ["#0088FE", "#00C49F"];
  const [pieChartDailyData, setPieChartDailyData] = useState(0);
  const [pieChartMonthlyData, setPieChartMonthlyData] = useState(0);
  const [pieChartYearlyData, setPieChartYearlyData] = useState(0);
  const [totalDailyVisitors, setTotalDailyVisitors] = useState(0);
  const [totalMonthlyVisitors, setTotalMonthlyVisitors] = useState(0);
  const [totalYearlyVisitors, setTotalYearlyVisitors] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery('(max-width: 960px)');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setDrawerOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  // const changeDate = (event) => {
  //   const selectedDate = new Date(event.$d);
  //   console.log(selectedDate);
  // };
  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const fetchData = async () => {
    const today = selectedDate ? new Date(selectedDate) : new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const dateParams = date ? "day=" + date + "&" : "";
    const monthParams = month ? "month=" + month + "&" : "";
    const yearParams = year ? "year=" + year : "";
    // Fetch yearly visitor data when the component mounts

    axios
      .get("http://localhost:5000/api/yearlyData")
      .then((response) => {
        setBarChartData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching yearly visitors:", error);
      });
    const queryParams = dateParams + monthParams + yearParams;
    axios
      .get("http://localhost:5000/api/monthly-visitors?" + queryParams)
      .then((response) => {
        let total_Daily = 0;
        if (response.data.count.length > 0) {
          total_Daily = response.data.count[0].totalEntries;
        }
        setTotalDailyVisitors(total_Daily);
        let chartData_Daily = [];
        chartData_Daily.push({
          label: "",
          count:
            response.data.count.length > 0
              ? response.data.count[0].totalEntries
              : 0,
        });
        chartData_Daily.push({
          label: "",
          count:
            100 -
            (response.data.count.length > 0
              ? response.data.count[0].totalEntries
              : 0),
        });
        setPieChartDailyData(chartData_Daily);
      })
      .catch((error) => {
        console.error("Error fetching today's visitor count:", error);
      });
    // console.log(monthParams);
    // console.log(yearParams);
    const queryParams2 = monthParams + yearParams;
    axios
      .get("http://localhost:5000/api/monthly-visitors?" + queryParams2)
      .then((response) => {
        const data = response.data.count;
        let total_Monthly = 0;
        if (data.length > 0) {
          total_Monthly = data[0].totalEntries;
        }
        let chartData_Monthly = [];
        // console.log(total_Monthly);
        chartData_Monthly.push({
          label: "",
          count:
            response.data.count.length > 0
              ? response.data.count[0].totalEntries
              : 0,
        });
        chartData_Monthly.push({
          label: "",
          count:
            100 -
            (response.data.count.length > 0
              ? response.data.count[0].totalEntries
              : 0),
        });
        setPieChartMonthlyData(chartData_Monthly);
        setTotalMonthlyVisitors(total_Monthly);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const queryParams3 = yearParams;
    axios
      .get("http://localhost:5000/api/monthly-visitors?" + queryParams3)
      .then((response) => {
        const data = response.data.count;
        let chartData_Yearly = [];
        chartData_Yearly.push({
          label: "",
          count: data[0].totalEntries,
        });
        chartData_Yearly.push({
          label: "",
          count: 100 - data[0].totalEntries,
        });
        setPieChartYearlyData(chartData_Yearly);
        const total_Yearly = data[0].totalEntries;
        setTotalYearlyVisitors(total_Yearly);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <section>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
      <div className="column-1 bg-red items-center flex md:block w-screen">
        <div className="w-full">
          <img
            className="mx-auto md:pt-4 py-4 md:w-64 w-96"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="justify-end w-full flex">
          {isMobileOrTablet && (
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, color:'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              width: "100%", // Set the width to full width
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "100%",
                backgroundColor: "#f28e3c", // Set the background color
                color: "white", // Set the text color
                boxSizing: "border-box",
              },
            }}
          >
            {/* Close button */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "8px",
              }}
            >
              <IconButton color="#000000" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </div>

            {/* Your Logo */}
            <div style={{ textAlign: "center", padding: "16px" }}>
              <img src={dashboard_img} alt="Logo" />
            </div>

            <Tabs
              orientation="vertical"
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              style={{ color: "white", width: "100%", textAlign: "left" }}
              sx={{
                "& .Mui-selected": {
                  color: "blue", // Set the text color for the active tab
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "white", // Set the background color for the active tab indicator
                },
              }}
            >
              <Tab
                label="Overview"
                style={{
                  color: "white",
                  textAlign: "left",
                  alignItems: "flex-start",
                  paddingLeft: "40",
                }}
              />
              <Tab
                label="Visitor Entries"
                style={{
                  color: "white",
                  textAlign: "left",
                  alignItems: "flex-start",
                  paddingLeft: "40",
                }}
              />
              <Tab
                label="User Records"
                style={{
                  color: "white",
                  textAlign: "left",
                  alignItems: "flex-start",
                  paddingLeft: "40",
                }}
              />
              {/* Add more tabs as needed */}
            </Tabs>
          </Drawer>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className="bg-red md:col-span-1 md:block hidden h-full container">
          <img className="" src={dashboard_img} alt="dashboard-icon" />
          <div className="items-left flex my-10">
            <Tabs
              value={selectedTab}
              style={{ color: "white", width: "100%", textAlign: "left" }}
              onChange={handleTabChange}
              orientation="vertical"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .Mui-selected": {
                  color: "blue", // Set the text color for the active tab
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "white", // Set the background color for the active tab indicator
                },
              }}
            >
              <Tab
                label="Overview"
                style={{
                  color: "white",
                  textAlign: "left",
                  alignItems: "flex-start",
                  padding: "0",
                }}
              />
              <Tab
                label="Visitor Entries"
                style={{
                  color: "white",
                  textAlign: "left",
                  alignItems: "flex-start",
                  padding: "0",
                }}
              />
              <Tab
                label="User Records"
                style={{
                  color: "white",
                  textAlign: "left",
                  alignItems: "flex-start",
                  padding: "0",
                }}
              />
            </Tabs>
          </div>
          {/* Render different content based on the selected tab */}
        </div>
        {selectedTab === 0 && (
          <div className="w-auto col-span-3 items-start h-full md:w-full">
            <div className="bg-gray">
              <div className="bg-white h-auto p-4 flex">
                <div className="md:hidden">
                  <Button
                    startIcon={<CalendarTodayIcon sx={{ color: "#a12b63" }} />}
                    onClick={handleButtonClick} style={{color: "#a12b63" }}
                  >
                    Filter
                  </Button>
                  {isCalendarOpen && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateCalendar"]}>
                        <DemoItem label="Filter By Date">
                          <DateCalendar
                            value={selectedDate}
                            onChange={handleDateChange}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  )}
                </div>
                <div className="justify-end w-full flex">
                  <LogoutIconComponent />
                </div>
              </div>
              <div className="w-full md:flex block justify-start p-1">
                <PieChartWithText
                  title="Daily Visitors"
                  total={totalDailyVisitors}
                  data={pieChartDailyData}
                  datakey="count"
                />
                <PieChartWithText
                  title="Monthly Visitors"
                  total={totalMonthlyVisitors}
                  data={pieChartMonthlyData}
                  datakey="count"
                />
                <PieChartWithText
                  colors={["red", "blue", "green"]}
                  title="Yearly Visitors"
                  total={totalYearlyVisitors}
                  data={pieChartYearlyData}
                  datakey="count"
                />
              </div>
              <div className="pt-4 md:flex block justify-start gap-3 p-3">
                <Barchart
                  title=""
                  data={barChartData}
                  xaxis="year"
                  yaxis="totalRecords"
                  tooltip="Total Records:"
                />
                <div className="bg-white p-3 hidden md:block">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateCalendar"]}>
                      <DemoItem label="Filter By Date">
                        <DateCalendar
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedTab === 1 && (
          <div className="w-auto col-span-3 items-start h-full">
            <div className="grid bg-gray">
              <div className="bg-white h-auto p-4 flex">
                <div className="justify-end w-full flex">
                  <LogoutIconComponent />
                </div>
              </div>
              <div className="pt-4 justify-start gap-3 p-3 md:w-full w-screen">
                <EntriesRecords />
              </div>
            </div>
          </div>
        )}
        {selectedTab === 2 && (
          <div className="w-auto col-span-3 items-start h-full">
            <div className="grid bg-gray">
              <div className="bg-white h-auto p-4 flex">
                <div className="justify-end w-full space-x-28 flex">
                  <LogoutIconComponent />
                </div>
              </div>
              <div className="pt-4 justify-start gap-3 p-3 md:w-full w-screen">
                <UserRecords />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:column-2 bg-red items-center">
        <div className="text-white text-center py-4">
          <p> © Zainab & keerthika 2023. All right reserved</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardHome;
