import React from "react";

interface ActionButtonProps {
  isPrimary: boolean;
  title: string;
  buttonType: string;
  disabled: boolean;
  handleClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  disabled,
  isPrimary,
  handleClick,
  title,
  buttonType,
}) => {
  return !isPrimary ? (
    <button
      type={`${buttonType === "button" ? "button" : "submit"}`}
      onClick={handleClick}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
    >
      {title}
    </button>
  ) : (
    <button
      type={`${buttonType === "button" ? "button" : "submit"}`}
      className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
        !disabled
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-blue-400 cursor-not-allowed"
      }`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
