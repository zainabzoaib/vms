import React from 'react';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from './AuthContext';

const LogoutIconComponent = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    // Perform any additional cleanup or API calls if needed
    logout();
  };

  return (
    <LogoutIcon
      sx={{ fontSize: 28, cursor: 'pointer', color: '#141763', marginTop: '10px' }}
      onClick={handleLogout}
    />
  );
};

export default LogoutIconComponent;