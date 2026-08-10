from pathlib import Path

root = Path(r"c:\Users\asus\Downloads\StudySprint")

extensions = {".html", ".js", ".css", ".md", ".json", ".toml"}
skip_dirs = {".git", "backup-20260809", "physics"}

count = 0
for path in root.rglob("*"):
    if not path.is_file():
        continue
    if any(part in skip_dirs for part in path.parts):
        continue
    if path.suffix.lower() not in extensions:
        continue
    try:
        text = path.read_text(encoding="utf-8")
    except Exception:
        continue
    if "<<<<<<< " in text and "=======" in text and ">>>>>>>" in text:
        lines = text.splitlines()
        out = []
        in_conflict = False
        keep_second = False
        for line in lines:
            if line.startswith("<<<<<<< "):
                in_conflict = True
                keep_second = False
                continue
            if in_conflict and line.startswith("======="):
                keep_second = True
                continue
            if in_conflict and line.startswith(">>>>>>>"):
                in_conflict = False
                keep_second = False
                continue
            if not in_conflict or keep_second:
                out.append(line)
        cleaned = "\n".join(out).rstrip() + "\n"
        path.write_text(cleaned, encoding="utf-8")
        count += 1
print(f"Repaired {count} files")
