import data from "@/app/lib/Data.json";
import Job from "./Job";

const Board = () => {
	return (
		<section className="board">
			{data.map((element) => {
				return (
					<Job
						key={element.id}
						title={element.title}
						contractType={element.contractType}
						country={element.country}
						city={element.city}
						className={element.className}
					/>
				);
			})}
		</section>
	);
};

export default Board;
