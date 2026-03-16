# Gemini Image Generator (Gemini 图像生成器)

[English](#english) | [中文](#chinese)

---

<h2 id="english">🇬🇧 English</h2>

A fast, interactive web application that leverages the Google Gemini API to generate images from text prompts. Built with modern web technologies including React, Vite, and Tailwind CSS.

### ✨ Features
- **AI Image Generation**: Powered by the highly capable Google Gemini API (`@google/genai`).
- **Modern Tech Stack**: React 19 + TypeScript + Vite.
- **Styling**: Tailwind CSS for a beautiful, responsive User Interface.
- **Fast Development**: Benefit from Vite's Lightning-fast Hot Module Replacement (HMR).

### 🚀 Getting Started

#### Prerequisites
- Node.js (v18 or higher recommended)
- A Google Gemini API Key. You can get one from the [Google AI Studio](https://aistudio.google.com/).

#### Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory:
   ```bash
   cd nano-banana2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Environment Variables:
   Create a `.env.local` file in the root of your project and add your Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

#### Running the App

Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

<h2 id="chinese">🇨🇳 中文</h2>

一个快速且可交互的 Web 应用程序，利用 Google Gemini API 从文本提示生成图像。采用 React、Vite 和 Tailwind CSS 等现代 Web 技术构建。

### ✨ 主要特性
- **AI 图像生成**：由功能强大的 Google Gemini API (`@google/genai`) 驱动。
- **现代化技术栈**：React 19 + TypeScript + Vite 构建。
- **优美样式**：使用 Tailwind CSS 打造精美的响应式用户界面。
- **极速开发**：受益于 Vite 提供的极速热更新体验 (HMR)。

### 🚀 快速开始

#### 环境要求
- Node.js (推荐 v18 或更高版本)
- Google Gemini API 密钥。你可以从 [Google AI Studio](https://aistudio.google.com/) 免费获取。

#### 安装步骤

1. 克隆此仓库或下载源代码。
2. 进入项目目录：
   ```bash
   cd nano-banana2
   ```
3. 安装依赖包：
   ```bash
   npm install
   ```
4. 配置环境变量：
   在项目根目录下创建一个 `.env.local` 文件，并添加你的 Gemini API 密钥：
   ```env
   VITE_GEMINI_API_KEY=你的_api_key
   ```

#### 运行应用

启动本地开发服务器：
```bash
npm run dev
```
打开浏览器并访问 `http://localhost:5173` 即可查看你的应用。
