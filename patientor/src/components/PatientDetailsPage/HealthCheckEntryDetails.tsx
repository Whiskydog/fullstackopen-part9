import { HealthCheckEntry } from "../../types.ts";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthCheckRatingIcon from "./HealthCheckRatingIcon.tsx";
import DiagnosisList from "./DiagnosisList.tsx";

interface HealthCheckEntryDetailsProps {
  entry: HealthCheckEntry;
}

const HealthCheckEntryDetails = ({ entry }: HealthCheckEntryDetailsProps) => {
  return (
    <div className="entry-details">
      <p>
        {entry.date} <MedicalServicesIcon />{" "}
        <HealthCheckRatingIcon healthCheckRating={entry.healthCheckRating} />
      </p>
      <p>
        <em>{entry.description}</em>
      </p>
      <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
      <p>
        <strong>Specialist:</strong> {entry.specialist}
      </p>
    </div>
  );
};

export default HealthCheckEntryDetails;
