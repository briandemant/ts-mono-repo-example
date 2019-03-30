# Mono repo example

A basis for a typescript mono repo .. just add water :)

#### Prettify And Lint Code

It can clean up the code to adhere to a codestyle 

#### Package Linking Editor Support 

If you click on a function/interface a.s.o. you will be taken 
to the source

#### Support for making Commands

Commands can be created as sub commands for the general command 
(here named `geo`, but can be whatever you want it to be). 
It automatically delegates to each package with a sub command.

With one param package and command have same name

```bash
> geo main # => node commands/main/bin/main.js
main here
length 12.041594578792294
```

With two first is package second is sub command

```bash
> geo hello # => node commands/main/bin/hello.js
hello world!!
```
 
... all others are just params to the subcommand

```bash
> geo hello beautiful world # => node commands/main/bin/hello.js beautiful world
hello beautiful world
```
 

## Keeping The Repo Working

In order to keep the repo (build aso.) working as intended, here 
is a few things you should know.

#### Fast build

The first build is somewhat slow *(seconds)*, but the next build only builds the 
files that have changed *(milliseconds)*. When using the `yarn watch` you don't even
have to waste time running the build.

#### Ensuring build order

In the example commands/main is dependent upon libs/line which 
is dependant upon libs/point. By providing the dependencies explicitly
`tsc` compiles the modules in correct order. 

> commands/main => libs/line => libs/point

##### main: `commands/main/tsconfig.build.json`
```json
"references": [
    { "path": "../../libs/point/tsconfig.build.json" }, 
    { "path": "../../libs/line/tsconfig.build.json" }
],
```

##### main: `libs/line/tsconfig.build.json`
```json
"references": [{ "path": "../point/tsconfig.build.json" }]
```

##### main: `libs/point/tsconfig.build.json`
```json
"references": [ ]
```

## Uses

* [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
* [Lerna](https://lernajs.io/)
* [Typescript 3 Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
* [Prettier](https://prettier.io/)
* [Tslint](https://palantir.github.io/tslint/)

## Todo

* test .. using jest
* faster build with bazel?
