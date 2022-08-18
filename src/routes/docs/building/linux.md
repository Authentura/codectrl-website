---
title: "Compiling on Linux"
---

<script>
  import Toast from "$lib/Toast.svelte";
  import { ToastType } from "$lib/types";
</script>

<Toast
  text="Please make sure you've followed the instructions in the 'Building' file."
  link="/docs/building"
  toastType={ToastType.ALERT}
/>

| Table of Contents            |
| :--------------------------- |
| [Ubuntu and Debian](#ubuntu) |
| [Fedora](#fedora)            |
| [RHEL](#rhel)                |

<h1 id="ubuntu">Ubuntu and Debian</h1>

Supported versions:

-   Ubuntu 22.04, 20.04 / Debian 11, 10 and Sid - Builds are automatically generated with
    CI.
-   Ubuntu 21.10, 21.04 / Debian 9 and below - Supported but not built automatically.

If you want to build CodeCTRL from source, you will need the following dependencies:

-   `libglib2.0-dev`
-   `libpango1.0-dev`
-   `libgdk-pixbuf-2.0-dev` (on 20.04/Debian 10 use `libgdk-pixbuf2.0-dev`)
-   `libatk1.0-dev`
-   `libgtk-3-dev`
-   `libxcb-shape0-dev`
-   `libxcb-xfixes0-dev`

Or just execute the either of the commands following depending on your distribution:

-   Ubuntu 21.04+ / Debian 11+ / Debian Sid:
    `# apt install libglib2.0-dev libpango1.0-dev libgdk-pixbuf-2.0-dev libatk1.0-dev libgtk-3-dev libxcb-shape0-dev libxcb-xfixes0-dev -y`

-   Ubuntu 20.04 / Debian 10:
    `# apt install libglib2.0-dev libpango1.0-dev libgdk-pixbuf2.0-dev libatk1.0-dev libgtk-3-dev libxcb-shape0-dev libxcb-xfixes0-dev -y`

You will also need to install the following extra packages too:

-   `gcc` / `clang`
-   `cmake`
-   `build-essential`

Which can be installed if you copy and paste this command into your terminal:

```bash
# apt install build-essential gcc clang cmake -y
```

<h1 id="fedora">Fedora</h1>

Supported versions:

-   Fedora Rawhide and 36 - Builds automatically generated with CI.
-   Fedora 34 and 35 - Supported but not generated automatically.

If you want to build CodeCTRL from source, you will need the following dependencies:

-   `gobject-introspection-devel`
-   `cairo-devel`
-   `atk-devel`
-   `pango-devel`
-   `gdk-pixbuf2-devel`
-   `gtk3-devel`

Or just execute the following command:

```bash
# dnf install gobject-introspection-devel cairo-devel atk-devel pango-devel gdk-pixbuf2-devel gtk3-devel -y
```

You will also need to install the following extra packages too:

-   `gcc` / `clang`
-   `cmake`
-   The `Development Tools` group (`# dnf groupinstall "Development Tools" -y`)

<h1 id="rhel">RHEL - Red Hat Enterprise Linux</h1>

Supported versions:

-   7, 8 and 9 - Builds automatically generated with CI.
-   6 and below - Not supported but you may still be able to build.

If you want to build CodeCTRL from source, you will need the following dependencies:

-   `gobject-introspection-devel`
-   `cairo-devel`
-   `atk-devel`
-   `pango-devel`
-   `gdk-pixbuf2-devel`
-   `gtk3-devel`

You will also need to install the following extra packages too:

-   `gcc` / `clang`
-   `cmake`
-   The `Development Tools` group (`# dnf/yum groupinstall "Development Tools" -y`)

## RHEL 7

There's a couple of steps to be able to build CodeCTRL on RHEL 7-based distributions.

1. Enable the `epel-release` repository: `# yum install epel-release`
2. Install `cmake3`: `# yum install cmake3` (if you already have `cmake` installed. issue
   the following too: `# yum remove cmake`)
3. Soft-link `cmake3` to `/usr/bin/cmake`: `# ln -s /usr/bin/cmake3 /usr/bin/cmake`

Then you can execute the following command:

```bash
# yum install gobject-introspection-devel cairo-devel atk-devel pango-devel gdk-pixbuf2-devel gtk3-devel -y
```

## RHEL 8

Just execute the following command:

```bash
# dnf install gobject-introspection-devel cairo-devel atk-devel pango-devel gdk-pixbuf2-devel gtk3-devel -y
```

## RHEL 9

Just execute the following command:

```bash
# dnf --enablerepo=crb install gobject-introspection-devel cairo-devel atk-devel pango-devel gdk-pixbuf2-devel gtk3-devel -y
```

---

You can now go back to the [Building page](/docs/building#building-with-cargo) and follow
the rest of the instructions.
