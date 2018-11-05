# Rainy Day

Theme for Visual Studio Code using a desaturated colour palette

## Screenshots

## Installation

## Custom Edits

You can make custom edits to the theme in your VSCode `settings.json` file.

For an overview of scopes and syntax highlighting changes, see [this](https://www.sublimetext.com/docs/3/scope_naming.html) or [this](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers#_textmate-theme-rules)

For a VSCode color reference (primary UI elements), see [this](https://code.visualstudio.com/docs/getstarted/theme-color-reference)

## Contribute

Upcoming changes are tracked in the [develop branch](https://github.com/sho-87/vscode-rainy-day/tree/develop)

Pull requests are welcome! Changes to the theme itself requires knowledge of [TextMate grammar](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers#_textmate-theme-rules). However, contributions to the demo files are straightforward and very beginner friendly

### Theme Changes

The main color theme files can be found in the `/themes` directory. Changes to the color theme itself can be made in the corresponding `.json` file

**Note**: Before making a pull request, please format the `.json` file using [Prettier](https://github.com/prettier/prettier) (default configuration) to ensure formatting consistency

### Demo Files

The files in the `/demo` directory are used to test the color theme across different languages.

Feel free to either:

- Add new languages for testing (filename format: `<language_name>.<ext>`) or

- Add to the current language files by including more use cases (they're currently quite sparse)

**Note**: Python files should be formatted using [Black](https://github.com/ambv/black). Web-based languages (e.g. Javascript, Typescript) should be formatted using [Prettier](https://github.com/prettier/prettier). The default formatter configuration should be used in both cases.

## Feedback

If you have any problems or feature requests, please [open an issue](https://github.com/sho-87/vscode-rainy-day/issues/new)

For problems and bug reports, example code and a screenshot of the issue would be extremely useful

## Change Log

You can view the change log [here](CHANGELOG.md)
