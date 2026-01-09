export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4 md:p-10 font-mono text-lg md:text-xl">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-white">PS C:\Users\michal\&gt;</span>
          <span className="text-yellow-400">Get-UserInfo</span>
        </div>
        <div className="ml-0 md:ml-4 text-gray-200">
          <p><span className="font-bold text-cyan-300 w-24 inline-block">Name:</span> Michal Batko</p>
          <p><span className="font-bold text-cyan-300 w-24 inline-block">Role:</span> System Administrator</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-white">PS C:\Users\michal\&gt;</span>
          <span className="text-yellow-400">Get-ContactDetails</span>
        </div>
        <div className="ml-0 md:ml-4 text-gray-200 flex flex-col gap-1">
          <p>
            <span className="font-bold text-cyan-300 w-32 inline-block">Email:</span>
            <a href="mailto:michal@batko.me" aria-label="Send email to michal@batko.me" className="hover:underline hover:text-white">michal@batko.me</a>
          </p>
          <p>
            <span className="font-bold text-cyan-300 w-32 inline-block">GitHub:</span>
            <a href="https://github.com/michalbatko" target="_blank" rel="noopener noreferrer" aria-label="Visit Michal Batko's GitHub profile" className="hover:underline hover:text-white">github.com/michalbatko</a>
          </p>
          <p>
            <span className="font-bold text-cyan-300 w-32 inline-block">LinkedIn:</span>
            <a href="https://linkedin.com/in/michal-batko" target="_blank" rel="noopener noreferrer" aria-label="Visit Michal Batko's LinkedIn profile" className="hover:underline hover:text-white">linkedin.com/in/michal-batko</a>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-white">PS C:\Users\michal\&gt;</span>
        <span className="animate-pulse bg-white text-transparent ml-2 select-none">_</span>
      </div>
    </main>
  );
}
