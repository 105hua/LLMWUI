"use client";

import { Brain, ArrowRight } from "lucide-react";
import { useState } from "react";
import {getGreeting} from "@/app/utils/getGreeting";

export default function Main() {
    const [inputText, setInputText] = useState("");
    const [greeting, setGreeting] = useState(getGreeting());

    return (
        <div className="text-white w-full">
            <div className="flex flex-col items-center justify-center h-screen w-full">
                <div className="w-full max-w-2xl px-4 transition-all">
                    <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/30 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800/50 shadow-xl">
                        <div className="flex items-center mb-6">
                            <div className="bg-zinc-800/80 p-3 rounded-xl mr-4">
                                <Brain size={28} className="text-blue-400" />
                            </div>
                            <h1 className="text-3xl font-medium bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">
                                {greeting}
                            </h1>
                        </div>

                        <div className="relative">
                            <textarea
                                className="w-full p-4 pr-12 outline-none resize-none rounded-xl bg-zinc-900/80 border border-zinc-800/80 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                placeholder="What's on your mind?"
                                rows={3}
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <button
                                className="absolute right-3 bottom-3 p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
                                aria-label="Send message"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}