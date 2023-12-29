type JobProps = {
	title: string;
	contractType: string;
	country: string;
	city: string;
	className: string;
};

const Job = ({ title, contractType, country, city, className }: JobProps) => {
	return (
		<section className={className}>
			<div className="titleSection">{title}</div>
			<div className="threeSpan">
				<span>{contractType} -</span>
				<span> {country} -</span>
				<span> {city}</span>
			</div>
		</section>
	);
};

export default Job;
