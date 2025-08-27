"use client";
import { useState } from "react";

export default function InteractionBar() {
    const [liked, setLiked] = useState(false);
    return (
        <div className="w-full">
            <div className="flex gap-2 pl-3">
                <button
                    className="flex items-center gap-1"
                    onClick={() => setLiked((v) => !v)}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.58496 2C8.1154 2 8.62493 2.21086 9 2.58594L10 3.58594L11 2.58594L11.1465 2.45312C11.5024 2.16152 11.9499 2 12.4141 2H14.5723C15.1955 2.00011 15.7918 2.28555 16.1768 2.78418L18.6895 6.04102L18.6904 6.04199L18.7627 6.14453C19.08 6.63641 19.0793 7.26997 18.7568 7.76172L18.6836 7.86523L11.1914 17.4229C10.6255 18.1442 9.55652 18.1898 8.92774 17.5576L8.8086 17.4229L1.31738 7.86523C0.898751 7.33116 0.892656 6.58206 1.30859 6.04199L1.30957 6.04102L3.82324 2.78418L3.97656 2.60742C4.35655 2.21891 4.8813 2 5.42774 2H7.58496ZM5.41113 4.00391L5.40625 4.00684L3.1377 6.94531L10 15.6992L16.8613 6.94629L14.5938 4.00684C14.5938 4.00684 14.5917 4.00527 14.5889 4.00391C14.5845 4.00182 14.5788 4.00006 14.5723 4H12.4141L10 6.41406L7.58496 4H5.42774C5.42099 4 5.41514 4.00195 5.41113 4.00391Z"
                            fill={liked ? "#F43F5E" : "#F4F5F7"}
                            style={{ transition: 'fill 0.3s' }}
                        />
                    </svg>
                    <p className={`text-xs font-medium font-['Inter'] leading-tight ${liked ? 'text-rose-500' : 'text-white'}`}>Like</p>
                </button>
                <div className="w-px self-stretch bg-gray-700" />
                <button className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4561 5.09257C11.4561 5.00782 11.555 4.96128 11.6201 5.01542L16.5771 9.15605C17.0556 9.55578 17.0556 10.2905 16.5771 10.6902L11.6201 14.8309C11.555 14.885 11.4561 14.8385 11.4561 14.7537V12.4422C7.23175 10.9927 4.10515 13.4303 3 14.9685C3 9.60292 8.06234 7.54076 11.4561 7.02421V5.09257Z" fill="#F4F5F7" />
                    </svg>
                    <p className="text-white text-xs font-medium font-['Inter'] leading-tight">Share</p>
                </button>
                <div className="w-px self-stretch bg-gray-700" />
                <button className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16H4V10Z" fill="#F4F5F7" />
                    </svg>
                    <p className="text-white text-xs font-medium font-['Inter'] leading-tight">Comment</p>
                </button>
            </div>
        </div>
    );
}