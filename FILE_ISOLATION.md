# File Isolation in NodeMind

NodeMind is designed with a strict session isolation capability. This ensures your project and your data does not overlap between different queries.

## How it works

1. **Timestamped `.brain/` Environments**: Each user prompt triggers the creation of a unique, timestamped `.brain/` directory on your local machine.
2. **Context Integrity**: By launching isolated environments, agents within NodeMind process tasks strictly within that local directory, ensuring their execution doesn't bleed into global state or pollute other queries.
3. **Semantic Boundary**: Embedding vectors stored in ChromaDB only capture data from within the active session. This maintains a clean graph memory preventing hallucination and cross-contamination from prior completely distinct goals.

## Why it matters
For robust, reproducible multi-agent deployments, session isolation is critical. You can inspect any `.brain/` directory to track exact step-by-step notes generated for a given session.
