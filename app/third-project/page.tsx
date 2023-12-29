"use client"
import { useState } from "react";
import Toggle from "../ui/ariane/Toggle";
import Go from "../ui/ariane/Go";

export default function Page() {
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(false);
	const [switch3, setSwitch3] = useState(false);
	return (
			<section className="layout-toggle">
				<div className="toggles">
					<Toggle switchy={switch1} setSwitchy={setSwitch1} />
					<Toggle switchy={switch2} setSwitchy={setSwitch2} />
					<Toggle switchy={switch3} setSwitchy={setSwitch3} />
				</div>
				<div className="text">
					<Go
						startOrNot={
							switch1 === false && switch2 === false && switch3 === false
						}
					/>
				</div>
			</section>
	);
}
