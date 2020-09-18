# Official Biurad Website 👊

This project is built as a fully javascript based prerendered static app using [React] and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> :rocket: `master` is automatically deployed to [biurad.com]

## 🔰 Introduction

This is the official website for [biurad.com] built with React, TypeScript, GraphQL, Type-GraphQL & React-Bootstrap. we used graphql and type-graphql, so we can have fastest database access very easily. react bootstrap for styling, and typescript to add some advance features into our website.

## 🧑‍💻 Technologies We Have Used

We have used our own kind of folder structure similar to monorepo with Yarn Workspace. In our frontends we have thirteen different part of our website. Tech specification for specific part is given below:

### Default

- Apollo
- Typescript
- React Bootstrap
- React Hook Form
- JQuery


## 📦 Getting Started & Installation

For getting started with this project or contributing, you have to follow the below procedure. First navigate to the main directory. Then run below command for getting started with specific part.

```sh
git clone https://github.com/biurad/biurad.github.io.git
cd biurad.github.io

npm install
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```sh
npm run start
```

> Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**Generate a production build in `./build`:**

```sh
npm run build
```

## 📓 Documentation

For in-depth documentation before using this library. Full documentation on advanced usage, configuration, and customization can be found at [docs.biurad.com](https://docs.biurad.com).

## ⏫ Upgrading

Information on how to upgrade to newer versions of this library can be found in the [UPGRADE].

## 🏷️ Changelog

[SemVer](http://semver.org/) is followed closely. Minor and patch releases should not introduce breaking changes to the codebase; See [CHANGELOG] for more information on what has changed recently.

## 🛠️ Maintenance & Support

When a new **major** version is released (`1.0`, `2.0`, etc), the previous one (`0.19.x`) will receive bug fixes for _at least_ 3 months and security updates for 6 months after that new release comes out.

(This policy may change in the future and exceptions may be made on a case-by-case basis.)

**Professional support, including notification of new releases and security updates, is available at [Biurad Commits][commit].**

## 👷‍♀️ Contributing

To report a security vulnerability, please use the [Biurad Security](https://security.biurad.com). We will coordinate the fix and eventually commit the solution in this project.

Contributions to this library are **welcome**, especially ones that:

- Improve usability or flexibility without compromising our ability to adhere to [React].
- Optimize performance
- Fix issues with code and backward compatability.

Please see [CONTRIBUTING] for additional details.

## 🧪 Testing

```bash
$ npm run test
```

This will tests our website will run against Nodejs 12 version or higher using [jest].

## 👥 Credits & Acknowledgements

- [Divine Niiquaye Ibok][@divineniiquaye]
- [All Contributors][]

## 🙌 Sponsors

Are you interested in sponsoring development of this project? Reach out and support us on [Patreon](https://www.patreon.com/biurad) or see <https://biurad.com/sponsor> for a list of ways to contribute.

## 📄 License

**biurad/biurad.github.io** is licensed under the BSD-3 license. See the [`LICENSE`](LICENSE) file for more details.

## 🏛️ Governance

This project is primarily maintained by [Divine Niiquaye Ibok][@divineniiquaye]. Members of the [Biurad Lap][] Leadership Team may occasionally assist with some of these duties.

## 🗺️ Who Uses It?

You're free to use this package, but if it makes it to your production environment we highly appreciate you sending us an [email] or [message] mentioning this library. We publish all received request's at <https://patreons.biurad.com>.

[@divineniiquaye]: https://github.com/divineniiquaye
[commit]: https://commits.biurad.com/biurad.github.io.git
[UPGRADE]: UPGRADE.md
[CHANGELOG]: CHANGELOG.md
[CONTRIBUTING]: ./.github/CONTRIBUTING.md
[All Contributors]: https://github.com/biurad/biurad.github.io/contributors
[Biurad Lap]: https://team.biurad.com
[email]: support@biurad.com
[message]: https://projects.biurad.com/message
[React]: https://reactjs.org/
[biurad.com]: https://biurad.com
