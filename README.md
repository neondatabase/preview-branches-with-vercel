# Preview Branches for every Vercel Preview Deployment

This is an example project that shows how you can create a branch for every preview deployment on Vercel. 


## How it works

There are two workflows in this project:
- `deploy-preview.yml` - this is triggered when a Pull request is opened or when new commits are pushed to the branch. It creates a Neon branch and creates a preview deployment for every commit. The workflow also runs Prisma Migrate after creating the branch to apply any pending migrations.
- `deploy-production.yml`- this is triggered when you push commits to the main branch (so after merging a pull request). It applies any pending migrations and then deploys the app to production. It also deletes the Neon branch that was created for the preview deployment.


## Prerequisites

For the workflows to work, you need to add the following secrets to your GitHub repository:
- `VERCEL_TOKEN`  
- `NEON_API_KEY` - this is the API key for the Neon user that will be used to create the branches. You can find it in the [account settings](https://console.neon.tech/app/settings/account).
- `NEON_PROJECT_ID` - this is the ID of the Neon project. You can find it in the project settings on Neon.
- `DATABASE_URL` - this is the pooled connection to the database. It has a `-pooler` suffix
- `DIRECT_DATABASE_URL` - this is the direct connection string to the database
- `PG_USERNAME` - username of the database role
- `PG_PASSWORD` - password of the database role

If you're unfamiliar with how to add secrets to a GitHub repository, you can read more about in [GitHub's documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

## Ignored build step

Since we're creating preview deployments using GitHub actions, it's a good idea to [disable the build step](https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel) on Vercel. 



## set up project locallydasda

If you want to use this project as a playground, you can you can set it up locally.

1. Clone this repo

```bash
git clone
```

2. Install dependencies

```bash
npm install
```

3. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

4. Add the database credentials:

```bash
DATABASE_URL = "" # the pooled connection to the database. It has a `-pooler` suffix
DIRECT_DATABASE_URL = "" # the direct connection string to the database
SHADOW_DATABASE_URL = "" # this is used during development
```

4. Run the setup script which creates the tables and runs a seed script:

```bash
npm run setup
```

5. Deploy the project to Vercel

6. Open a pull request and see the preview deployment in action

