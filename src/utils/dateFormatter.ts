export function dateFormatter(date: string) {
	return new Date(date).toLocaleString('pt-BR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
