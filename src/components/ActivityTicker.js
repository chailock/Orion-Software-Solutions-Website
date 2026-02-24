import React, { useState, useEffect } from 'react';
import { FaBolt } from 'react-icons/fa';

const activities = [
  "New project launched in Centurion",
  "Just onboarded fintech startup",
  "5 new API integrations this week",
  "Client from Cape Town signed up",
  "AI chatbot deployed for e‑commerce"
];

const ActivityTicker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-sm">
      <FaBolt className="animate-pulse" />
      <span className="font-medium">Live:</span>
      <span className="transition-opacity duration-500">{activities[index]}</span>
    </div>
  );
};

export default ActivityTicker;