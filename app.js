// インストールした express を読み込む
const express = require('express');
// Expressの初期化
const app = express();
// ポート番号
const port = 3000;

// サーバ待機（server listen)
app.listen(port, () => {
    console.log(`Server listen http://localhost:${port}`)
});
