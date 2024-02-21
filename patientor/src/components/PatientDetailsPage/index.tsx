import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../../services/patients";
import diagnosisService from "../../services/diagnoses.ts";
import { Diagnosis, Patient } from "../../types.ts";
import GenderIcon from "./GenderIcon.tsx";
import EntryDetails from "./EntryDetails.tsx";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    if (id) {
      patientService.getOne(id).then((patient) => {
        setPatient(patient);
      });
    }
  }, [id]);

  useEffect(() => {
    diagnosisService.getAll().then((diagnoses) => {
      setDiagnoses(diagnoses);
    });
  }, []);

  const getDiagnosisName = (code: string): string => {
    const diagnosis = diagnoses.find((d) => d.code === code);
    return diagnosis?.name || "";
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        {patient.name} <GenderIcon gender={patient.gender} />
      </h2>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <h3>entries</h3>
      {patient.entries.map((entry) => (
        <EntryDetails
          key={entry.id}
          entry={entry}
          getDiagnosisName={getDiagnosisName}
        />
      ))}
    </div>
  );
};

export default PatientDetailsPage;
