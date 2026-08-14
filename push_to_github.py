import subprocess
import sys

repo = r"C:\Users\asus\Downloads\StudySprint"
cmds = [
    ["git", "-C", repo, "config", "user.name", "StudySprint Bot"],
    ["git", "-C", repo, "config", "user.email", "study@local"],
    ["git", "-C", repo, "add", "."],
    ["git", "-C", repo, "commit", "-m", "feat: add JEE mock page and timer updates"],
    ["git", "-C", repo, "push", "origin", "main"],
]

for c in cmds:
    print("RUN:", " ".join(c))
    result = subprocess.run(c, capture_output=True, text=True)
    output = (result.stdout or result.stderr or "NO_OUTPUT").strip()
    print(output if output else "NO_OUTPUT")
    print("---")
    if result.returncode != 0:
        lowered = output.lower()
        if "nothing to commit" in lowered or "already up to date" in lowered or "no changes" in lowered:
            continue
        print("FAILED_WITH_CODE", result.returncode)
        sys.exit(result.returncode)

print("GIT_SEQUENCE_COMPLETED")
