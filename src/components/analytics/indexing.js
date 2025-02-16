const express = require('express');
const bodyParser = require('body-parser');
const { GoogleAuth } = require('google-auth-library');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/index-url', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL không hợp lệ.' });

    try {
        const auth = new GoogleAuth({
            keyFile: 'service-account.json', // Đặt file JSON của tài khoản dịch vụ vào thư mục dự án
            scopes: ['https://www.googleapis.com/auth/indexing']
        });

        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();

        const response = await axios.post(
            'https://indexing.googleapis.com/v3/urlNotifications:publish',
            { url, type: 'URL_UPDATED' },
            { headers: { Authorization: `Bearer ${accessToken.token}`, 'Content-Type': 'application/json' } }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
