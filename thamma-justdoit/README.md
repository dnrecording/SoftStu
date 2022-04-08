File Structure
Here's a very high level view of some of the files involved

my-app
├── .vscode/          # vs code configs
├── bin/              # generated dotnet output
├── ClientApp         # React App - seeded with CRA
│   ├── build/        # generated react output
│   ├── public/       # static assets
│   ├── src/          # react app source
│   └── package.json  # npm configuration
├── Controllers/      # dotnet controllers
├── Models/           # dotnet models
├── Pages/            # razor pages
├── Program.cs        # dotnet entry point
├── Startup.cs        # dotnet app configuration
└── my-app.csproj     # project config and build steps