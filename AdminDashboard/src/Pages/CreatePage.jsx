import { CreateRisk } from "../Components/CreateRisk";
import CreateDoctor from "../Components/DoctorForm";
import PHIForm from "../Components/PHIForm";

export function CreateDoctorPage() {
    return (
        <CreateDoctor />
    )
}

export function CreatePHIPage() {
    return (
        <PHIForm />
    )
}

export function CreateRiskPage() {
    return (
        <CreateRisk />
    )
}