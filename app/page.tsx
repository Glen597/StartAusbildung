import Header from "@/Components/header";
import Search from "@/Components/recherche";

export default function Home() {
  return (

    <div className="overflow-x-hidden h-screen  ">
        <section className=" w-full">
            <Header />
        </section>
        <div className="px-[300px] flex flex-col pt-[50px]">
            <section className="min-h-[720px]">
                <Search />
            </section>
        </div>

    </div>
  );
}
