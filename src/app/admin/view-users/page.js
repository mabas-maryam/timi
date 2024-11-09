import SideNav from "@/app/component/admin/SideNav";
import SearchBar from "@/app/component/common/SearchBar";

export default function Home() {
    return (
        <div className="flex">
            <SideNav />

            <div className="container mx-auto p-20">
                <SearchBar />

                <h1 className="font-bold text-xl">Users</h1>
                <hr />
                <div className="py-10 flex flex-col gap-10">

                </div>
            </div>
        </div>
    );
}
