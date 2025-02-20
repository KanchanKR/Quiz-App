import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppRoutes from "../Routes/AppRoutes";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-blue-100 to-purple-100 ">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;