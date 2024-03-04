import { Entry } from "../../types.ts";
import { assertNever } from "../../utils.ts";
import HospitalEntryDetails from "./HospitalEntryDetails.tsx";
import OccupationalHealthcareEntryDetails from "./OccupationalHealthcareEntryDetails.tsx";
import HealthCheckEntryDetails from "./HealthCheckEntryDetails.tsx";
import "./style.css";

interface EntryProps {
  entry: Entry;
}

const EntryDetails = ({ entry }: EntryProps) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntryDetails entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;
    default:
      assertNever(entry);
  }
};

export default EntryDetails;
