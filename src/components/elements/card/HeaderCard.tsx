interface HeaderCardProps {
	data: {
		category: string;
		name: string;
		description: string;
		subDescription: string;
		image: string;
	};
}

export const HeaderCard = ({ data }: HeaderCardProps) => {
	return (
		<div className='flex flex-col gap-6 lg:flex-row lg:items-end'>
			<img
				alt={data.name}
				src={data.image}
				className='h-60 w-full object-cover lg:w-60'
			/>

			<div>
				<p className='text-sm uppercase text-white'>{data.category}</p>
				<p className='mt-1 text-3xl font-bold text-white lg:text-8xl'>
					{data.name}
				</p>
				<p className='mt-8 text-base text-light'>{data.description}</p>
				<p className='mt-2 text-base text-white/90'>{data.subDescription}</p>
			</div>
		</div>
	);
};
