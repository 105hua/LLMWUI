import { AlignJustify, CirclePlus, MessageSquare } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="sidebar-colour text-white w-16 flex flex-col items-center py-6 h-screen border-r border-zinc-800/50">
            <div className="mb-8">
                <button className="p-3 rounded-lg hover:bg-zinc-800/40 transition-colors">
                    <AlignJustify size={20} className="text-zinc-400 hover:text-blue-400 transition-colors" />
                </button>
            </div>

            <div className="flex flex-col gap-2 items-center flex-grow">
                <button className="p-2 rounded-lg bg-zinc-800/70 hover:bg-zinc-700/50 transition-all">
                    <MessageSquare size={18} className="text-zinc-300" />
                </button>
                {/* You can add more conversation buttons here */}
            </div>

            <div className="mt-auto mb-6">
                <button className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 hover:opacity-90 transition-opacity">
                    <CirclePlus size={20} />
                </button>
            </div>
        </div>
    )
}