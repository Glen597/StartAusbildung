import Header from "@/Components/header";
import Search from "@/Components/FilterForm";

export default function Home() {
  return (

    <div >
        <section className=" w-full">
            <Header />
        </section>
        <div className="overflow-x-hidden h-screen mx-auto w-[100%] max-w-[1200px] p-4 py-20">
            <section className="min-h-[720px]">
                <Search />
            </section>
        </div>



    </div>
  );
}
