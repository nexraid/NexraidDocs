# Nexraid Documentation

[![Build Status](https://travis-ci.org/nexraid/NexraidDocs.svg?branch=master)](https://travis-ci.org/nexraid/NexraidDocs)

Welcome to the open-source [documentation](https://docs.nexraid.com) of [Nexraid](https://www.nexraid.com). Please review this README file to understand how you can assist in contributing to the Nexraid documentation.


## Getting Started

Contributing to open source is more than just providing updates, it's also about letting us know when there is an issue. Read our [Contributing Guidance](https://docs.nexraid.com/Contribute/Contributing-to-Nexraid-Documentation) to find out more.


### Prerequisites

You've decided to contribute, that's great! To contribute to the documentation, you need a few tools.

Contributing to the documentation requires a GitHub account. If you don't have an account, follow the instructions for the [GitHub account setup](https://docs.nexraid.com/Contribute/github-account-setup) from our contributor guide.

#### Download

Install the following tools:

* [Git](https://git-scm.com/download)
* [Visual Studio Code](https://code.visualstudio.com/Download)
* [Docs Authoring Pack](https://marketplace.visualstudio.com/items?itemName=docsmsft.docs-authoring-pack) extension for Visual Studio Code

#### Install

Follow the instructions provided in the [Install content authoring tools](https://docs.microsoft.com/contribute/get-started-setup-tools) from our contributor guide.

#### Project Structure

- `checker`: an Node.js checker project for this document repository
- `documents`: directory for all document markdown files
- `snippets`: directory for all snippet files. These files can be used in document markdown files like this: `[@include example include](Example-Snippet.md)`
- `media`: directory for all media files that will be used in documents
    - `images`: The image files in this directory could be used in document markdown file like this: `![](../media/images/img.png)`
    - `assets`: The asset files in this directory could be visisted by URI like this: `/assets/file.zip`
- `sidebars`: directory for all sidebar definition files

## License

Please refer to [LICENSE](LICENSE.txt) for all Licensing information.

## Code of Conduct

This project has adopted the [Nexraid Open Source Code of Conduct](https://docs.nexraid.com/codeofconduct/).
For more information, please contact [support@nexraid.com](mailto:support@nexraid.com) with any additional questions or comments.
