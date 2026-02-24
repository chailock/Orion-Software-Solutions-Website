import React from 'react';
import { FaShieldAlt, FaStar } from 'react-icons/fa';

const TrustBadge = () => {
  return (
    <div className="flex items-center gap-4 text-sm text-slate-500 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
      <div className="flex items-center gap-1">
        <FaShieldAlt className="text-green-500" />
        <span>SOC 2 Compliant</span>
      </div>
      <span className="text-slate-300">|</span>
      <div className="flex items-center gap-1">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <span className="ml-1">4.9/5 (50+ reviews)</span>
      </div>
    </div>
  );
};

export default TrustBadge;