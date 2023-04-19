import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

const LogOutButton = ({ handleClick }) => {
  return (
    <IconButton
      aria-label="logOut"
      size="Large"
      onClick={handleClick}
      sx={{
        color: "#FFF",
      }}
    >
      <LogoutIcon />
    </IconButton>
  );
};
export default LogOutButton;
