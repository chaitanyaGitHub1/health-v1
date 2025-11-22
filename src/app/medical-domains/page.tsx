import Breadcrumb from "@/components/Common/Breadcrumb";
import MedicalDomains from "@/components/MedicalDomains";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Domains | HCE - Healthcare Innovation",
  description: "HCE supports a wide spectrum of clinical areas with single-use, reusable, and combination products.",
};

const MedicalDomainsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Medical Domains"
        description="HCE supports a wide spectrum of clinical areas with single-use, reusable, and combination products."
      />
      <MedicalDomains />
    </>
  );
};

export default MedicalDomainsPage;
