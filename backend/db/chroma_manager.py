import chromadb
from backend.core.config import settings

print(f"Initializing ChromaDB persist dir: {settings.chroma_persist_dir}")
chroma_client = chromadb.PersistentClient(path=settings.chroma_persist_dir)

# Create or get the main collection for markdown Node brains
# The default embedding function is all-MiniLM-L6-v2 which runs extremely fast locally
collection = chroma_client.get_or_create_collection(name="nodemind_brain")

def add_node_to_vector_db(node_id: str, content: str, metadata: dict = None):
    """
    Upserts a document (Node content) into ChromaDB. 
    """
    if metadata is None:
        metadata = {}
        
    collection.upsert(
        documents=[content],
        metadatas=[metadata],
        ids=[node_id]
    )
    print(f"Upserted node {node_id} into ChromaDB")

def semantic_search(query: str, n_results: int = 5):
    """
    Performs nearest neighbor semantic search in the vector DB.
    """
    results = collection.query(
        query_texts=[query],
        n_results=n_results
    )
    return results
