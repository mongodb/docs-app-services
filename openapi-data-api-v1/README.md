# MongoDB Atlas Data API - OpenAPI Spec

This directory contains the OpenAPI source files for the Data API. We use Redocly CLI's
[bundle](https://redocly.com/docs/cli/commands/bundle/) functionality to combine
the separated source files into one combined file that we use in production.

## Why do we bundle the spec?

For large specs, this lets us split up the endpoints and avoid noise. It also
lets us do cool things like
[$ref](https://redocly.com/docs/resources/ref-guide/) content that's outside of
the OpenAPI spec. For example, the bundler lets us include code snippets
(possibly generated by Bluehawk) from a different directory, which a standard
OpenAPI definition cannot do.

## Work With The Spec

The development version of the spec (i.e. what the bundled version is based off
of) is `openapi.yaml`. This file is a standard OpenAPI spec file. By convention,
this file is almost all `$ref` references to components defined in separate yaml
files. We compile the development version into a single bundled file for
publishing.

### Setup

The bundle and preview commands use Redocly's OpenAPI CLI. Make sure to install
the CLI and other dependencies for this project by running:

```
npm install
```

### Add (or modify) an Endpoint

*Note: If you're editing an existing endpoint, you can skip to editing the file in step 3. Make sure to bundle when you're done!*

1. Add the endpoint path to `openapi.yaml`. It should `$ref` a separate file
   (that you'll create in the next step). By convention, the file should be in
   the `paths` directory and be named after the URL path with the slashes
   replaced by underscores.

   ```yaml
   # openapi.yaml
   paths:
    /action/doSomething:
      $ref: paths/action_doSomething.yaml
   ```

2. Create the endpoint definition file that you `$ref`'d in the `paths`
   directory.

   ```sh
   touch paths/action_doSomething.yaml
   ```

3. In the file, define the endpoint using standard OpenAPI schemas.

   ```yaml
   # paths/action_doSomething.yaml
   post:
     operationId: doSomething
     summary: Do Something
     description: Do something with your data in Atlas
     ...
   ```

4. You can define
   [components](https://swagger.io/docs/specification/components/) in the
   `components` directory:

   ```yaml
   # components/schemas/MyReusableSchema.yaml
   type: object
   properties:
     someField:
       type: string
       description: |
         A field in a reusable schema component
   ```

   and reference them across your schema files:

   ```yaml
   # paths/action_doSomething.yaml
   post:
     operationId: doSomething
     summary: Do Something
     description: Do something with your data in Atlas
     requestBody:
       content:
         application/json:
           schema:
             $ref: "../components/schemas/MyReusableSchema.yaml"
   ```

5. Bundle the Spec

   ```sh
   npm run bundle
   ```

### Preview Changes

You can get a near-instant, live-updating, local preview of the rendered OpenAPI
docs page. This preview uses a standard base theme, *not* the custom MongoDB
docs theme. For that, you have to publish to staging/prod.

There are two commands you can run.

One to preview the development spec while you're working on it:

```sh
npm run preview-dev
```

And another to preview the bundled spec:

```sh
npm run preview-bundled
```
