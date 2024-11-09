import SideNav from "@/app/component/admin/SideNav";
import SearchBar from "@/app/component/common/SearchBar";
import UserCard from "@/app/component/admin/UserCard";

export default function Home() {
    return (
        <div className="flex">
            <SideNav />

            <div className="container mx-auto p-20">
                <SearchBar />

                <h1 className="font-bold text-xl">Users</h1>

                <hr />

                <div className="py-10 flex flex-col gap-10">
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                    <UserCard name="Mabas Maryam Idi" email="mabas.maryam@gmail.com" />
                </div>
            </div>
        </div>
    );
}
