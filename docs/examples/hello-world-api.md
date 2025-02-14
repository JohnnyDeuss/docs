---
title: Hello World API
---

Because Zuplo is programmable you can easily use it to create an API - with
built-in gateway features - that can be deployed to the edge.

## 1: Routes Setup

Open your **routes.json** file. You'll see you already have a route with a path
`/v1/hello-world` configured.

![Untitled](/media/getting-started-hello-world/default-route.png)

## 2: Open Module

Notice how the Request Handler is set to **Function** - and configured to use
the `default` export of the `hello-world` module. To see the module you can
click on that link. This should open the `hello-world.ts` file in your modules
folder.

![Untitled](/media/getting-started-hello-world/request-handler-link.png)

## 3: Edit Module

You'll see the file contains a function that returns `"What zup?"` (that's how
we say "Hello World" at Zuplo). Change this code to return anything you like,
maybe actually "Hello world!"

```ts
import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  context.log.info(`Hi, from inside your zup!`);
  return "Hello World?";
}
```

Make sure to press Save - **note** ⌘+S or CTRL+S works, depending on your OS.

## 4: Test

Invoke your API using the Test Console. Click on the lightning tab and select
the `hello-world.json` file. It should already have the correct Path configured
for you `/v1/hello-world`. Hit the Test button to invoke your API!

![Untitled](/media/getting-started-hello-world/test-client.png)

Notice how you can see your response in the body. Also notice how you can see
the 'Hi, from inside your zup' log entry below the body.

## Congratulations

Your API is now live btw - you can see the URL in settings. Why not try getting
that "Hello World" response from your browser?

![Untitled](/media/getting-started-hello-world/project-url.png)

Why not try one of the other getting started guides (above) or some of the
examples in our documentation:

- [Write your own policies](../overview/policies.md)
- [Archive requests to storage](../examples/archiving-requests-to-storage.md)
- [Setting up JWT auth with Auth0](../policies/auth0-jwt-auth-inbound.md)
