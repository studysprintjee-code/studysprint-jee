from pypdf import PdfReader
pdf = r'C:\Users\asus\Downloads\JEE Main Mock Test 01  Test Papers (PCM).pdf'
reader = PdfReader(pdf)
print('pages', len(reader.pages))
for i, page in enumerate(reader.pages[:10], 1):
    text = page.extract_text() or ''
    print('--- PAGE', i, '---')
    print(text[:5000])
    print('\n')
