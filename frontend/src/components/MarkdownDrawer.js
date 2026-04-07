import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownDrawer = ({ isOpen, onClose, node }) => {
  return (
    <div className={`markdown-drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <div>
           <div className="owner-tag" style={{opacity: 0.5}}>{node?.data?.owner}</div>
           <h3>{node?.data?.label}</h3>
        </div>
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="drawer-content">
        {node ? (
          <ReactMarkdown>{node.data.content}</ReactMarkdown>
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </div>
  );
};

export default MarkdownDrawer;
