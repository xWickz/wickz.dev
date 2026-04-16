import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import PersonalProjects from "@/sections/personal-projects";
import WorkProjects from "@/sections/projects";
import Services from "@/sections/services";

export default function Page() {
  return (
    <PageLayout>
      <div className="flex w-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <Hero />
        <PersonalProjects />
        <WorkProjects />
        <Services />
        {/* <Contact /> */}
      </div>
    </PageLayout>
  );
}

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
    <Header />
    <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-start gap-12 px-6 pb-16 sm:items-start sm:px-16">
      {children}
    </main>
    <Footer />
  </div>
);
