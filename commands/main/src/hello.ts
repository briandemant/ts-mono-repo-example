function start() {
	const args = [...process.argv]
	args.shift() // node
	args.shift() // file

	const magicNumber = 0

	if (args.length > magicNumber) {
		console.log("hello", args.join(" "))
	} else {
		console.log("hello world!!")
	}
}

start()

export interface Hello {
	readonly nothing: string
}
