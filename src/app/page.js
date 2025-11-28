import AboutShop from "@/components/template/AboutShop";
import BlackBox from "@/components/template/BlackBox";
import CoustomCoffe from "@/components/template/CoustomCoffe";
import HeroSection from "@/components/template/HeroSection";
import LastArticle from "@/components/template/LastArticle";
import SpecialSlider from "@/components/template/SpecialSlider";

export default function Home() {
  return (
    <>
        <HeroSection />
        <BlackBox />
        <SpecialSlider /> 
        <AboutShop />
        <CoustomCoffe />
        <LastArticle />
    </>
  );
}
