import { useEffect, useState } from "react";
import { Diagnosis } from "../../types.ts";
import diagnosisService from "../../services/diagnoses";

interface DiagnosisListProps {
  diagnosisCodes: string[] | undefined;
}

const DiagnosisList = ({ diagnosisCodes }: DiagnosisListProps) => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>();

  useEffect(() => {
    diagnosisService
      .getAllByCodes(diagnosisCodes || [])
      .then((diagnoses) => setDiagnoses(diagnoses));
  }, [diagnosisCodes]);

  if (!diagnosisCodes) {
    return null;
  }

  return (
    <ul>
      {diagnoses?.map((diagnosis) => (
        <li key={diagnosis.code}>
          {diagnosis.code} {diagnosis.name}
        </li>
      ))}
    </ul>
  );
};

export default DiagnosisList;
