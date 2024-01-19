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
        fontSize: 28,
        cursor: "pointer",
        color: "#141763",
        marginTop: "10px",
      }}
      onClick={handleLogout}
    />
  );
};

export default LogoutIconComponent;
