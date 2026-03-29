"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
const Searchwrapper = () => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLInputElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () =>
			document.removeEventListener("click", handleClickOutside, !isOpen);
	}, []);
	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus();
		}
	}, [isOpen]);
    useEffect(() => {
        const handlekeyDown = (e: KeyboardEvent) => {
            if(e.key === "Escape"){
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handlekeyDown);
        return () => document.removeEventListener("keydown", handlekeyDown);
    }, []);
	return (
		<div ref={containerRef} className="flex gap-4 justify-between">
			<input
				ref={inputRef}
				type="text"
				name="search-bar"
				id="search-bar"
				placeholder="What are we looking for today?"
				className={`transition-all duration-300 ease-in-out text-sm border border-[#0000fe] rounded-md outline-none ${isOpen ? "opacity-100 w-20 md:w-56 px-4 py-2 ml-2" : "opacity-0 w-0 px-0 py-0"}`}
			/>
			<button>
				<MagnifyingGlassIcon
					className="w-5 md:w-8 hover:text-blue-700 hover:bg-blue-50 cursor-pointer"
					onClick={toggleOpen}
                    aria-label="open search"
				/>
			</button>
		</div>
	);
};

export default Searchwrapper;
