import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/LoadingScreen";
import { useAppLoading } from "./hooks/useAppLoading";

import "./App.css";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const GazaSituationSection = lazy(
  () => import("./components/GazaSituationSection")
);
const DonationSection = lazy(() => import("./components/DonationSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ImpactSection = lazy(() => import("./components/ImpactSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const { isLoading } = useAppLoading();

  // Show loading screen during initial app load
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
      <Suspense fallback={<LoadingScreen />}>
        <Header />
        <Hero />
        <GazaSituationSection />
        <DonationSection />
        <AboutSection />
        <ImpactSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
