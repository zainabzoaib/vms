import React from "react";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { useAuth } from "./AuthProvider";

const LogoutIconComponent = () => {
  const auth = useAuth();

  const handleLogout = () => {
    // Perform any additional cleanup or API calls if needed
    auth.logOut();
  };

  return (
    <LogoutIcon
      sx={{
        fontSize: 26,
        cursor: "pointer",
        color: "#a12b63",
        marginTop: "10px",
      }}
      onClick={handleLogout}
    />
  );
};

export default LogoutIconComponent;
