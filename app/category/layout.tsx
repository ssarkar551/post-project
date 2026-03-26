import React, { Suspense } from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			<div className="flex justify-evenly mt-2 p-2">
				<div className="pr-2 border-r-2 border-r-blue-950 max-h-full">
					<Suspense>
						<SideBar />
					</Suspense>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}
