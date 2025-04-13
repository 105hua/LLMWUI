import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

export default function Home() {
    return (
        <main className="flex min-h-screen bg-[#050505]">
            <Sidebar />
            <div className="flex-grow overflow-hidden">
                <Main />
            </div>
        </main>
    );
}