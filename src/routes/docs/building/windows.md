---
title: "Compiling on Windows"
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

<Toast
  text="Documentation for this platform is limited. Feel free to contribute!"
  toastType={ToastType.NOTE}
/>

| Table of Contents             |
| :---------------------------- |
| [Requirements](#requirements) |

<h1 id="requirements">Requirements</h1>

To build CodeCTRL, you will need the latest Visual Studio C++ redistributables, which Rust
requires to install. You can find the latest redistributables
[here](https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170).

You will also need the latest Visual Studio Build Tools which can be found
[here](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022).
