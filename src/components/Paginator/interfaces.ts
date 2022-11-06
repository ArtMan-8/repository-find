export interface IPaginator {
	pages: number;
	currentPage: number;
	setPage: (page: number) => void;
}
