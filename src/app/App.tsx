import { useState } from "react";

type Page = "home" | "resources" | "login";

const resources = [
  "Introduction to Computer Science",
  "Web Design Basics",
  "Data Structures",
  "Software Engineering",
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-4 px-8 border-b border-black">
        <div className="max-w-7xl mx-auto flex gap-8">
          <button
            onClick={() => setCurrentPage("home")}
            className="text-black hover:underline"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("resources")}
            className="text-black hover:underline"
          >
            Resources
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            className="text-black hover:underline"
          >
            Login
          </button>
        </div>
      </nav>

      {currentPage === "home" && <HomePage setPage={setCurrentPage} />}
      {currentPage === "resources" && <ResourcesPage />}
      {currentPage === "login" && <LoginPage />}
    </div>
  );
}

function HomePage({ setPage }: { setPage: (page: Page) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 text-center">
      <h1 className="mb-4">Bells University E-Library</h1>
      <p className="mb-8">Access academic books and resources online</p>
      <button
        onClick={() => setPage("resources")}
        className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800"
      >
        Browse Resources
      </button>
    </div>
  );
}

function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="mb-8">Available Resources</h1>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <span className="text-black">{resource}</span>
            <button className="px-4 py-2 bg-black text-white hover:bg-gray-800">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoginPage() {
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { matricNumber, password });
  };

  return (
    <div className="max-w-md mx-auto px-8 py-20">
      <h1 className="mb-8 text-center">Student Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="matricNumber" className="block mb-2 text-black">
            Matric Number
          </label>
          <input
            type="text"
            id="matricNumber"
            value={matricNumber}
            onChange={(e) => setMatricNumber(e.target.value)}
            className="w-full px-4 py-2 border border-black bg-white text-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-black bg-white text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-black text-white hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
