import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node" data-owner={data.owner}>
      <Handle type="target" position={Position.Top} />
      <div className="owner-tag">{data.owner || "Unknown"}</div>
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
