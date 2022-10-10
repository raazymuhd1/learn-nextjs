# This Repo Just For Documenting My Journey Of Learning **NEXTJS**

![official nextjs images](https://user-images.githubusercontent.com/65342312/194893086-71510489-f2e6-46b9-a739-03166915a465.jpg)

## Key topic of **nextjs** that i've learnt
i've learnt
- _serverSideRendering_ (SSR)

- _clientSideRendering_ (CSR)

- _staticSiteGeneration (SSG)
- _file base routing_

- _authentication_
- _link component_
- _head component_
- _deploy to vercel or netlify_

## How to setup nextjs project
**Run this command on your terminal or shell**
```shell
  npx create-next-app your-project-name
```

## Start the project
```shell
  npm run dev
```

## build for production
```shell
  npm run build
```

## How to setup nextjs with **tailwindcss**
**Step 1**
_run this command on terminal_
```shell
  npx create-next-app my-project
  cd my-project
```

**Step 2**
_run this command on terminal_
```shell
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```

**Step 3**
_on **tailwind.config.css** file_
```shell
  module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Step 4**
_on **global.css** file_
```shell
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

> _Keep learning guys :)_
