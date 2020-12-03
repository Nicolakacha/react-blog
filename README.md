# SPA 部落格

這是為了練習 React Hooks 及 Redux 所實作的 SPA 部落格，

## [DEMO](https://nicolakacha.github.io/react-blog/)

![部落格1](https://i.imgur.com/sTz53JL.png)

![部落格2](https://i.imgur.com/m9zfeq3.png)

![部落格2](https://i.imgur.com/3WCIXI5.png)

## 功能

- 身為一個使用者，可以新增、編輯、刪除文章。
- 身為一個使用者，可以註冊及登入部落格。

## 技術：

- 基本架構以 React Hooks 及 Styled Component 開發。
- State 管理使用 Redux toolkit 及 redux-thunk。
- SPA 路由管理採用 React Router 6。

## API：
API 部分串接 [Lidemy API Server](https://github.com/Lidemy/lidemy-student-json-api-server)。由於此後端系統的密碼是明文儲存，所以會統一在後端將密碼改成 Lidemy，因此註冊後，每個使用者的密碼都會一樣，請勿使用真實的密碼註冊本部落格。

## 指令

### `yarn start`
在瀏覽器啟動此專案的開發模式，並可在 [http://localhost:3000](http://localhost:3000) 即時預覽編輯結果

### `yarn build`
在 build 資料夾中建立並打包此專案的 Production 版本
