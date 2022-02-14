# svelte-blogger

This is a blog built with sveltekit, tailwind and daisyUI, made to be used as my personal blog.

This app also use graphql and use markdown to write posts.

## screenshots

#### home

##### dark theme
![dark](https://user-images.githubusercontent.com/80367187/153780717-9fed7c5e-16aa-47d3-9006-d3e06d8028de.png)

##### light theme
![light](https://user-images.githubusercontent.com/80367187/153780725-8d2a63a0-e239-4cc2-9628-3d26fedbc499.png)

#### code block with syntax highlight with JetBrains Mono font
![code](https://user-images.githubusercontent.com/80367187/153780650-615491e3-39c0-4ab8-966d-f18202f8ac63.png)

#### output code
![output](https://user-images.githubusercontent.com/80367187/153780654-441401a6-7c15-4e98-b3c7-e714e989d872.png)


## How use it

Just fork or clone the repository, you will need a graphql api, I decide to not implemeted my own so i personally use GraphCMS, and it is so easy!

My GraphCMS schema looks like it:

![GraphCMS Model](https://user-images.githubusercontent.com/80367187/153779468-0012dfe1-adca-4a27-a91c-79283e900f10.png)

After creating just grab your host uri and your token and set as env

```
VITE_GRAPHCMS_HOST=
VITE_GRAPHCMS_TOKEN=

````

Now that you have graphql configured enter in config folder in src

You need to change the `base.ts` file with your configs

```typescript
export const about = {
	name: "your name",
	img: "your profile image",
	description: "your description",
	skills: [/*array of objects with props -> name: string, percent: number*/],
	tags: [/*string array*/]
};

export const social = {
	github: "your github username",
	linkedin: "your linkedin username",
	instagram: "your instagram username",
};

export const site = {
	title: 'site title,
	navTitle: 'navbar title',
	lang: 'lang "en-US" or "pt-BR"'
};


```

Now with everything configured, follow steps bellow to start in dev or to build de project, is very simple and fast to deploy in vercel!


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment.
