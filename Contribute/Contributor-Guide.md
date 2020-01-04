---
uuid: 4ab1d73e-6223-4b71-9a28-092b27583437
draft: true
title: "Contributor Guide"
path: /contribute/Contributor-Guide
description: "Nexraid Docs Contributor Guide"
keywords: 
  - contributor
  - guide
  - nexraid
  - docs
  - OpenSource
sidebar: contribute
date: 2020-01-05
version_date: 2020-01-05
version_name: 1.0.0
version_changelog: First version
author: lunghao
manager: lunghao
---

# Nexraid Docs Contributor Guide

Welcome to the [Nexraid Docs](https://docs.nexraid.com) Contributor Guide!

Several of the Nexraid documentation sets are open source and hosted on GitHub. Not all document sets are completely open source but many have public-facing repos where you can make suggested changes via pull requests. This open source approach streamlines and improves communication between product engineers, content teams, and customers, and has other advantages:

- Open source repos _plan in the open_ to get feedback on what docs are most needed.
- Open source repos _review in the open_ to publish the most helpful content on our first release.
- Open source repos _update in the open_ to make it easier to continuously improve the content.

The user experience on [docs.nexraid.com](https://docs.nexraid.com) integrates [GitHub](https://github.com) workflows directly to make it even easier. Start by [editing the document you are viewing](#quick-edits-to-existing-documents). Or, help by [reviewing new topics](#review-open-prs), or [create quality issues](#create-quality-issues).

> [!IMPORTANT]
> All repositories that publish to docs.nexraid.com have adopted the [Nexraid Open Source Code of Conduct](https://docs.nexraid.com/codeofconduct/). For more information, please contact [support@nexraid.com](mailto:support@nexraid.com) with any questions or comments.


## Quick Edits to Existing Documents

Quick edits streamline the process to report and fix small errors and omissions in documents. Despite all efforts, small grammar and spelling errors _do_ make their way into our published documents. While you can create issues to report mistakes, it's faster and easier to create a pull request (PR) to fix the issue, when the option is available.

1. Some docs pages allow you to edit content directly in the browser. If so, you'll see an **Edit** button like the one shown below. Clicking the **Edit** (or equivalently localized) button takes you to the source file on GitHub. If the **Edit** button (pencil icon without text) is missing, that means the documentation page is not available to be changed.

   ![Location of the Edit link](./media/index/edit-article.png)

2. Next, click the pencil icon, to edit the article as shown. If the pencil icon is grayed out, you need to either login to your GitHub account or create a new account. 

   ![Location of the pencil icon](./media/index/edit-icon.png)


3. Make your changes in the web editor. Click the **Preview changes** tab to check the formatting of your change.

4. Once you have made your changes, scroll to the bottom of the page. Enter a title and description for your changes and click **Propose file change** as shown in the following figure:

   ![Propose file change](./media/index/submit-pull-request.png)

5. Now that you've proposed your change, you need to ask the owners of the repository to "pull" your changes into their repository. This is done using something called a "pull request". When you clicked on **Propose file change** in the figure above, you should have been taken to a new page that looks like the following figure:

   ![create pull request](media/index/create-pull-request.png)

   Click **Create pull request**, enter a title (and optionally a description) for the pull request, and then click **Create pull request** again. (If you are new to GitHub, see [About Pull Requests](https://help.github.com/en/articles/about-pull-requests) for more information.)

6. That's it! Content team members will review and merge your PR. You may get some feedback requesting changes if you made larger changes.

The GitHub editing UI responds to your permissions on the repository. The preceding images are accurate for contributors that do not have write permissions to the target repository. GitHub automatically creates a fork of the target repository in your account. If you have write-access to the target repository, GitHub creates a new branch in the target repo. The branch name has the form **\<GitHubId\>-patch-n** using your GitHub ID, and a numeric identifier for the patch branch.

We use pull requests for all changes, even for contributors that have write-access. Most repositories have the `master` branch protected so that updates must be submitted as pull requests.

The in-browser editing experience is best for minor or infrequent changes. If you make large contributions or use advanced Git features (such as branch management or advanced merge conflict resolution), you need to [fork the repo and work locally](how-to-write-workflows-major.md).

> [!NOTE]
> If enabled, you can edit an article in **any language**. Based on the type of edit, any edit that significantly modifies the content of the article will be handled internally to submit a change to the same article in English so that it will get localized in all languages if approved. Your suggested improvements will not only positively affect articles in your own language, but in all available languages.


## Review Open PRs

You can read new topics before they are published by checking the currently open PRs. Reviews follow the [GitHub flow](https://guides.github.com/introduction/flow/) process. You can see proposed updates or new articles in public repositories. Review them and add your comments. Look at any of our docs repositories, and check the open pull requests (PRs) for areas that interest you. Community feedback on proposed updates helps the entire community.


## Create quality issues

Our docs are a continuous work in progress. Good issues help us focus our efforts on the highest priorities for the community. The more detail you can provide, the more helpful the issue. Tell us what information you sought. Tell us the search terms you used. If you can't get started, tell us how you want to start exploring unfamiliar technology.

Many of Nexraid's documentation pages have a **Feedback** section at the bottom of the page where you can click to leave **Product feedback** or **Content feedback** to track issues that are specific to that article.

Issues start the conversation about what's needed. The content team will respond to these issues with ideas for what we can add, and ask for your opinions. When we create a draft, we'll ask you to [review the PR](#review-open-prs).


## Get more involved

Other topics help you get started productively contributing to Nexraid Docs. They explain working with GitHub repositories, Markdown tools, and extensions used in the Nexraid Docs platform.
