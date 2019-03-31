export class Advanced {
	private readonly prop: number = 42
	constructor(public qwe: string) {
		Advanced.hey(this, this.prop)
	}

	static readonly hey = async (arg: Advanced, prop: number) => {
		// this is a static function
		console.log(arg, prop)
	}
}

console.log("success")
