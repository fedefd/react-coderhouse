import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DevicesIcon from "@mui/icons-material/Devices";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CreateIcon from "@mui/icons-material/Create";

export const getCategoryIcon = (category) => {
  switch (category) {
    case "Libros":
      return <LocalLibraryIcon />;
    case "dispositivos-electronicos":
      return <DevicesIcon />;
    case "juegos-de-mesa":
      return <SportsEsportsIcon />;
    case "merchadising-literario":
      return <EmojiObjectsIcon />;
    case "material-papeleria":
      return <CreateIcon />;
    default:
      return null;
  }
};
