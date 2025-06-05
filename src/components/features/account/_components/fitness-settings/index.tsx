import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

export default function FitnessSettings() {

// States
  const [goal, setGoal] = useState('Lose weight');
  const [level, setLevel] = useState('Beginner');
  const [weight, setWeight] = useState('90 Kg');

  // Variables
    const topSettings = [
    { title: 'Your Goal', value: goal, color: 'bg-orange-500' },
    { title: 'Level', value: level, color: 'bg-orange-500' },
    { title: 'Weight', value: weight, color: 'bg-orange-500' }
  ];
  return (
    <div>
       {/* Top Settings Row */}
        <div className="grid grid-cols-3 gap-4">
          {topSettings.map((setting, index) => (
            <div key={index} className="text-center">
              <h3 className="text-gray-300 text-sm mb-2 font-medium">{setting.title}</h3>
              <p className="text-xs text-gray-400 mb-3">TAP TO CHANGE</p>
              <button className={`${setting.color} text-white px-4 py-3 rounded-full text-sm font-medium w-full flex items-center justify-center hover:bg-orange-600 transition-colors`}>
                {setting.value}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}
