# Checkly Monitoring-as-code Example Project

This example project shows how you can use the Checkly CLI or run tests from a remote repository through CI/CD (GitHub & GitHub Actions) as well as showcase how results can be seen locally, on GH Actions, as well as on your [Checkly Dashboard](https://app.checklyhq.com/). A sample website is included to illustrate production tests and it is hosted with a third party service. The GitHub Action status badge can be seen here [![Action Status](https://github.com/austincasteel/Checkly-Example-Project/actions/workflows/workflow.yml/badge.svg)](https://github.com/AustinCasteel/Checkly-Example-Project/actions/workflows/workflow.yml) as well as the site itself can be viewed here [https://illustrious-bubblegum-fd876c.netlify.app/](https://illustrious-bubblegum-fd876c.netlify.app/).

## Project Structure

This project has the basic boilerplate files needed to get you started. A sample html website is held within the site directory to demonstrate functionality.

```text
.
├── .github
│   └── workflow.yml
├── README.md
├── __checks__
│   ├── homepage.spec.js
│   ├── navigation.spec.js
│   └── website.check.js
├── site
│   └── *example website src*
├── checkly.config.js
├── alert-channels.js
└── package.json
```

- Running `npx checkly test` will look for `.check.js` files and `.spec.js` in `__checks__` directories and execute them in a dry run, satisfying the local tests and all files being located within a single directory.

- Running `npx checkly deploy` will deploy your checks to Checkly, attach alert channels, and run them on a 10m schedule in the region `us-east-1` and `eu-west-1`.

- The `workflow.yml` is a GitHub Action that dry runs all the checks on Checkly, and if the dry runs pass, it deploys the checks. satisfying the CI/CD automation. More information about Checkly and CI/CD integrations and specifically GitHub Actions can be found [here](https://www.checklyhq.com/docs/cicd/github-actions/).

- To receive alerts for failed checks you can have alerts setup within your Checkly Dashboard [Alert Settings Screen](https://app.checklyhq.com/alerts/settings) or you can set them programmatically. The `alert-channel.js` file is where an email address is setup to receive alerts. More information about alert channels and their various options can be found [here](https://www.checklyhq.com/docs/cli/constructs-reference/#alertchannel).

## Local CLI Commands

Run the core CLI commands with `npx checkly <command>`

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).
