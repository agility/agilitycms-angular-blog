# Agility CMS + Angular -> Blog
This is a sample Angular 11 blog with Agility CMS.  You can use this as a starting point to build a fully-featured Angular App with a headless cms like Agility.

### Builds:

- Preview: https://agilitycms-angular-blog-preview.netlify.app/
  - [![Netlify Status](https://api.netlify.com/api/v1/badges/8ecd8982-86bf-498a-a05d-7ecbf4bbf11b/deploy-status)](https://app.netlify.com/sites/agilitycms-angular-blog-preview/deploys)

- Production: https://agilitycms-angular-blog.netlify.app/
  - [![Netlify Status](https://api.netlify.com/api/v1/badges/0f0a9c03-92a2-4b6a-8d71-187b449c8566/deploy-status)](https://app.netlify.com/sites/agilitycms-angular-blog/deploys)

## Getting Started
Angular and Agility CMS, also TypeScript? Oh ya, let's go!

### Agility CMS Account
The first thing you need is a free Agility CMS account. [You can get that here 👋](https://manager.agilitycms.com/org/subscriptions/instance-setup?template=blog-with-nextjs&plan=agility-free).
Since this Angular starter is so ✨new✨, we don't have an Official Starter package for it, so for now, we're linking to our NextJS starter, which happens to have the right content model for this 🧐.

### Clone the Repo

Now that you've got the **content**, *you need the `code`!*

Go ahead and clone the repo from github: 👇
```shell
https://github.com/agility/agilitycms-angular-blog.git
```

### Install Dependencies

`npm install` or `yarn install`

Normally, this will create 9,999,999,999 files in your `node_modules` folder.  Luckily, we're only gonna create 9,999,999 for this small demo.

 YAY! 👏👏👏


### Environment Variables
You care about the environment don't you? 🌲🌳🌴🎋

Either way, you're gonna need to grab a few variables from your Agility CMS account.  Head over to the [API Keys page](https://manager.agilitycms.com/settings/apikeys) in Agility CMS (https://manager.agilitycms.com/settings/apikeys) and grab your GUID, and API Keys for Preview and Fetch.

- Open up your `src/environments` folder
- Overwrite the values in the `environment.ts` file.
  - 🗄 Use your PREVIEW KEY for the API Key.
- Overwrite the values in the `environment.prod.ts` file
  - 🗄 Use your FETCH KEY for the API Key.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This will also load the latest (staging mode) content from Agility CMS.  When you change content in the CMS, simply reload your page to see those changes updated in the site.

### Agility Service
Agility CMS content is loaded using methods in the `agility/agility.service.ts` class.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Agility CMS modules are named `module-[module_name]`, and are also registered in the `agility/module.service.ts` file, indexed by the module reference name in lower case.  Each module component implements `IAgilityModuleComponent` with a special `data` input property that has the content for that module.

Check out the examples we've provided to learn more!

## Build

Run `npm run dev` to build the project in preview mode. The build artifacts will be stored in the `dist/` directory.

Run `npm run build` flag for a production build.

## Further help

### Angular
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Agility CMS
To get help with Agility CMS, reach out to us on our website https://agilitycms.com
