import re
import os
import glob

def replace_figure_content(file_path):
    # Read the file content
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.readlines()

    # Get the title from line 3 (index 2)
    title_line = content[2].strip()
    # Extract title value (assuming format: title: value)
    title = title_line.split(':', 1)[1].strip()

    # Define the regex pattern for the figure to replace
    pattern = r'<figure><img src="https://banmaixanh\.vercel\.app/image/article/du-lich-hue-363\.jpg" alt="[^"]*" title="[^"]*" height=100% width=100%><figcaption><p>[^<]*</p></figcaption></figure>'

    # Define the replacement template
    replacement = f'<figure><img src="https://banmaixanh.vercel.app/image/article/du-lich-hue-363.jpg" alt="{title}" title="{title}" height=100% width=100%><figcaption><p>{title}</p></figcaption>{title}</figure>'

    # Process the content
    new_content = []
    for line in content:
        # Replace the matching figure pattern
        new_line = re.sub(pattern, replacement, line)
        new_content.append(new_line)

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_content)

# Process all .md files in the current directory
if __name__ == "__main__":
    # Get the current directory
    current_dir = os.getcwd()
    
    # Find all .md files in the current directory
    md_files = glob.glob(os.path.join(current_dir, "*.md"))
    
    # Process each .md file
    for file_path in md_files:
        try:
            replace_figure_content(file_path)
            print(f"Processed: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
    
    print("Figure content replacement completed for all .md files.")