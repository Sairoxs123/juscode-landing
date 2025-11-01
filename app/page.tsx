import Hero from "./Hero";
import PageContent from "./PageContent";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <PageContent />
    </div>
  );
}
