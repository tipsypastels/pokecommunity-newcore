# Pokecommunity-Newcore
## Setup
(there will be more to this once we need to link into an actual database)

- Make sure you have `yarn` installed on your system.
- In the project directory, run `yarn install`.
- Development files (ES6) are stored in the `src` directory. Transpiled ES5 files (which are what the server actually runs) are stored in `lib`. The contents of this directory are gitignored, but they will be generated when you start the server and auto-generated every update. Do not modify `lib` files, your changes will not be persisted.
- Start the "server" (it doesn't do a whole lot yet) with `yarn start`.