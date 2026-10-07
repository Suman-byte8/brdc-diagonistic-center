import AppointmentForm from "@/components/appointment/AppointmentForm";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Book An Appointment",
  description:
    "Schedule your diagnostic tests or doctor consultations online at BRDC Malda. Quick and easy booking via WhatsApp.",
};

export default function AppointmentPage() {
  return (
    <div className="bg-gradient-to-b from-brdc-offwhite via-white to-brdc-offwhite pb-16 sm:pb-24">
      <PageHero crumb="Book An Appointment" title="Secure Your" highlight="Appointment" />

      <div className="px-4 sm:px-8">
        <AppointmentForm />

        <p className="text-center text-brdc-text-secondary text-xs sm:text-sm mt-8 max-w-lg mx-auto leading-relaxed">
          *After clicking the submit button, you will be redirected to WhatsApp to
          confirm your details with our desk. Your data is processed securely as
          per our privacy policy.
        </p>
      </div>
    </div>
  );
}
