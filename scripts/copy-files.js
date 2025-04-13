const fs = require('fs');
const path = require('path');

// Thư mục nguồn (trong node_modules/nhavantuonglai)
const sourceDir = path.join(__dirname, '..');
// Thư mục đích (thư mục gốc của dự án cài đặt package)
const destDir = process.cwd();

// Danh sách thư mục/tệp cần sao chép
const itemsToCopy = [
    'src',
    'public',
    'config.yaml',
    'navigation.js',
    'types.d.ts',
    'astro.config.mjs'
];

itemsToCopy.forEach(item => {
    const sourcePath = path.join(sourceDir, item);
    const destPath = path.join(destDir, item);

    // Kiểm tra xem tệp/thư mục tồn tại
    if (fs.existsSync(sourcePath)) {
        // Sao chép đệ quy (cho thư mục) hoặc trực tiếp (cho tệp)
        fs.cpSync(sourcePath, destPath, { recursive: true, force: false }, (err) => {
            if (err) {
                console.error(`Lỗi khi sao chép ${item}:`, err);
            }
        });
        console.log(`Đã sao chép ${item} ra thư mục gốc`);
    }
});