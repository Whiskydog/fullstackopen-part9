import { Entry } from "../../types.ts";

interface EntryProps {
  entry: Entry;
  getDiagnosisName: (code: string) => string;
}

const EntryDetails = ({ entry, getDiagnosisName }: EntryProps) => {
  return (
    <div>
      <p>
        {entry.date} {entry.description}
      </p>
      {entry.diagnosisCodes && (
        <ul>
          {entry.diagnosisCodes.map((code) => (
            <li key={code}>
              {code} {getDiagnosisName(code)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EntryDetails;
