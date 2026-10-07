import PrivacySection from "@/components/privacy-policy/PrivacySection";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how BRDC Malda collects, uses, and protects your personal and medical information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <PageHero crumb="Privacy Policy" title="Legal Information" titleAs="h2" />
      <PrivacySection />
    </div>
  );
}
