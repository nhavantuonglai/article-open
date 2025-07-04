import re
from pathlib import Path
import random

def extract_title_and_tags_from_file(file_path):
    """
    Lấy title và tags từ file markdown
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Tìm phần front matter (giữa hai dòng ---)
        frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL | re.MULTILINE)
        if not frontmatter_match:
            print(f"Không tìm thấy front matter trong file {file_path}")
            return None, None
            
        frontmatter = frontmatter_match.group(1)
        
        # Lấy title
        title_match = re.search(r'^title:\s*(.+)$', frontmatter, re.MULTILINE)
        if not title_match:
            print(f"Không tìm thấy title trong file {file_path}")
            return None, None
        title = title_match.group(1).strip()
        # Thêm dấu chấm nếu title không kết thúc bằng dấu câu
        if not title.endswith(('.', '!', '?')):
            title += '.'
        
        # Lấy tags
        tags = []
        tags_match = re.search(r'^tags:\s*\n((?:\s*-\s*.+\n?)+)', frontmatter, re.MULTILINE)
        if tags_match:
            tags_section = tags_match.group(1)
            tag_matches = re.findall(r'^\s*-\s*(.+)', tags_section, re.MULTILINE)
            tags = [tag.strip() for tag in tag_matches]
        
        return title, tags
            
    except Exception as e:
        print(f"Lỗi khi đọc file {file_path}: {e}")
        return None, None

def format_alt_text(title, tags, used_numbers):
    """
    Format chuỗi alt: {title} {số ngẫu nhiên} – {tag 1}, {tag 2}, ..., {tag n}.
    """
    # Tạo số ngẫu nhiên từ 001 đến 999, không trùng
    while True:
        random_number = f"{random.randint(1, 999):03d}"
        if random_number not in used_numbers:
            used_numbers.add(random_number)
            break
    
    if not tags:
        return f"{title} {random_number}"
    # Thêm dấu chấm chỉ vào tag cuối cùng
    if len(tags) == 1:
        return f"{title} {random_number} – {tags[0]}."
    tags_formatted = tags[:-1] + [tags[-1] + '.']
    return f"{title} {random_number} – {', '.join(tags_formatted)}"

def update_figure_tags(content, title, tags):
    """
    Cập nhật các thẻ figure theo cấu trúc tối ưu SEO
    """
    # Tập hợp để theo dõi số ngẫu nhiên đã dùng trong bài
    used_numbers = set()
    
    # Pattern tổng quát để tìm các thẻ figure chứa img
    figure_pattern = r'<figure\b[^>]*>.*?<\s*img[^>]+>.*?</figure>'
    
    def replace_figure(match):
        img_attributes = re.search(r'<\s*img([^>]+)>', match.group(0), re.IGNORECASE).group(1)
        
        # Trích xuất src attribute
        src_match = re.search(r'src\s*=\s*"([^"]*)"', img_attributes, re.IGNORECASE)
        src = src_match.group(1) if src_match else ""
        
        # Format alt text với số ngẫu nhiên
        alt_content = format_alt_text(title, tags, used_numbers)
        
        # Tạo thẻ img mới với height, width và loading="lazy"
        img_tag = f'<img src="{src}" alt="{alt_content}" title="{title}" height="100%" width="100%" loading="lazy">'
        
        # Tạo thẻ figure hoàn chỉnh
        new_figure = f'<figure>{img_tag}<figcaption>{title}</figcaption></figure>'
        
        return new_figure
    
    # Thay thế tất cả các thẻ figure
    updated_content = re.sub(figure_pattern, replace_figure, content, flags=re.DOTALL | re.IGNORECASE)
    
    return updated_content

def process_markdown_file(file_path):
    """
    Xử lý một file markdown
    """
    print(f"Đang xử lý file: {file_path}")
    
    # Lấy title và tags từ file
    title, tags = extract_title_and_tags_from_file(file_path)
    if not title:
        print(f"Không thể lấy title từ file {file_path}")
        return False
    
    print(f"Title đã lấy: {title}")
    print(f"Tags đã lấy: {tags}")
    
    # Đọc toàn bộ nội dung file
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
    except Exception as e:
        print(f"Lỗi khi đọc file {file_path}: {e}")
        return False
    
    # Cập nhật các thẻ figure
    updated_content = update_figure_tags(content, title, tags)
    
    # Kiểm tra xem có thay đổi gì không
    if updated_content == content:
        print(f"Không có thẻ figure nào cần cập nhật trong file {file_path}")
        return True
    
    # Ghi lại file với nội dung đã cập nhật
    try:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        print(f"Đã cập nhật thành công file {file_path}")
        return True
    except Exception as e:
        print(f"Lỗi khi ghi file {file_path}: {e}")
        return False

def main():
    """
    Hàm chính - xử lý tất cả file .md trong thư mục hiện tại
    """
    current_dir = Path('.')
    
    # Tìm tất cả file .md trong thư mục hiện tại
    markdown_files = list(current_dir.glob('*.md'))
    
    if not markdown_files:
        print("Không tìm thấy file .md nào trong thư mục hiện tại")
        return
    
    print(f"Tìm thấy {len(markdown_files)} file .md")
    
    # Xử lý từng file
    success_count = 0
    for file_path in markdown_files:
        if process_markdown_file(file_path):
            success_count += 1
        print("-" * 50)
    
    print(f"Hoàn thành! Đã xử lý thành công {success_count}/{len(markdown_files)} file")

if __name__ == "__main__":
    main()