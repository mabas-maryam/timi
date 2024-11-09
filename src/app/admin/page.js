import SideNav from "@/app/component/admin/SideNav";
import Card from "@/app/component/admin/Card";

export default function Home() {
    return (
        <div className="flex">
            <SideNav />

            <div className="container m-auto p-20">
                <h1 className="font-bold text-xl">Dashboard</h1>
                <div className="py-10 flex flex-col gap-10">
                    <div className="flex gap-10">
                        <Card title="Total Users" body="2,000,000,000"/>
                        <Card title="Total Items in inventory" body="2,000,000,000"/>
                    </div>
                    <div className="flex gap-10">
                        <Card title="Total Cereal" body="2,000,000,000"/>
                        <Card title="Total Drinks" body="2,000,000,000"/>
                        <Card title="Total Choco Bars" body="2,000,000,000"/>
                    </div>
                    <div className="flex gap-10">
                        <Card title="Total Biscuits" body="2,000,000,000"/>
                        <Card title="Total Spread" body="2,000,000,000"/>
                        <Card title="Total Nuts" body="2,000,000,000"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
