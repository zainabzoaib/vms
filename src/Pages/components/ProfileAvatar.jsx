// ProfileAvatarButton.jsx
import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ProfileAvatarButton = ({ onClick, src, alt }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        background: "none",
        border: "none",
        outline: "none",
      }}
    >
        <div>
       <Typography variant="body2" sx={{ fontWeight: 'bold', lineHeight: '6px', marginTop: '5px' }}>
         Zainab
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Admin
        </Typography>
        </div>
      <Avatar
        src={src}
        alt={alt}
        sx={{ width: 50, height: 50, marginLeft: 1, marginRight: 1 }}
      />
      
    </button>
  );
};

export default ProfileAvatarButton;