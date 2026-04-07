from setuptools import setup, find_packages

setup(
    name="nodemind",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "fastapi",
        "uvicorn",
        "motor",
        "chromadb",
        "python-dotenv",
        "watchdog",
        "textual",
        "google-genai",
    ],
    entry_points={
        "console_scripts": [
            "nodemind=backend.cli:main",
        ]
    },
)
