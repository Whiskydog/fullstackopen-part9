import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { HospitalEntry } from "../../types.ts";

interface HospitalEntryDetailsProps {
  entry: HospitalEntry;
}

const HospitalEntryDetails = ({ entry }: HospitalEntryDetailsProps) => {
  return (
    <div className="entry-details">
      <p>
        {entry.date} <LocalHospitalIcon />
      </p>
      <p>
        <em>{entry.description}</em>
      </p>
      <p>
        <strong>Discharge:</strong> {entry.discharge.date}{" "}
        {entry.discharge.criteria}
      </p>
      <p>
        <strong>Specialist:</strong> {entry.specialist}
      </p>
    </div>
  );
};

export default HospitalEntryDetails;
