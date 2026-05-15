import Contact from "@/sections/contact-me";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import PersonalProjects from "@/sections/personal-projects";
import WorkProjects from "@/sections/projects";

export default function Page() {
  return (
    <PageLayout>
      <div className="flex w-full max-w-[100rem] flex-col gap-6 text-center sm:text-left mx-auto z-10">
        <Hero />
        <PersonalProjects />
        <WorkProjects />
        {/* <Services /> */}
        <Contact />
      </div>
    </PageLayout>
  );
}

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex min-h-screen max-w-full flex-col items-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
    <Header />
    <main className="relative z-10 flex w-full flex-col items-center justify-start gap-16 px-4 pb-16 sm:items-start sm:px-5">
      {children}
    </main>
    <Footer />
  </div>
);
