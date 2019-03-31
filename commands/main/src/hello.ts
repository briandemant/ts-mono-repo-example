function start() {
	const args = [...process.argv]
	args.shift() // node
	args.shift() // file
	const qwe: number = 0
	if (args.length > qwe) {
		console.log("hello", args.join(" "))
	} else {
		console.log("hello world!!")
	}
}

start()

export interface Hello {
	readonly nothing: string
}
