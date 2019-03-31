const blog = {
	presets: ["@babel/preset-typescript", "@babel/preset-env"],
	plugins: ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"],
}

const ms = {
	presets: ["@babel/typescript", ["@babel/preset-env", { targets: { node: "current" } }]],
	plugins: ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"],
}

module.exports = ms
