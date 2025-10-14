import Header from "@/components/header";
import Search from "@/components/FilterForm";
import Offres from "@/components/offres";

export default function Home() {
  return (

    <div >
      {/*Navbar*/}
        <section className=" w-full ">
            <Header />
        </section>
        <div className="overflow-x-hidden overflow-y-scroll scrollbar-hide h-screen mx-auto w-[100%] max-w-[1200px] p-4 pt-20   ">
          {/*Formulaire de recherche */}
            <section className="">
                <Search />
            </section>
            {/* Offres de Ausbildung */}
            <section className=" mt-[00px] stick">
              <Offres />
            </section>
        </div>



    </div>
  );
}
