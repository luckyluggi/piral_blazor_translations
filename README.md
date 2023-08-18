# Repro Steps
- `cd ./my-app` and run `npm i` and then `npm run build`
- `cd ../blazorpilet` and run `dotnet build`
- `cd ../piral~/blazorpilet` and run `pilet debug`

#  Problem
Open `http://localhost:1234/example`.
When switching language via the 2 Buttons the current language updates, but the translations stay in the same language.