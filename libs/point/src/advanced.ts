export class Advanced {
	constructor(public qwe: string) {
		Advanced.hey(this)
	}

	static readonly hey = async (arg: Advanced) => {
		// this is a static function
		console.log(arg)
	}
}

console.log("success")
