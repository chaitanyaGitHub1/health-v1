import Breadcrumb from "@/components/Common/Breadcrumb";
import Leadership from "@/components/Leadership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | HCE - Experienced Team",
  description: "HCE's leadership team brings decades of experience across R&D, manufacturing, regulatory affairs, operations, and technology transfer in the medical device industry.",
};

const LeadershipPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Leadership"
        description="HCE's leadership team brings decades of experience across R&D, manufacturing, regulatory affairs, operations, and technology transfer in the medical device industry."
      />
      <Leadership />
    </>
  );
};

export default LeadershipPage;
