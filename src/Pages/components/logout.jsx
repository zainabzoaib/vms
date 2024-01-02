import React from 'react';
import LogoutIcon from '@mui/icons-material/ExitToApp';

const LogoutIconComponent = ({ onLogout }) => {
  return (
    <LogoutIcon
      sx={{ fontSize: 28, cursor: 'pointer', color: '#141763', marginTop: '10px' }}
      onClick={onLogout}
    />
  );
};

export default LogoutIconComponent;