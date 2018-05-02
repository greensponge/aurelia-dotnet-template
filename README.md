
<div align="center">
    <a href="https://aurelia.io/">
        <img width="150" height="150" src="https://cdn.worldvectorlogo.com/logos/aurelia-1.svg">
    </a>
    <a href="https://webpack.js.org/">
        <img width="150" height="150" hspace="10" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon-square-big.svg">
    </a>
    <a href="https://github.com/Microsoft/TypeScript">
        <img width="150" height="150" hspace="10" src="https://cdn.worldvectorlogo.com/logos/typescript.svg">
    </a>
    <a href="https://www.microsoft.com/net/download/windows">
        <img width="150" height="150" hspace="15" src="https://docs.microsoft.com/en-us/dotnet/images/hub/netcore.svg">
    </a>
    <h1>Aurelia dotnet template</h1>
    <hr>
</div>

### Description
This template is the result of the combination of what I liked from the original [JavascriptServices](https://github.com/aspnet/JavaScriptServices), MaximBalaganskiy's [AureliaDotnetTemplate](https://github.com/MaximBalaganskiy/AureliaDotnetTemplate) and the folder structure found in the code generated from the [Aurelia CLI](https://github.com/aurelia/cli).

### About
This repo uses the Aurelia framework, TypeScript, .NET Core 2, Bootstrap 4 and the latest Webpack. It has unit testing using mocha, chai and sinon as well as the e2e testing suite [testcafe](https://github.com/DevExpress/testcafe) with very basic examples included.

This repo uses font-awesome instead of glyphicons.

### Purpose
I wanted a template I could pull from when making new applications that uses the tools I like and is structured in a manner that is logical to me. I also wanted a location to keep an up to date webpack.config.

### Running the application
After pulling down the repository first run `dotnet restore`, then `yarn install` (or `npm install`, I recommend using yarn).

Then run the command: `dotnet run` and navigate to http://localhost:5000.

To change from port 5000 go to `Program.cs` and edit the line: `.UseUrls("http://localhost:5000/")`.

In order for hot-module-reload to work you need to make sure your environment is set for development, for example running: `$Env:ASPNETCORE_ENVIRONMENT = "Development"`.

### Testing
There are two npm scripts saved to the `package.json`. 

##### Unit
Running `npm run test` runs the unit tests located in `test/unit/*.spec.ts`.

##### E2E
First run the application and then from a new CLI run `npm run testcafe`, this will run the e2e tests located in `test/e2e/*`.

It's configured to use firefox, if you wish to use something else, for example chrome, simply change `firefox` to `chrome` under scripts in the `package.json`.
