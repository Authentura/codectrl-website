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

<h1 id="ubuntu">Ubuntu and Debian</h1>

Supported versions:

- 22.04 - Builds are automatically generated with CI.
- 21.10, 21.04 and 20.04 / Debian 11 and 10 - Supported but not generated automatically.

If you want to build CodeCTRL from source, you will need the following
dependencies:

- `libglib2.0-dev`
- `libpango1.0-dev`
- `libgdk-pixbuf-2.0-dev` (on 20.04/Debian 10 use `libgdk-pixbuf2.0-dev`)
- `libatk1.0-dev`
- `libgtk-3-dev`
- `libxcb-shape0-dev`
- `libxcb-xfixes0-dev`

Or just execute the either of the commands following depending on your
distribution:

- Ubuntu 21.04+ / Debian 11+: `$ sudo apt install libglib2.0-dev libpango1.0-dev libgdk-pixbuf-2.0-dev libatk1.0-dev libgtk-3-dev libxcb-shape0-dev libxcb-xfixes0-dev -y`

- Ubuntu 20.04 / Debian 10: `$ sudo apt install libglib2.0-dev libpango1.0-dev libgdk-pixbuf2.0-dev libatk1.0-dev libgtk-3-dev libxcb-shape0-dev libxcb-xfixes0-dev -y`

You will also need to install the following extra packages too:

- `gcc` / `clang`
- `cmake`
- `build-essential`

Which can be installed if you copy and paste this command into your terminal:

```bash
$ sudo apt install build-essential gcc clang cmake -y
```

<h1 id="fedora">Fedora</h1>
