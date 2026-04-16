const randomRes: string[] = [
  "I am working in this! Be pacient.",
  "Is this supposed to be working?",
  "Working on this, but it's a bit tricky. Stay tuned!",
  "This feature is in the works, but it's taking a bit longer than expected. Thanks for your patience!",
  "Oops... This may not be available yet!",
  "Wait, am I supposed to have this working? I'm on it!",
];

export default function Contact() {
  return (
    <>
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Contact Me
      </h2>
      <p className="text-black dark:text-zinc-500">
        {randomRes[Math.floor(Math.random() * randomRes.length)]}
      </p>
    </>
  );
}
