import CareGuidesClient from "./CareGuidesClient";
import { getAllCareGuides } from "@/lib/articles";

export default function CareGuidesPage() {
  const careGuides = getAllCareGuides();
  return <CareGuidesClient posters={careGuides} />;
}
