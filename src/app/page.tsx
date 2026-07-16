export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Temecula ADU Services
      </h1>
      <p className="text-xl text-gray-600 max-w-xl mb-8">
        Accessory Dwelling Unit design, permitting, and construction in the
        Temecula Valley. Free consultations — let&apos;s build your backyard vision.
      </p>
      <a
        href="mailto:charlesprovido@gmail.com"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get a Free Quote
      </a>
      <p className="mt-12 text-sm text-gray-400">Full site launching soon.</p>
    </main>
  );
}
