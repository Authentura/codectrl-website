---
title: "Implementing your own"
---

This will be a short guide on how to develop your own CodeCTRL-compatible logger, using
the official [Rust](https://github.com/Authentura/codectrl-rust-logger) logger as an
example.

| Table of Contents                              |
| :--------------------------------------------- |
| [Requirements](#requirements)                  |
| [What is needed to implement](#what-is-needed) |
| [Basic logging functions](#basic-log)          |
| [Batch logging functions](#batch-sending)      |
| [Connecting to CodeCTRL](#connection)          |

<h1 id="requirements">Requirements</h1>

You will _most likely_ need the following requirements if you intend to develop your own
CodeCTRL-compatible logger.

- The protobuf compiler -- `protoc`.
  - Usually available in package managers. For example in Fedora:
  `# dnf install protobuf-compiler`.
- A local copy of the CodeCTRL protobuf files available
  [here](https://github.com/Authentura/codectrl-protobuf-specifications).

<h1 id="what-is-needed">What is needed to implement?</h1>

You will need to implement the following services to be fully compatible with CodeCTRL
versions `1.0.0-beta` and later:

- The `LogServer` and `LogClient` services detailed in the `cc_server.proto` file.
- The `Authentication` service detailed in the `auth.proto` file.

<h1 id="basic-log">Basic logging functions</h1>

Language loggers should aim to keep inline with the consistent API across CodeCTRL
language loggers described in the following table:

<table>
  <thead>
    <tr>
      <th>Function name<sup><a href="#1">1</a></sup></th>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>log</code></td>
    <td>
      <ul>
        <li><code>message</code> : <code>T</code> | <code>string</code></li>
        <li><code>surround</code> (optional) : <code>u32</code></li>
        <li><code>host</code> (optional) : <code>string</code></li>
        <li><code>port</code> (optional) : <code>string</code></li>
      <ul>
    </td>
    <td>The most basic log function.</td>
  </tr>
  <tr>
    <td><code>log_if</code></td>
    <td>
      <ul>
        <li><code>condition</code> : <code>fn() -> bool</code></li>
        <li><code>message</code> : <code>T</code> | <code>string</code></li>
        <li><code>surround</code> (optional) : <code>u32</code></li>
        <li><code>host</code> (optional) : <code>string</code></li>
        <li><code>port</code> (optional) : <code>string</code></li>
      <ul>
    </td>
    <td>Logs only if the given <code>condition</code> function/closure/lambda returns <code>true</code>.</td>
  </tr>
  <tr>
    <td><code>log_when_env</code></td>
    <td>
      <ul>
        <li><code>message</code> : <code>T</code> | <code>string</code></li>
        <li><code>surround</code> (optional) : <code>u32</code></li>
        <li><code>host</code> (optional) : <code>string</code></li>
        <li><code>port</code> (optional) : <code>string</code></li>
      <ul>
    </td>
    <td>Logs only if the <code>CODECTRL_DEBUG</code> environment variable is present.</td>
  </tr>
</table>

<h1 id="batch-sending">Batch logging functions</h1>

Additionally, the API should provide the ability to "batch" logs together, i.e. generate
multiple logs and send all at once. This is done via the
[LogBatch](https://github.com/Authentura/codectrl-rust-logger/blob/ec590cad30f7a387a6621ab36998b5a07621a12c/src/lib.rs#L139)
type in the Rust logger, and similar approaches should be used when implementing loggers
for other languages.

The purpose of the batch send functionality to allow users of the libraries to *choose*
when the right time is to send the logs, especially in environments where predictable
timings are necessary.

In addition, it would be useful if the users of the logger had the ability to set the
`host` and `port` for the entire batch, which could be done during the creation of the
object or as methods on the object which modify the internal values.

<table>
  <thead>
    <tr>
      <th>Function name<sup><a href="#1">1</a></sup></th>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>LogBatch.add_log</code></td>
    <td>
      <ul>
        <li><code>message</code> : <code>T</code> | <code>string</code></li>
        <li><code>surround</code> (optional) : <code>u32</code></li>
      <ul>
    </td>
    <td>Add a basic log to the LogBatch.</td>
  </tr>
  <tr>
    <td><code>LogBatch.add_log_if</code></td>
    <td>
      <ul>
        <li><code>condition</code> : <code>fn() -> bool</code></li>
        <li><code>message</code> : <code>T</code> | <code>string</code></li>
        <li><code>surround</code> (optional) : <code>u32</code></li>
      <ul>
    </td>
    <td>
      Adds the log to the LogBatch only if the <code>condition</code> function/closure/
      lambda returns <code>true</code>.
    </td>
  </tr>
  <tr>
    <td><code>LogBatch.add_log_when_env</code></td>
    <td>
      <ul>
        <li><code>message</code> : <code>T</code> | <code>string</code></li>
        <li><code>surround</code> (optional) : <code>u32</code></li>
      <ul>
    </td>
    <td>
      Adds the log to the LogBatch only if the <code>CODECTRL_DEBUG</code> environment
      variable is present.
    </td>
  </tr>
</table>

<h1 id="connection">Connecting to CodeCTRL</h1>

CodeCTRL uses gRPC for both internal and external communication. To get started with gRPC
for your language, consult the [gRPC documentation](https://grpc.io/docs/languages/)
first to see if they have already provided a library for your language that you can use to
communicate with CodeCTRL.

This is where the protobuf files mentioned earlier are used, as they contain the basic
skeleton of how the logger should communicate with the gRPC server behind CodeCTRL.
Loggers need _only implement the `LogClient`_ service (authorisation and authentication is 
still being worked on).

<!-- TODO: Need a non-Rust example as the Rust implementation is generated using Tonic -->

---

<span id="1"><b>1</b></span>: The function names in the language API <b>do not</b> need
to be in <code>snake_case</code>, follow the style officially used by the language. For
example, in C# use <code>PascalCase</code> and <code>camelCase</code>.
