import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    def __init__(self):
        self.mongodb_uri = os.getenv("MONGO_DB_URL", "mongodb://localhost:27017")
        self.gemini_api_key = os.getenv("GEMINI_API_KEY", "")
        self.chroma_persist_dir = os.getenv("CHROMA_PERSIST_DIR", "./.chroma")

settings = Settings()
