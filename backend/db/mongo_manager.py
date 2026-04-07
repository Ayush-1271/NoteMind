import sys
from motor.motor_asyncio import AsyncIOMotorClient
from backend.core.config import settings

client = None
db = None

async def connect_to_mongo():
    global client, db
    try:
        print(f"Connecting to MongoDB...")
        client = AsyncIOMotorClient(settings.mongodb_uri)
        db = client.nodemind
        # ping to check connection
        await client.admin.command('ping')
        print("Successfully connected to MongoDB")
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        # We don't sys.exit(1) here so the TUI and Server can still boot even if offline

async def close_mongo_connection():
    global client
    if client:
        client.close()
        print("MongoDB connection closed")

def get_nodes_collection():
    if db is None:
        raise ValueError("Database is not initialized")
    return db.nodes

def get_edges_collection():
    if db is None:
        raise ValueError("Database is not initialized")
    return db.edges
