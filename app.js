// インストールした express を読み込む
const express = require('express');
// Expressの初期化
const app = express();
// ポート番号
const port = 3000;

// Routing（ルーティング）
// WebRoot「/」にGETリクエストしたら動作
app.get('/', (req, res) => {
    res.send('Hello, Node.js page.');
})

app.get('/profile', (req, res) => {
    res.send('Profile Page');
})

// /item/add にPOSTリクエスト
app.post('/item/add', (req, res) => {
    // データ追加処理
    res.send('success!!');
})

// Web API
app.get('/api/weather/:id', (req, res) => {
    const data = {
        13: {
            place: "Tokyo",
            date: new Date(),
            temperature: 25.5,
            weather: 'fine',
        },
        14: {
            place: "Kanagawa",
            date: new Date(),
            temperature: 25.3,
            weather: 'cloud',
        },
    };
    var result = {}
    var id = req.params.id;
    if (data[id]) result = data[id];
    res.json(result);
});


// サーバ待機（server listen)
app.listen(port, () => {
    console.log(`Server listen http://localhost:${port}`)
});
