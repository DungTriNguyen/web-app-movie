"use client";

import { Button } from "@/components/ui/button";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Copy,
    Share2,
    MessageCircle,
    Send,
} from "lucide-react";
import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/sharer/sharer.php?u=" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/intent/tweet?url=" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" }, // IG không có share URL chính thức
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/shareArticle?url=" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://api.whatsapp.com/send?text=" },
    { name: "Telegram", icon: Send, url: "https://t.me/share/url?url=" },
];

type ShareDialogProps = {
    trigger: ReactNode;
};

export default function ShareDialog({ trigger }: ShareDialogProps) {
    const [open, setOpen] = useState(false);
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleShare = (baseUrl: string) => {
        window.open(`${baseUrl}${encodeURIComponent(pageUrl)}`, "_blank");
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(pageUrl);
        alert("Copied to clipboard!");
    };

    return (
        <span style={{ display: "inline-block" }}>
            <span onClick={() => setOpen(true)}>{trigger}</span>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-full max-w-md rounded-2xl bg-[#1a1a1a] text-white px-4 sm:px-6 py-4">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold">Share</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-wrap md:grid md:grid-cols-4 gap-4 mt-4">
                        {socialLinks.map(({ name, icon: Icon, url }) => (
                            <button
                                key={name}
                                onClick={() => handleShare(url)}
                                className="flex flex-col items-center justify-center gap-1 hover:opacity-80 transition"
                            >
                                <div className="bg-[#2a2a2a] p-3 rounded-full">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs">{name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-6">
                        <label className="text-sm text-gray-400">Copy page link</label>
                        <div className="flex items-center mt-2 bg-[#2a2a2a] px-3 py-2 rounded-lg overflow-x-auto">
                            <span className="flex-1 text-xs break-all">{pageUrl}</span>
                            <button onClick={handleCopy}>
                                <Copy className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </span>
    );
}
