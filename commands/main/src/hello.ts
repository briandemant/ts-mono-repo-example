const [node, file, ...rest] = process.argv

function start() {
	const qwe: number = 0
	if (rest.length > qwe) {
		console.log("hello", rest.join(" "))
	} else {
		console.log("hello world!!")
	}
}

start()