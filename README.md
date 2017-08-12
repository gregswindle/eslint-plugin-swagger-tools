# `eslint-plugin-swagger`

> {•••} An extensible linter with semantic validations for Swagger specifications.

[![License][license-image]][license-url] [![Readme Score][readme-score-img]][readme-score-url] [![Inline docs][inch-ci-img]][inch-ci-url] [![Build Status][travis-ci-img]][travis-ci-url] [![Codacy Badge][codacy-img]][codacy-url] [![Coverage Status][coveralls-img]][coveralls-url][![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-swagger.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-swagger?ref=badge_shield)
<br>
[![NSP Status][nsp-img]][nsp-url] [![bitHound Dependencies][bithound-dep-img]][bithound-dep-url] [![bitHound Dev Dependencies][bithound-dev-dep-img]][bithound-dev-dep-url]

## 1. Table of contents
<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [1. Table of contents](#1-table-of-contents)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
- [4. Supported rules](#4-supported-rules)
- [5. Rules in backlog](#5-rules-in-backlog)
- [6. Contributions](#6-contributions)
- [7. License](#7-license)

<!-- /TOC -->

## 2. Installation

You'll first need to install [`ESLint`](http://eslint.org):

```bash

$ npm i eslint --save-dev

```

Next, install `eslint-plugin-swagger`:

```bash

$ npm install eslint-plugin-swagger --save-dev

```

**Note:** If you installed `ESLint` globally (using the `-g` flag) then you must also install `eslint-plugin-swagger` globally.

## 3. Usage

> #### :information_source: Swagger file extensions
> `eslint-plugin-swagger` evaluates Swagger files that have a `.json`, `.yaml`, or `.yml` file extension.

Add `swagger` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json

{
    "plugins": [
        "swagger"
    ]
}

```


Then configure the rules you want to use under the rules section.

```json

{
    "rules": {
        "swagger/rule-name": 2
    }
}

```

Finally, run `ESLint` against your Swagger documents.

```bash

$ eslint path/to/swagger/docs/** --fix
```

## 4. Supported rules

> ###### `options` legend
>
> * :heavy_check_mark: The rule's log threshold can be extended or disabled
> * :wrench: Supports the `--fix` command line option

| `options`        | Rule | Description| Status |
|:----------------:|:-----|:-----------|:-------|
|  | [`no-dup-paths`][no-dup-paths-url] | Each API `path` should be unique.  | Completed |
|  | [`no-path-verbs`][no-path-verbs-url] | Prohibit verbs in api paths | Completed |
| :wrench: | [`require-plural-paths`][rule-plural-paths-url] | Require plural nouns in API paths | Completed |

## 5. Rules in backlog

The product backlog has lots of lonely `rules` looking for love from nice contributors like you. :kissing_heart: If you're interested, please:

1. Set up an [`eslint-plugin` development environment][eslint-dev-env-url].
2. Read the [contribution guidelines](./.github/CONTRIBUTING.md).
3. Select the rule you want to work on to create a pull request.
4. Follow the [Contributor Covenant Code of Conduct][code-of-conduct-url].
5. Achieve fame and glory!

> #### :information_source: Select a `rule`'s name to open a new issue.

| `options`        | Rule | Description| Status |
|:----------------:|:-----|:-----------|:-------|
|  | [`no-circular-refs`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-circular-refs%29%3A%20A%20definition/model%27s%20ancest...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | A definition/model's ancestor cannot be a descendant of said model. _(Circular Reference)_  | Available |
|  | [`no-definitions-without-refs`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-definitions-without-refs%29%3A%20Each%20referenceable%20definiti...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each reference-able definition must have references.  | Available |
|  | [`no-dup-ancestors`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-ancestors%29%3A%20A%20definition/model%20cannot%20d...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | A definition/model cannot declare a property that is already defined by one of its ancestors.  | Available |
|  | [`no-dup-auth-definition-refs`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-auth-definition-refs%29%3A%20Each%20authorization/security...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each authorization/security scope in an authorization/security definition should be unique.  | Available |
|  | [`no-dup-auth-scope-refs`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-auth-scope-refs%29%3A%20Each%20authorization/security...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each authorization/security reference should contain only unique scopes. _(Example: For an `oauth2` authorization/security requirement, when listing the required scopes, each scope should only be listed once.)_  | Available |
|  | [`no-dup-name-type-pair`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-name-type-pair%29%3A%20Each%20operation%20parameter%20sh...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each operation parameter should have a unique `name` and type combination, where Swagger 1.2 uses the `paramType` property and in Swagger 2.0 uses the `in` property to indicate type.  | Available |
|  | [`no-dup-op-methods`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-op-methods%29%3A%20Each%20operation%20in%20an%20API%20sh...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each operation in an API should have a unique `method` property.  | Available |
|  | [`require-uniform-params`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28require-uniform-params%29%3A%20Each%20defined%20operation%20path...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each defined operation path parameters must correspond to a named element in the API's path pattern. _(For example, you cannot have a path parameter named `id` for the following path `/pets/{petId}` but you must have a path parameter named `petId`.)_  | Available |
|  | [`no-dup-resource-paths`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-resource-paths%29%3A%20Each%20%60resourcePath%60%20should%20...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each `resourcePath` should be unique for each API Declaration in the API.  | Available |
|  | [`no-dup-response-message-code`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-dup-response-message-code%29%3A%20Each%20%60code%60%20in%20an%20operation...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each `code` in an operation's `responseMessages` should be unique.  | Available |
|  | [`no-empty-requireds`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-empty-requireds%29%3A%20Each%20definition/model%20prope...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each definition/model property listed in the `required` array must be defined in the `properties` of the model itself or one of its ancestors.  | Available |
|  | [`no-form-and-body`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-form-and-body%29%3A%20An%20operation%20cannot%20have%20a%20...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | An operation cannot have a `form` or `formData` parameter if it has a `body` parameter  | Available |
|  | [`no-id-model-mismatch`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-id-model-mismatch%29%3A%20Each%20model%27s%20%60id%60%20property%20...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each model's `id` property must match the corresponding key in the `models` section of the API Declaration. _(For example, a model with an id of `Person` should be found at the `Person` property in the API Declaration's `models` property and the `Person`'s `id` value must be `Person`.)_  | Available |
|  | [`no-multiple-inheritance`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-multiple-inheritance%29%3A%20Models%20are%20not%20allowed%20to%20d...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Models are not allowed to descend from multiple models. _(Multiple Inheritance)_  | Available |
|  | [`no-undefined-ref-definition`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28no-undefined-ref-definition%29%3A%20Each%20reference%20must%20point%20t...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each reference must point to an existing definition.  | Available |
|  | [`operation-body`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28operation-body%29%3A%20Each%20operation%20should%20have%20...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Each operation should have only one parameter of type `body`  | Available |
|  | [`path-definition`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28path-definition%29%3A%20The%20Resource%20Listing%20has%20an...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | The Resource Listing has an API whose `path` is not defined in any of the API Declarations.  | Available |
|  | [`require-array-items`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28require-array-items%29%3A%20The%20%60items%60%20property%20is%20req...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | The `items` property is required for all schemas/definitions of type `array`. _(See [swagger-api/swagger-spec/issues/174](https://github.com/swagger-api/swagger-spec/issues/174))_  | Available |
|  | [`require-default-value`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28require-default-value%29%3A%20Every%20place%20where%20a%20default...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | Every place where a default value can be provided, the default value must validate against the corresponding schema/definition. _(This is not handled by JSON Schema validators, at least not the one I am using, so we have to do this manually.  See [json-schema/JSON-Schema-Test-Suite/pull/67](https://github.com/json-schema/JSON-Schema-Test-Suite/pull/67))_  | Available |
|  | [`require-path-definition`](https://github.com/gregswindle/eslint-plugin-swagger/issues/new?title=feat%28require-path-definition%29%3A%20For%20each%20API%20path%20parameter...&labels[]=ESLint%3A%20Rule&labels[]=Status%3A%20Available&labels[]=Type%3A%20Feature&labels[]=Type%3A%20Docs) | For each API path parameter, all operations for the API path require corresponding path parameter definitions or the corresponding path parameter needs to be in the path's parameters.  | Available |

## 6. Contributions
:family: We warmly welcome contributors. Check out the guidelines for [Contributing to `eslint-plugin-swagger`](./.github/CONTRIBUTING.md) and our [Contributor Covenant Code of Conduct][code-of-conduct-url].

Contributions are stories with a beginning, a middle, and an end, all told through issues and pull requests.
 * [Peruse open issues][issues-url] or
 * [View rules in the backlog][rules-backlog-wiki-url]
 * [Open a new pull request (PR)][pr-url]

## 7. License

[Apache 2.0][license-url] :copyright: [Greg Swindle][author-url].

---

[![Greenkeeper badge][greenkeeper-img]][greenkeeper-url] [![StackShare][stackshare-img]][stackshare-url]

[author-url]: https://github.com/gregswindle
[bithound-dep-img]: https://www.bithound.io/github/gregswindle/eslint-plugin-swagger/badges/dependencies.svg
[bithound-dep-url]: https://www.bithound.io/github/gregswindle/eslint-plugin-swagger/develop/dependencies/npm
[bithound-dev-dep-img]: https://www.bithound.io/github/gregswindle/eslint-plugin-swagger/badges/devDependencies.svg
[bithound-dev-dep-url]: https://www.bithound.io/github/gregswindle/eslint-plugin-swagger/develop/dependencies/npm
[codacy-img]: https://api.codacy.com/project/badge/Grade/554fe390431b455a87ba6acde3ff2989?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/eslint-plugin-swagger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/eslint-plugin-swagger&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[coveralls-img]: https://coveralls.io/repos/github/gregswindle/eslint-plugin-swagger/badge.svg?branch=develop
[coveralls-url]: https://coveralls.io/github/gregswindle/eslint-plugin-swagger?branch=develop
[eslint-dev-env-url]: http://eslint.org/docs/developer-guide/development-environment
[greenkeeper-img]: https://badges.greenkeeper.io/gregswindle/eslint-plugin-swagger.svg?style=flat-square
[greenkeeper-url]: https://greenkeeper.io/
[inch-ci-img]: http://inch-ci.org/github/gregswindle/eslint-plugin-swagger.svg?branch=develop&style=flat-square
[inch-ci-url]: http://inch-ci.org/github/gregswindle/eslint-plugin-swagger
[issues-new-url]: https://github.com/gregswindle/eslint-plugin-swagger/issues/new
[issues-url]: https://github.com/gregswindle/eslint-plugin-swagger/issues
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square
[license-url]: ./LICENSE
[no-dup-paths-url]: ./docs/rules/no-dup-paths.md
[no-path-verbs-url]: ./docs/rules/no-path-verbs.md
[nsp-img]: https://nodesecurity.io/orgs/gregswindle/projects/2761fa76-bf1a-4e31-a642-679dfe55e575/badge
[nsp-url]: https://nodesecurity.io/orgs/gregswindle/projects/2761fa76-bf1a-4e31-a642-679dfe55e575
[pr-url]: https://github.com/gregswindle/eslint-plugin-swagger/pulls
[readme-score-img]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/eslint-plugin-swagger
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/eslint-plugin-swagger
[rule-plural-paths-url]: ./docs/rules/require-plural-paths.md
[rules-backlog-wiki-url]: https://github.com/gregswindle/eslint-plugin-swagger/wiki/Rules-backlog
[stackshare-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stackshare-url]: https://stackshare.io/gregswindle/eslint-plugin-swagger
[travis-ci-img]: https://travis-ci.org/gregswindle/eslint-plugin-swagger.svg?branch=develop&style=flat-square
[travis-ci-url]:  https://travis-ci.org/gregswindle/eslint-plugin-swagger


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-swagger.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Feslint-plugin-swagger?ref=badge_large)