import MemberSection from "../components/MemberSection";
import GallerySection from "../components/GallerySection";
import MenuOpener from "../components/MenuOpener";

const Home = () => {
  return (
    <main className="flex md:h-screen w-screen flex-col md:flex-row membro-bg">
      <MenuOpener />
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center">
        <MemberSection />
      </div>
      <div className="md:w-1/2 w-full h-1/2 md:h-full bg-black/20 flex flex-col justify-center items-center">
        <GallerySection />
      </div>
    </main>
  );
};

export default Home;
