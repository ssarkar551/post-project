import React, { Suspense } from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			<div>
				<Suspense>
					<SideBar />
				</Suspense>
			</div>
			<div>{children}</div>
		</div>
	);
}
