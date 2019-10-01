# Edge Sheets: FFG Star Wars RPG Character generator

[![Actions Status](https://github.com/RMSD/EdgeSheet/workflows/Run CI/badge.svg)](https://https://github.com/RMSD/EdgeSheet/actions)

## Local Development

This website is a statically generated site using gatsby, with local json as the backing datasource. This provides a fast, responsive experience.

* Run `npm install -g gatsby-cli`.
* Run `npm install`.

### How to run this on your local

Gatsby commands have been wired to simple npm scripts.

* Run `npm develop`.

This will start the server on localhost:8000, which you can hit with your web browser. For more indepth information on the underlying `gatsby devlop` command, see the [gatsby docs](https://www.gatsbyjs.org/docs/gatsby-cli/).

### Running Tests

(Coming Soon)

### How to deploy manually

Running `npm deploy` is configured properly to:

* Run gatsby build with prefix-path on
* Clear the old docs folder
* Copy the generated /public folder to the /docs folder. Github serves github pages from /docs; /public is gitignored as it is a purely local step.

You will need to push this to master/create a pull request against master afterwards.

## How to Contribute

If you are not a maintainer, please fork this repo and make a pull request against master when you are ready.

## Why make this site

The goal of this site is to provide a small lightweight experience that other SW FFG RPG tools do not offer. Each tool listed below has welcome place with SW RPG players, and EdgeSheets aims to add another alternative to the enviroment for a different use case.

Intent:

* Lightweight Cross platform experience.
* Simple to use.
* Offers Customizability/flexibility.
* A quick refrence sheet for your character.
* Free.

What this site is not:

* A rule book. This site is intended to give you a quick reference as to  what your character has in one glance. It does not tell you how to apply those stats or feats. You will still need a rulebook to understand how the game works (or even how to create a character in the first place).
* An all encompasing system platform like the OggDude Character Generator, or Roll20. The character sheet will be as editable as possible outside of the immediately calculatable items. It will be up to you to track what you spend your xp on, What feats you currently have; and how the rules of the game actually work.
* A place to store your character sheets. A fuction to import/export to JSON will be provided so you may store it locally/in other cloud services.

### Comparisons Legends of the Galaxy/OggDude Character Generator

Pros:

* All encomposing platform.
* In depth system and tooling.
* Tracking across characters, teaches you the system.

Cons:

* Very heavyweight and slow.
* Requires a download.
* Only works on windows.
* As it teaches you the rules, feats are not easy to reference.

### Comparisons with SWSheets.com

Pros:

* Cross platform.
* Manages many characters per account.
* Offers a simple UI

Cons:

* All characters are public.
* No place to manage feats.
* Requires sign up/account.
* Lots of manual entry.

### Comparisons with Fringer's Datapad

Granted, I don't have a lot of experience with this one, but at first glance...

Pros:

* Simple UI.
* Multiple characters.
* Simple to set up.

Cons:

* Much like OggDude's generator, feats require cross refrencing from multiple places, making what you need to remember during combat enormous, making combat slow and a chore.
* IOS only (No Android, and you can't use it on PC/Mac/Linux even if you like the program better).
* No Android ( :( )
