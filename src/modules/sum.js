function sum(...args) {
	return args.reduce((acc, curr) => acc + curr, 0);
}

export default sum;