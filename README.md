![Image Banner](image_link.png)

# Overview of the project

A comprehensive chat application with PDF integration. This project is designed
to provide a seamless chat experience where users can **upload PDF files**,
create chats around them, and **interact with an AI assistant**. The AI
assistant uses the OpenAI API to generate responses based on the chat context.
The application also includes a _subscription feature_, where users can
subscribe to access premium features. The subscription process is handled using
_Stripe for payments_ and webhooks for event processing.

## Technologies and Frameworks

- Next.js
- React
- TypeScript
- Tailwind CSS
- Clerk
- Drizzle ORM
- PostgreSQL
- AWS SDK
- OpenAI API
- Stripe
- Axios
- Pinecone
- Drizzle-kit
- OpenAI Edge
- Neon Database Serverless
- Drizzle-orm/neon-http
- @tanstack/react-query
- @clerk/nextjs
- clsx
- tailwind-merge

---

## Environment Variables needed for the application

_Read steps below to get the values for the environment variables_

```Bash
#filename : .env
# CLERK SETUP
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# NEON DB
DATABASE_URL=
```

---

## Getting Started

1. Clone the repo and navigate to 'chatpdf' :

```Bash
git clone https://github.com/rkf2778/chatpdf
cd chatpdf
```

2. **Install the dependencies** : Requires
   **[Node.js](https://nodejs.org/en/download/)** to be installed

```Bash
npm install
```

3. **Setup Clerk**

   - Create an account in [here](https://clerk.com/)
   - Copy the keys displayed and paste it into the .env file :

   ```Bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= paste_key_here
   CLERK_SECRET_KEY= paste_key_here
   ```

4. **NEON DB** (To get DATABASE_URL for .env file)

   - Create an account [here](https://neon.tech/)
   - Create a project
   - Copy the URL shown and paste it into DATABASE_URL in .env file

   ```Bash
   DATABASE_URL = paste_key_here
   ```

5. **Drizzle ORM** is edge compatible. Hence we use this instead of Prisma.
   `Plus it's faster than Prisma.`

   - Push the DB to drizzle with drizzle-kit
   - `pg` in below command stands for PostgreSQL

   ```Bash
   npx drizzle-kit push:pg
   ```

   - Open Drizzle-kit studio

   ```Bash
   npx drizzle-kit studio
   ```
