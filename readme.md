# Human Made Coding Standards

This is a codified version of [the Human Made style guide](http://engineering.hmn.md/how-we-work/style/). We include phpcs and ESLint rules.

## Setup

1. `composer require humanmade/coding-standards`
2. Add style checking to your Travis configuration with the following command:

```
vendor/bin/phpcs --standard=vendor/humanmade/coding-standards .
```

### Advanced/Extending

If you want to add further rules (such as WordPress.com VIP-specific rules), you can create your own custom standard file (e.g. `phpcs.ruleset.xml`):

```
<?xml version="1.0"?>
<ruleset>
	<!-- Use HM Coding Standards -->
	<rule ref="vendor/humanmade/coding-standards" />

	<!-- Add VIP-specific rules -->
	<rule ref="WordPress-VIP" />
</ruleset>
```

You can then reference this file when running phpcs:

```
vendor/bin/phpcs --standard=phpcs.ruleset.xml .
```


#### Excluding/Disabling Checks

You can also customise the rule to exclude elements if they aren't applicable to the project:

```
<rule ref="vendor/humanmade/coding-standards">
	<!-- Disable short array syntax -->
	<exclude name="HM.Debug.ForceShortArray" />

	<!-- Disable all ESLint checks... -->
	<exclude name="HM.Debug.ESLint" />

	<!-- Or disable just a singular rule -->
	<exclude name="HM.Debug.ESLint.no-unused-vars" />
</rule>
```


### Custom ESLint Configuration

This repo comes with a .eslintrc.yml file matching the HM coding standards. While checks can be disabled using the `<exclude />` rules, you can't add additional checks this way. Instead, you can create your own ESLint config file.

ESLint configuration files (`.eslintrc.js`, `.eslintrc.yaml`, `.eslintrc.yml`, `.eslintrc.json`) will be **autodetected** by phpcs and used automatically if they exist. Inside your configuration file, you can extend the HM Coding Standards lint file by referencing it by a path:

```
---
extends:
- vendor/humanmade/coding-standards/.eslintrc.yml
```

You can also use a custom path and reference this in your ruleset:

```
<rule ref="HM.Debug.ESLint">
	<properties>
		<property name="configFile" value="your/lint/config.yml"/>
	</properties>
</rule>
```

**Important Note:** This must come *after* the `vendor/humanmade/coding-standards` rule, and be a direct child of `<ruleset />`.


## Included Checks

The phpcs standard is based upon the `WordPress-VIP` standard from [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards), with [customisation and additions](HM/ruleset.xml) to match our style guide.

phpcs also includes ESLint checking based upon the `eslint:recommended` standard (checks from [this page](http://eslint.org/docs/rules/) marked with a check mark), with [customisation and additions](.eslintrc.yml) to match our style guide.

**Note:** ESLint checks are mapped from ESLint codes to phpcs codes by prefixing with `HM.Debug.ESLint`. e.g. the `no-unused-vars` ESLint code becomes `HM.Debug.ESLint.no-unused-vars`. You need to use the phpcs code when excluding specific rules.
