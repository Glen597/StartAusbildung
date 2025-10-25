import Header from "@/Components/header";
import Search from "@/Components/FilterForm";
import Offres from "@/Components/offres";
import Footer from "@/Components/footer";

export default function Home() {
  return (

    <div >
      {/*Navbar*/}
        <section className=" w-full ">
            <Header />
        </section>
        <div className="  mx-auto w-[100%] max-w-[1200px] p-4 pt-20   ">
          {/*Formulaire de recherche */}
            <section className="">
                <Search />
            </section>
            {/* Offres de Ausbildung */}
            <section className=" ">
              <Offres />
            </section>
        </div>
           <section className="h-[400px] bg-[#111827]">
              <Footer/>
            </section>



    </div>
  );
}
