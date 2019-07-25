# Gatsby Theme Talks

This is a bare-bones Gatsby theme to showcase how a [Theme Jam](https://themejam.gatsbyjs.org) submission should look.

See the [live demo](https://gatsby-theme-jam-example.netlify.com)

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
          }
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

## Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [ ] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [ ] Run a performance audit using [Lighthouse][] and/or [WebPageTest][]
- [ ] Set up a live demo using [Netlify][] or [GitHub Pages][]
- [ ] Add installation documentation to the README
- [ ] Update the `name` field in `package.json`
- [ ] Update the `author` field in `package.json`
- [ ] Update the `repository` field in `package.json`
- [ ] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [ ] Publish your theme to npm ([docs][npmpublish])
- [ ] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[webpagetest]: http://webpagetest.org/
[netlify]: https://netlify.com
[github pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
