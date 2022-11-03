Demonstrates custom Data Extractor not working.

```
Version: 1.73.0 (user setup)
Commit: 8fa188b2b301d36553cbc9ce1b0a146ccb93351f
Date: 2022-11-01T15:34:06.111Z
Electron: 19.0.17
Chromium: 102.0.5005.167
Node.js: 16.14.2
V8: 10.2.154.15-electron.0
OS: Windows_NT x64 6.3.9600
Sandboxed: No
```

[Debug Visualizer v2.3.1](https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer)

- `yarn`
- Open project in Visual Studio Code
- Open `index.mjs`
- `Run` -> `Start Debugging`
- `Debug Visualizer: New View`
- Visualize `f`

Expected: `Foo`

Actual: `[object Object]`
