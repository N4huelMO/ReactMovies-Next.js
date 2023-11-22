import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import HeroImages from "@/components/HeroImages";
import Series from "@/components/Series";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Header />
      <Headline />
      <HeroImages />

      <div className="w-5/6 mx-auto text-white my-10">
        <Trending />

        <ComingSoon />

        <Series />
      </div>

      <Footer />
    </>
  );
}
