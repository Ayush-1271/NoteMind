from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="nodemind",
    version="0.1.0",
    author="NodeMind Contributors",
    description="The open-source AI dev agent with graph memory",
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Topic :: Software Development :: Libraries :: Application Frameworks",
    ],
    python_requires=">=3.11",
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
