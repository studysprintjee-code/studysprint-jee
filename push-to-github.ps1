$ErrorActionPreference = "Stop"

$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

Write-Host "Checking repository status..."
git status

git add .

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit. Repository is already up to date."
    exit 0
}

$commitMessage = "update: $(Get-Date -Format 'yyyy-MM-dd')"
Write-Host "Creating commit: $commitMessage"
git commit -m $commitMessage
if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit failed. Please resolve the git issues and try again."
    exit $LASTEXITCODE
}

Write-Host "Pushing to origin main..."
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed. Check your Git remote/authentication and try again."
    exit $LASTEXITCODE
}

Write-Host "Push completed successfully."
