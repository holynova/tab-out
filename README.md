# Tab Out (Modified by holynova)

> **声明 / Disclaimer:** 
> 这个项目是对由 [Zara](https://x.com/zarazhangrui) 创建的 [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out) 的一份修改版。感谢原作者极其出色的设计与实现！
> 
> 在原版的基础上，当前版本主要增加了以下功能增强：
> 1. **视图自动刷新**：每次重新激活该扩展的标签页时，自动获取最新的 Tabs 状态并刷新界面内容。
> 2. **全局重复标签一键清理**：在顶部按钮区域附近增加 “Close duplicated tabs” 按钮，实现一键快速清理全局的重复页面。
> 3. **支持多窗口管理**：如果系统检测到开启了多个含 Web tabs 的 Chrome 窗口，会自动在顶部显示窗口状态面板，并支持 “Merge all windows”（合并所有的 Tabs 到当前窗口）与 “Close other windows”（关闭除当前以外的其它的 Chrome 窗口）操作。
> 4. **实时筛选和搜索**：页面右上角新增搜索框输入组件。每当打开该扩展页面时将自动获取焦点，实时匹配 Tabs 的标题和网址并高亮显示，同时自动折叠过滤不相关的标签内容。

**Keep tabs on your tabs.**

Tab Out is a Chrome extension that replaces your new tab page with a dashboard of everything you have open. Tabs are grouped by domain, with homepages (Gmail, X, LinkedIn, etc.) pulled into their own group. Close tabs with a satisfying swoosh + confetti.

No server. No account. No external API calls. Just a Chrome extension.

---

## Install with a coding agent

Send your coding agent (Claude Code, Codex, etc.) this repo and say **"install this"**:

```
https://github.com/zarazhangrui/tab-out
```

The agent will walk you through it. Takes about 1 minute.

---

## Features

- **See all your tabs at a glance** on a clean grid, grouped by domain
- **Homepages group** pulls Gmail inbox, X home, YouTube, LinkedIn, GitHub homepages into one card
- **Close tabs with style** with swoosh sound + confetti burst
- **Duplicate detection** flags when you have the same page open twice, with one-click cleanup
- **Click any tab to jump to it** across windows, no new tab opened
- **Save for later** bookmark tabs to a checklist before closing them
- **Localhost grouping** shows port numbers next to each tab so you can tell your vibe coding projects apart
- **Expandable groups** show the first 8 tabs with a clickable "+N more"
- **100% local** your data never leaves your machine
- **Pure Chrome extension** no server, no Node.js, no npm, no setup beyond loading the extension

---

## Manual Setup

**1. Clone the repo**

```bash
git clone https://github.com/zarazhangrui/tab-out.git
```

**2. Load the Chrome extension**

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Navigate to the `extension/` folder inside the cloned repo and select it

**3. Open a new tab**

You'll see Tab Out.

---

## How it works

```
You open a new tab
  -> Tab Out shows your open tabs grouped by domain
  -> Homepages (Gmail, X, etc.) get their own group at the top
  -> Click any tab title to jump to it
  -> Close groups you're done with (swoosh + confetti)
  -> Save tabs for later before closing them
```

Everything runs inside the Chrome extension. No external server, no API calls, no data sent anywhere. Saved tabs are stored in `chrome.storage.local`.

---

## Tech stack

| What | How |
|------|-----|
| Extension | Chrome Manifest V3 |
| Storage | chrome.storage.local |
| Sound | Web Audio API (synthesized, no files) |
| Animations | CSS transitions + JS confetti particles |

---

## License

MIT

---

Built by [Zara](https://x.com/zarazhangrui)
