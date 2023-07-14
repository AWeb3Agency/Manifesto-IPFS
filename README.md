# Manifesto-IPFS

## Getting Started

Development environment is served at [http://localhost:3000](http://localhost:3000).

To install, run `npm i`.

To start up, run `npm run dev`.

To update Swagger info, amend `src/configs/initialize-swagger.js`.

To generate `public/swagger-doc.json`, run `npm run swagger`.

To view `swagger` documentation, hit [http://localhost:3000/docs](http://localhost:3000/docs)


## Description

Swagger Spec is generated with `swagger-jsdoc`.

A JSON file [swagger-doc.json](public/swagger-doc.json) after `npm run swagger` is executed.

Swagger is served by NextJS at [/docs](src/pages/docs.tsx).