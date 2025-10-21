# Microsoft 365 Graph API 开发项目

本项目用于学习和测试 **Microsoft Graph API**，特别是日历（Calendar）和用户（User）相关功能，为后续开发企业级办公自动化应用做准备。

## 🎯 项目目标

- 使用 Microsoft Graph API 获取用户日历事件
- 实现无用户登录（Client Credentials Flow）的后台服务调用
- 验证应用权限（如 `Calendars.Read`, `User.Read.All`）的配置与使用

## 🛠️ 技术栈

- Microsoft Graph API v1.0
- Azure Active Directory (Microsoft Entra ID)
- java
- OAuth 2.0 Client Credentials Grant

## 📦 示例功能

- 获取指定用户的日历视图（`/users/{id}/calendarView`）
- 列出组织中的所有用户（`/users`）
- 创建/读取日历事件（未来扩展）

## 🔐 开发环境

本项目依赖 **Microsoft 365 E5 开发者订阅** 提供的测试用户和 Exchange Online 服务，用于真实 API 调试。

> 此仓库仅为学习与开发目的，不用于商业用途。
