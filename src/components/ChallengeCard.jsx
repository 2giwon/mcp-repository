import React from 'react';

const ChallengeCard = ({ title, description, participants, isPrivate, isCompany }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center mt-2">
        {isPrivate && <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2">비공개</span>}
        {isCompany && <span className="text-xs bg-red-100 text-red-500 rounded-full px-2 py-1 mr-2">본사</span>}
        <span className="text-xs bg-blue-100 text-blue-500 rounded-full px-2 py-1">{participants}명 참여 중</span>
      </div>
    </div>
  );
};

export default ChallengeCard;
