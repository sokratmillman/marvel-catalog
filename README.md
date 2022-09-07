# Marvel catalog

## About the project

This project was intended to be a studying project to learn Frontend practices.

And it is.

This app, started locally, will request Marvel public API and show some of the Marvel heroes and villains, and some comic books which are somehow connected.

Due to the architecture of the API, some initial requirements are not fulfilled (no pagination, searchbar doesn't provide any functionality).

And the number of items, shown on the page, is limited by 50. However, as the graph of comics-characters is connected (a lot of characters crossed their paths and so on), there is a way to reach some other comicbook/character with the initial amount of characters.

## Start

In order to run the project locally, clone this repo, then in project directory:

```
npm i
```

will install all required dependencies. \\
However, this won't be enough. In order to have an acces to API, one should get public API key on developer.marvel.com and add themselves to allowed hosts.\\
Then, in src/ folder add file `apikey.ts` with export of public API key.

Now:

```npm start```

will run the server.

It's done!
