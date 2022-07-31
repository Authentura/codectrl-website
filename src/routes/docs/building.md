---
title: "Building"
children: ["linux"]
---

| Table of Contents                                                 |
| :---------------------------------------------------------------- |
| [Platform-agnostic Requirements](#platform-agnostic-requirements) |
| [Getting the code](#getting-the-code)                             |

<h1 id="platform-agnostic-requirements">Platform-agnostic Requirements</h1>

You will need the following things, regardless of your platform of choice:

- Rust installed - recommended via [rustup](https://rustup.rs).
- An OpenGL-capable device - specific versions unknown as the OpenGL bindings
  being used don't specify supported versions. But to be safe, OpenGL 3.1+
  devices should be compatible.
- Some basic knowledge of `git`, either through the command line or a GUI
  front-end _OR_ how to download `.zip`s of code from GitHub.

<h1 id="getting-the-code">Getting the Code</h1>

As mentioned in the [Platform-agnostic
Requirements](#platform-agnostic-requirements), you will need some basic
knowledge of Git _OR_ the know-how to download compressed archive versions of
code off of GitHub.

Execute the following command in your terminal/command prompt:

```
git clone https://github.com/Authentura/codectrl
```

_OR_

Click
[here](https://github.com/Authentura/codectrl/archive/refs/heads/development.zip)
to download an archive of the latest codebase and unzip with an application of
your choice.

Then, navigate to that directory and follow the appropriate instructions for
your platform:

- [Linux](/docs/building/linux)
- [Windows](/docs/building/windows)
- [MacOS](/docs/building/mac-os) (WIP)
