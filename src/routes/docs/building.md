---
title: "Building"
children: ["linux"]
---

| Table of Contents                                                 |
| :---------------------------------------------------------------- |
| [Platform-agnostic Requirements](#platform-agnostic-requirements) |
| [Getting the Code](#getting-the-code)                             |
| [Building with Cargo](#building-with-cargo)                       |
| [Automated CI Builds](#automated-builds)                          |

<h1 id="platform-agnostic-requirements">Platform-agnostic Requirements</h1>

You will need the following things, regardless of your platform of choice:

-   Rust installed - recommended via [rustup](https://rustup.rs).
-   An OpenGL-capable device - specific versions unknown as the OpenGL bindings being used
    don't specify supported versions. But to be safe, OpenGL 3.1+ devices should be
    compatible. This does mean that the appropriate graphics drivers will need to be
    installed for CodeCTRL to be able to run.
-   Some basic knowledge of `git`, either through the command line or a GUI front-end _OR_
    how to download `.zip`s of code from GitHub.

<h1 id="getting-the-code">Getting the Code</h1>

As mentioned in the [Platform-agnostic Requirements](#platform-agnostic-requirements), you
will need some basic knowledge of Git _OR_ the know-how to download compressed archive
versions of code off of GitHub.

Execute the following command in your terminal/command prompt:

```
git clone https://github.com/Authentura/codectrl
```

_OR_

Click [here](https://github.com/Authentura/codectrl/archive/refs/heads/development.zip) to
download an archive of the latest codebase and unzip with an application of your choice.

Then, navigate to that directory and follow the appropriate instructions for your
platform:

-   [Linux](/docs/building/linux)
-   [Windows](/docs/building/windows)
-   [MacOS](/docs/building/mac-os) (WIP)

<h1 id="building-with-cargo">Building with Cargo</h1>

Assuming you have all the required dependencies for your platform of choice, you can now
issue the following command in your command prompt/terminal.

```bash
cargo run --release
```

<h1 id="automated-builds">Automated CI Builds</h1>

The CodeCTRL GitHub repository automatically creates builds select platforms
automatically. This is useful if you want to a bleeding-edge version of CodeCTRL without
having to build it for yourself.

The currently generated packages are for the following platforms:

-   Ubuntu 22.04
-   Fedora 36
-   Fedora Rawhide
-   Windows 7/8(.1)/10/11

You can access the builds
[here](https://github.com/Authentura/codectrl/actions/workflows/build-and-package.yml).

If you wish for more platforms to get automated CI builds, feel free to create an issue
asking for that platform's support or submit a PR if you believe you can implement it
yourself.
