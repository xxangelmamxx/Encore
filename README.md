# Encore

Submitted by: **Abha Mam**

Encore is a listicle web app that helps students discover live music happening near their college — indie shows, open mic nights, hip-hop cyphers, EDM raves, and everything in between. Browse upcoming events on the home page, then click into any event to see its full details.

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] The web app uses only HTML, CSS, and JavaScript without a frontend framework
- [x] Front page of web app is functional and appropriately styled
  - [x] The web app displays a title
  - [x] Website displays at least five unique list items (8 events)
  - [x] Each list item includes at least three displayed attributes (name, date, venue, genre, ticket price, and image)
- [x] Each list item has a corresponding page
  - [x] The user can click on each item in the list to see a detailed view of it, including all database fields (name, artists, date, venue, genre, ticket price, image, description)
- [x] The web app serves an appropriate 404 page when no matching route is defined
- [x] The webpage is styled with Picocss

The following **optional** features are implemented:

- [x] List items are displayed in a unique format (cards, laid out in a responsive grid)

## Video Walkthrough

<!-- Replace this with an actual GIF/video walkthrough of the app before submitting. -->
Here's a walkthrough of implemented user stories:

<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...

## Notes

Describe any challenges encountered while building the app.

- The `/:eventId` route re-sends the same `event.html` document for every ID, and the ID is parsed and matched against the data client-side with `fetch('/events')` — this mirrors the two-tier routing approach from the Unit 1 lab (server serves the shell, client fills it in).
- Because `client/public/event.html` and `client/public/404.html` are copied as static files (not processed by Vite like `index.html` is), their stylesheet is referenced as an absolute `/style.css` path rather than a Vite-bundled asset, and `style.css` lives in `client/public/` so it's copied verbatim on build.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
