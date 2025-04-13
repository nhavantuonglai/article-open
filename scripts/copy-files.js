import { cpSync, existsSync } from 'fs';
import { join } from 'path';

// Thư mục nguồn (trong node_modules/nhavantuonglai)
const sourceDir = join(new URL(import.meta.url).pathname, '..');
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
    const sourcePath = join(sourceDir, item);
    const destPath = join(destDir, item);

    // Kiểm tra xem tệp/thư mục tồn tại
    if (existsSync(sourcePath)) {
        try {
            cpSync(sourcePath, destPath, { recursive: true, force: false });
            console.log(`Đã sao chép ${item} ra thư mục gốc`);
        } catch (err) {
            console.error(`Lỗi khi sao chép ${item}:`, err);
        }
    }
});