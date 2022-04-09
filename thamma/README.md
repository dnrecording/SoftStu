## File Structure

Here's a very high level view of some of the files involved

my-app
- ├── .vscode/          # vs code configs
- ├── bin/              # generated dotnet output
- ├── ClientApp         # React App - seeded with CRA
- │----├── build/        # generated react output
- │----├── public/       # static assets
- │----├── src/          # react app source
- │----└── package.json  # npm configuration
- ├── Controllers/      # dotnet controllers
- ├── Models/           # dotnet models
- ├── Pages/            # razor pages
- ├── Program.cs        # dotnet entry point
- ├── Startup.cs        # dotnet app configuration
- └── my-app.csproj     # project config and build steps

## Get MongoDB

- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

## Get mongosh

- https://www.mongodb.com/docs/mongodb-shell/install/

## Instruction to use MongoDB with Web API

- https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-6.0&tabs=visual-studio-code