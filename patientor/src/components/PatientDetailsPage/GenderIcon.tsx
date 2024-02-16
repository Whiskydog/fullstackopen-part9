import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { Gender } from "../../types.ts";

interface GenderIconProps {
  gender: Gender;
}

const GenderIcon = ({ gender }: GenderIconProps) => {
  const styles = {
    verticalAlign: "sub",
  };

  switch (gender) {
    case Gender.Male:
      return <MaleIcon style={styles} />;
    case Gender.Female:
      return <FemaleIcon style={styles} />;
    default:
      return null;
  }
};

export default GenderIcon;
