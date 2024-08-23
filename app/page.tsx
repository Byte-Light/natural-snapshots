import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeContent />
      <AboutMe />
      <Features />
      <RecentProjects />
      <ContactForm />
      <Footer />
    </main>
  );
}
