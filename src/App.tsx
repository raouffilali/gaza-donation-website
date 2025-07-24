import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/LoadingScreen";
import { useAppLoading } from "./hooks/useAppLoading";

// Import components directly to avoid layout issues
import Header from "./components/Header";
import Hero from "./components/Hero";
import GazaSituationSection from "./components/GazaSituationSection";
import DonationSection from "./components/DonationSection";
import AboutSection from "./components/AboutSection";
import ImpactSection from "./components/ImpactSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const { isLoading } = useAppLoading();

  // Show loading screen during initial app load
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div className="w-full">
        <Header />
        <Hero />
        <DonationSection />
        <GazaSituationSection />
        <AboutSection />
        <ImpactSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
