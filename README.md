# humans

> A handy cli for managing your humans.

## Install

```
$ npx humans init
```

Humans init will setup a `humans` project with a stubbed config file.

## Usage

```
  Description


  Usage
    $ humans <command> [options]

  Available Commands
    init
    resolve

  For more info, run any command with the `--help` flag
    $ humans init --help
    $ humans resolve --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message
```

A humans package.json will come complete with three yarn scripts for easy running. Each will reference the `.humansrc` configuration file created at init.

```json
{
  "scripts": {
    "add": "humans add",
    "resolve": "humans resolve",
    "remove": "humans remove"
  }
}
```

### add

Adds a user to your configuration

### remove

Removes a user from your configuration

### resolve

## Configuration
