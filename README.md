
![stars](https://img.shields.io/github/stars/redis-developer/redis-developer.github.io)
![forks](https://img.shields.io/github/forks/redis-developer/redis-developer.github.io)
![issues](https://img.shields.io/github/issues/redis-developer/redis-developer.github.io)
![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fredis-developer%2Fredis-developer.github.io)



# Redis Developer Hub

Redis Developer Hub is basically a journey carved out for Redis developer community. The journey is defined in terms of "Create > Develop > Explore" . The "Create" section allows you to get started with Redis, creating Redis database locally as well as over Cloud in the form of DBaaS. The "Develop" section allows you to build your app using Redis clients. Finally, the "Explore" section helps you to explore your Redis database using robust tools like RedisInsight, Redis Data Source for Grafana, RIOT and many more...

## Table of Contents

1. [How to contribute?](#how-to-contribute)
2. [How to add a new author?](#how-to-add-a-new-author)
3. [How to modify the homepage banner](#how-to-modify-the-homepage-banner)



## How to contribute

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. Follow these steps to contribute to this developer site:


**Note:** You should use Node 16.  If using `nvm`, type `nvm use` before installing.

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Testing the local site

```console
npm run serve
```

## How to add a new author

Add a new author as follows:

* Edit `docusaurus.config.js` and add a new author object into the `authors` object:

```javascript
customFields: {
  authors: {
    simon: {
      name: 'Simon Prickett',
      link: 'https://twitter.com/simon_prickett',
      title: 'Manager, Developer Advocacy',
      image: 'profile_pic_simon_prickett.jpg'
    },
    suze: {
      name: 'Suze Shardlow',
      link: 'https://twitter.com/SuzeShardlow',
      title: 'Developer Community Manager'
    }
  }
},
```

* Give each author a unique name in the `authors` object.  
* The `link` field can be set to any of your social media profiles or personal website etc.
* The `image` field is optional.  If omitted, a default silhouette image will be used.
* If providing a value for the `image` field, please name your image `profile_pic_<author_name>.jpg|.png` and add it to the `static/img` folder.
* Make sure that the image is 640px square and use a service such as [tinypng.com](https://tinypng.com/) to reduce the file size.
* When you want to tag a document as written by the new author, edit its front matter e.g.:

```yaml
---
id: index-hacktoberfest
title: Hacktoberfest 2021 at Redis
sidebar_label: Hacktoberfest 2021
slug: /hacktoberfest/
authors: [suze,simon]
---
```

* Note that multiple authors are supported as shown above.

## Suppressing Next/Previous and Edit this Page Controls

By default, each page has navigation at the bottom for the next and previous pages, as well as an "Edit this page" link.  If you want to suppress all or some of these, add the following extra front matter to your page's `.mdx` file:

```yaml
custom_edit_url: null
pagination_next: null
pagination_prev: null
```

## How to modify the homepage banner

In order to modify the homepage banner, you will need to edit the ```docusaurus.config.js``` file placed under the root of the repository.
You can directly search for `announcementBar` and make your preferred changes.


```
announcementBar: {
       id: 'redisconf20201cfp', // Any value that will identify this message.
       content: '<p class="text"> RedisDays Available Now On-Demand. </p> <a href="https://redis.com/redisdays/" target="_blank" rel="noopener"     class="btn">Learn More</a>',
       //  content: '<p class="text"></p> <a href="https://redislabs.com/redisconf/" target="_blank" rel="noopener" class="btn"></a>',
       backgroundColor: '#fff', // Defaults to `#fff`.
       textColor: '#000', // Defaults to `#000`.
       isCloseable: true, // Defaults to `true`.
     },
```


