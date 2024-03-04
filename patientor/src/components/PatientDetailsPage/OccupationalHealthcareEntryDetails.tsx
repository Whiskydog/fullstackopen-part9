import { OccupationalHealthcareEntry } from "../../types.ts";
import WorkIcon from "@mui/icons-material/Work";
import DiagnosisList from "./DiagnosisList.tsx";

interface OccupationalHealthcareEntryDetailsProps {
  entry: OccupationalHealthcareEntry;
}

const OccupationalHealthcareEntryDetails = ({
  entry,
}: OccupationalHealthcareEntryDetailsProps) => {
  return (
    <div className="entry-details">
      <p>
        {entry.date} <WorkIcon /> {entry.employerName}
      </p>
      <p>
        <em>{entry.description}</em>
      </p>
      <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
      {entry.sickLeave && (
        <p>
          <strong>Sick leave:</strong> {entry.sickLeave.startDate} -{" "}
          {entry.sickLeave.endDate}
        </p>
      )}
      <p>
        <strong>Specialist:</strong> {entry.specialist}
      </p>
    </div>
  );
};

export default OccupationalHealthcareEntryDetails;
