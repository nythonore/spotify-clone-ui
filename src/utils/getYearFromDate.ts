export const getYearFromDate = (date: string) => {
	const formatDate = new Date(date);
	return formatDate.getFullYear();
};
