## Setup

1. run `npm i`
1. setup a convex.dev account
1. run `npx convex dev`
1. create new project
1. ignore clerk errors for now in terminal
1. setup clerk.com account and create project
1. in clerk, create a jwt template (select convex) and copy domain
1. paste domain into convex.dev project's ENV variable as CLERK_JWT_ISSUER_DOMAIN
1. update your .env.local files using keys provided by clerk
1. run `npm run dev`
1. `open http://localhost:3000`
