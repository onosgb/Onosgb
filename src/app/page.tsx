import { openSource } from "../config";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

async function getGithubProfileData() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return {};
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch GitHub profile:", error);
    return {};
  }
}

export default async function Home() {
  const githubProfileData = await getGithubProfileData();

  return (
    <div className="font-sans min-h-screen">
      {/* Header/Navigation */}
      <Header
        githubUserName={githubProfileData?.login || openSource.githubUserName}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-500">GODBLESS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-black/70 dark:text-white/70 max-w-2xl">
            {githubProfileData.bio ||
              "A passionate web developer creating beautiful and functional digital experiences."}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-black/10 dark:border-white/10 px-6 py-3 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              View my work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Experienced Full Stack Developer with over 7 years of expertise
                in Angular, Nest.js, React, Next.js, and Node.js, specializing
                in building scalable, high-performance web applications and
                APIs.
              </p>
              <p className="mb-4">
                Proficient in crafting dynamic and responsive user interfaces
                using Angular and React, developing robust server-side solutions
                with Nest.js and Node.js, and leveraging Next.js for seamless
                SSR/CSR hybrid applications.
              </p>
              <p>
                Skilled in implementing advanced state management using NGRX,
                Redux, and React Context, as well as integrating RESTful and
                GraphQL APIs. Strong experience in designing scalable REST APIs,
                handling complex backend logic, and ensuring seamless
                frontend-backend integration.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  Angular
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  React
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  Next.js
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  Nest.js
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  Node.js
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  TypeScript
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  TailwindCSS
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  Redux/NGRX
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  REST APIs
                </div>
                <div className="bg-background p-3 rounded border border-black/10 dark:border-white/10">
                  GraphQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* OptimaConnect Project */}
            <div className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  OptimaConnect Image
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">OptimaConnect</h3>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  A robust data synchronization and analysis platform enabling
                  seamless data transfer from Lawcus to various cloud services.
                  Designed to organize and sync law firm data into Excel Power
                  BI format for advanced analysis with flexible subscription
                  models.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Nest.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Prisma
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    MongoDB
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://optimaconnect.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Pollinlink App Project */}
            <div className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Pollinlink Image
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Pollinlink App</h3>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  A comprehensive land tracking application that captures land
                  coordinates, entry points, hazards, and shelters, displaying
                  them interactively on a map. Built for optimized performance
                  and state management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Angular
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    NGRX Signal
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    MapBox
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.pollinlink.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Shelterlinks Project */}
            <div className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Shelterlinks Image
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">Shelterlinks</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded font-medium">
                    Founder
                  </span>
                </div>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  A Flutter-based real estate app that connects users to
                  verified agents. This app leverages mobile technology to
                  create a seamless property marketplace, enhancing user
                  engagement and trust in the real estate process.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Flutter
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Dart
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Supabase
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    MapBox
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-sm font-medium hover:underline">
                    View App
                  </a>
                </div>
              </div>
            </div>

            {/* InstantPower Project */}
            <div className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  InstantPower Image
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">InstantPower</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded font-medium">
                    Co-Founder
                  </span>
                </div>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  A comprehensive platform for paying electricity bills
                  seamlessly. Built as a co-founder, this solution enables users
                  to pay their electricity bills online with secure payment
                  processing and real-time transaction updates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Nest.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Paystack
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://instantpower.com.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* ODL Portal Project */}
            <div className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  ODL Portal Image
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Open Distance Learning Portal (ODL)
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  Led a development team in creating a comprehensive portal for
                  the University of Port Harcourt Business School, streamlining
                  administration and enhancing the learning experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Angular
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    MongoDB
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Tailwind
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://odel.uniport.edu.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-6">
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>

              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:onosgb@gmail.com`}
                  className="hover:text-blue-500 transition-colors"
                >
                  onosgb@gmail.com
                </a>
              </div>

              {/* Phone Contact */}
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+23443651142"
                  className="hover:text-blue-500 transition-colors"
                >
                  +234 814 365 1142
                </a>
              </div>

              {githubProfileData?.location && (
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{githubProfileData.location}</span>
                </div>
              )}
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href={
                githubProfileData.html_url ||
                `https://github.com/${openSource.githubUserName}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/onosgb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
          <p className="text-black/60 dark:text-white/60">
            &copy; {new Date().getFullYear()} ONOSGB. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
