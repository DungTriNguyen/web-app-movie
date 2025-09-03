"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

type SearchBarProps = {
    searchTerm?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};

export default function SearchBar({ searchTerm, onChange, onSearch }: SearchBarProps) {
    const t = useTranslations("academy");

    return (
        <div className="w-full md:w-auto px-4 bg-search md:!bg-accent rounded-md pl-6 pr-1 min-w-0 md:min-w-[350px] mb-2 md:mb-0">
            <div className="flex items-center gap-6 justify-between">
                <input
                    value={searchTerm}
                    onChange={onChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch()
                        }
                    }}
                    type="text"
                    placeholder={t("search placeholder")}
                    className="w-full py-4 md:py-2 rounded-md border-none focus:outline-none focus:ring-0 text-slate-400 text-sm font-medium font-['Inter'] leading-snug focus:text-white"
                />
                <Button variant={"ghost"} size="icon" onClick={onSearch}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2809 19.1911C14.7267 20.274 12.8371 20.909 10.7992 20.909C5.49728 20.909 1.19922 16.6109 1.19922 11.309C1.19922 6.00705 5.49728 1.70898 10.7992 1.70898C16.1012 1.70898 20.3992 6.00705 20.3992 11.309C20.3992 13.3471 19.7641 15.2369 18.681 16.7912L22.7991 20.9093L20.3991 23.3093L16.2809 19.1911ZM17.9992 11.309C17.9992 15.2854 14.7757 18.509 10.7992 18.509C6.82277 18.509 3.59922 15.2854 3.59922 11.309C3.59922 7.33253 6.82277 4.10898 10.7992 4.10898C14.7757 4.10898 17.9992 7.33253 17.9992 11.309Z" fill="#F4F5F7" />
                    </svg>
                </Button>

            </div>
        </div>
    );
}