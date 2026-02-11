export function FramerIntegrations() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily =
    '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const integrations = [
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
    },
    {
      name: "OpenAI",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    },
    {
      name: "Anthropic",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecloud.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftazure.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kubernetes.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postgresql.svg",
    },
    /*
     Keep total cards at 8 so the existing grid rhythm is preserved.
    */
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="integrations"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,#d8e7f212_0%,#04070d_100%)]" />
      <div className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#d5dbe6b3_0%,#04070d00_100%)] opacity-10" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col gap-11 px-6 sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(216, 231, 242, 0.07)",
            }}
          >
            <svg
              className="h-[17px] w-[17px] text-[#d5dbe6]"
              viewBox="0 0 18 10.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" />
            </svg>
            <span
              className="text-xs uppercase text-[#d5dbe6]"
              style={{
                fontFamily: interFamily,
                fontSize: "12px",
                lineHeight: "1.3em",
                letterSpacing: "0em",
                fontWeight: 400,
              }}
            >
              Ecosystem
            </span>
          </div>

          <h2
            className="max-w-[980px] text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[44px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "linear-gradient(161deg, rgb(213, 219, 230) 51.657657657657666%, rgb(4, 7, 13) 166%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Works with your existing{" "}
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              stack
            </span>
          </h2>

          <p
            className="max-w-[720px] text-[16px] leading-[1.6] tracking-[-0.02em] text-[rgba(213,219,230,0.6)]"
            style={{ fontFamily: interFamily }}
          >
            Keep your preferred repo, cloud, runtime, and model providers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group relative flex min-h-[124px] flex-col items-center justify-center gap-3 overflow-hidden rounded-[16px] border border-[rgba(216,231,242,0.07)] bg-white/[0.02] px-3 py-5 transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_78%_10%,rgba(103,232,249,0.1)_0%,rgba(4,7,13,0)_75%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-[12px] border border-[rgba(216,231,242,0.12)] bg-[#04070d]/90">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-6 w-6 opacity-55 invert transition-all duration-300 group-hover:opacity-85"
                />
              </div>
              <span
                className="relative z-[1] text-center text-[12px] font-medium uppercase tracking-[0.08em] text-[rgba(213,219,230,0.72)] transition-colors duration-300 group-hover:text-cyan-100"
                style={{ fontFamily: interFamily }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
