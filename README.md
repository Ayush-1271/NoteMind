# NodeMind: The Real-Time Multi-Agent Execution Engine

NodeMind transforms autonomous AI execution into a live, observable graph where every task, dependency, decision, and blocker becomes structured memory. Check out our main frontend repo for more setup details.

## Pip Section (CLI Onboarding Setup)

Run the following commands strictly to establish your testing environment on Windows and install the onboarding package directly from Git:

```powershell
cd $HOME\Desktop
mkdir nodemind-test
cd nodemind-test
python -m venv testenv
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
.\testenv\Scripts\Activate.ps1
pip uninstall nodemind -y
pip install --no-cache-dir "git+https://github.com/KunalMuk2205/NodeMind.git@feature/cli-onboarding-packaging"
nodemind setup
nodemind start
```

## Features
- Graph Memory for Agent State
- Zero Blind Retries
- Robust CLI Tools directly integrated into Windows
