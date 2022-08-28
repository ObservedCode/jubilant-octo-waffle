# jubilant-octo-waffle 😃🐙🧇
Typescript React Redux Graphql Apollo

1. `npx create-react-app . --template redux-typescript`
2. `npm install @apollo/client graphql`
<!-- you need to generate a schema from the api for apollo -->
3. add to package.json `"schema:download": "npx apollo service:download --enpoint https://anilist.co/graphql ./src/app/graphql.schema.json"`
4. need to change graphql to `"graphql": "^15.7.2",` in package.json


## File Structure
```
 App- 
     |- components (dummy components - recieve props and render to the browser - dont manage state - might have internal state but not global redux)
     |- containers (main big parts of the site - single web page)
```

Because we're using typescript we need to provide types for everything.