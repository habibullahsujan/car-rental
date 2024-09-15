
import Image from "next/image";
import HeroBanner from "./(components)/HeroBanner";
import Navbar from "./(components)/Navbar";
import bg from '@/assets/bgImg.svg'
import RentSearch from "./(components)/RentSearch";
import HowItWorks from "./(components)/HowItWorks";
import CarBrands from "./(components)/CarBrands";
import WhyChooseUs from "./(components)/WhyChooseUs";
import PopularRentalDeals from "./(components)/PopularRentalDeals";
import Testimonials from "./(components)/Testimonials";
import AppDownloadSection from "./(components)/AppDownloadSection";
import Footer from "./(components)/Footer";
export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <div className=" relative z-20">
        <Navbar />
        <HeroBanner />
        <RentSearch />
        <div className="absolute  right-0 w-[500px] top-0 -z-10 h-[700px]">
          <Image src={bg} alt="bg" fill />
        </div>
      </div>
      <div>
        <HowItWorks />
        <CarBrands />
        <WhyChooseUs />
        <PopularRentalDeals />
        <Testimonials />
        <AppDownloadSection />
        <Footer />
      </div>
    </main>
  );
}
