# How Node Works

A practical, hands-on exploration of Node.js internals, demonstrating how core features such as the event loop, modules, events, and streams work under the hood.

This repository contains simple JavaScript files that illustrate key Node.js concepts through focused examples.

This examples are from Node.js, Express, MongoDB & More: The Complete Bootcamp course by jonas schmedtmann on udemy.

---

## 📚 Overview

This project is designed to help you understand **how Node.js works internally** by experimenting with its core mechanisms, including:

- The **Event Loop** — how asynchronous tasks are scheduled and executed
- The **Module System** — how `require`, exports, and module caching work
- **Events** — using Node’s built-in `EventEmitter`
- **Streams** — working with readable and writable streams
- Simple **test modules** that demonstrate common Node.js patterns

Node.js is a server-side JavaScript runtime built on the V8 engine. It uses an **event-driven, non-blocking I/O model**, making it efficient and scalable for I/O-intensive applications.

---

### File Descriptions

- `event-loop.js` — Demonstrates how the Node.js event loop works
- `modules.js` — Explains Node’s module resolution and exports system
- `events.js` — Examples using the `EventEmitter` API
- `streams.js` — Working examples of Node.js streams
- `test-module-*.js` — Simple modules used for experimentation
- `test-module-1.test.js` — Jest test suite for `test-module-1`

---

## Getting Started

### Requirements

- **Node.js** (LTS recommended)
- **npm** (included with Node.js)

---

## 🛠 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abdo-Rabea/how-node-works.git
   cd how-node-works
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## ✅ Running Tests

This project uses **Jest** for unit testing.

Run all tests with:

```bash
npm test
```

---

## 💡 Learning Goals

By exploring this repository, you will learn:

- How Node.js schedules and executes asynchronous code
- How modules are loaded, cached, and shared
- How events and streams work internally
- How to write and test simple Node.js modules
