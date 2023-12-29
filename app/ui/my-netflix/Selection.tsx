import { ReactElement } from "react";
import dataSelection from "@/app/lib/movies_rnexgr.json";

type SelectionProps = {
	classCategory: string;
	classPictures: string;
	classPicture: string;
};

const Selection = ({
	classCategory,
	classPictures,
	classPicture,
}: SelectionProps): ReactElement => {
	return (
		<>
			{dataSelection.map((block) => {
				return (
					<div key={block.category}>
						<div className={classCategory}>{block.category}</div>
						<div className={classPictures}>
							{block.images.map((element, index) => {
								return (
									<img
										key={element + index}
										className={classPicture}
										src={element}
									/>
								);
							})}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Selection;
