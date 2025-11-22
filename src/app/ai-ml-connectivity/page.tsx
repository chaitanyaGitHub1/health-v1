import Breadcrumb from "@/components/Common/Breadcrumb";
import AIMLConnectivity from "@/components/AIMLConnectivity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI/ML & Connectivity | HCE - Connected Healthcare Solutions",
  description: "Connected devices, data platforms, and intelligent insights for medical devices.",
};

const AIMLConnectivityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="AI/ML & Connectivity"
        description="Connected devices, data platforms, and intelligent insights for medical devices."
      />
      <AIMLConnectivity />
    </>
  );
};

export default AIMLConnectivityPage;
