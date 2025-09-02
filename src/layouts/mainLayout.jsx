import { Outlet } from "react-router-dom";
// @import components
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayOut() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
