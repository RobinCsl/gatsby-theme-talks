# Gatsby Theme Talks

This is a Gatsby theme to showcase on your Gatsby website all the amazing talks you gave.

See the [live demo](https://robincsl-gatsby-theme-talks.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @robincsl/gatsby-theme-talks
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ["@robincsl/gatsby-theme-talks"],
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Options

There are two options currently available in this theme:

- `basePath` (defaults to `/`): determines the base path where the content of this theme should live on your Gatsby website',
- `contentPath` (defaults to `data`): determines where the content should be sourced for your talks.

To configure this theme, modify the corresponding option fields in your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: "@robincsl/gatsby-theme-talks",
      options: {
        basePath: "/talks",
        contentPath: "content/talks",
      },
    },
  ],
}
```

## Content format

To add talks to your webpage, add a YAML file in the folder at `contentPath`, e.g. `data/talks.yaml`, and use the following boilerplate:

```yaml
- name: <the name of your talk>
  location: <city, country>
  date: <date under the form 2019-02-19T16:30:00.000Z>
  eventName: <the name of the event/meetup where you gave/will give your talk>
  eventUrl: <the url of the event> [OPTIONAL]
  slidesUrl: <the url of your slides> [OPTIONAL]
  youtubeUrl: <the url of the YouTube video of your talk> [OPTIONAL]

- name: <the name of your other talk>
  location: <city, country>
  date: <date under the form 2019-02-19T16:30:00.000Z>
  eventName: <the name of the event/meetup where you gave/will give your talk>
  eventUrl: <the url of the event> [OPTIONAL]
  slidesUrl: <the url of your slides> [OPTIONAL]
  youtubeUrl: <the url of the YouTube video of your talk> [OPTIONAL]
```
