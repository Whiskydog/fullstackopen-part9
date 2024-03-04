import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../../services/patients";
import { Patient } from "../../types.ts";
import GenderIcon from "./GenderIcon.tsx";
import EntryDetails from "./EntryDetails.tsx";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (id) {
      patientService.getOne(id).then((patient) => {
        setPatient(patient);
      });
    }
  }, [id]);

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
        <EntryDetails key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default PatientDetailsPage;
