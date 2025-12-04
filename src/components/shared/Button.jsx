import React from 'react';
import { Link } from 'react-router'; 
import { Loader2 } from 'lucide-react';

/**
 * Reusable Button Component
 * Handles both button interactions and router links.
 * Supports variants, sizes, icons, and loading states.
 */
const Button = ({
  children,
  to,                 // If provided, renders as a Link
  onClick,            // Click handler for button mode
  variant = 'primary', // primary, secondary, outline, ghost, danger, white
  size = 'md',        // sm, md, lg, xl
  className = '',     // Additional custom classes
  isLoading = false,  // Shows spinner if true
  disabled = false,   // Disables interaction
  icon: Icon,         // Optional icon component (e.g., from lucide-react)
  iconPosition = 'left', // 'left' or 'right'
  fullWidth = false,  // If true, button takes 100% width
  type = 'button'     // button type (submit, reset, button)
}) => {

  // 1. Base Styles: Common layout, focus rings, transitions, and disabled states
  const baseStyle = `
    inline-flex items-center justify-center font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `;

  // 2. Color Variants: standardized to Indigo (matching Navbar) to ensure consistency
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm hover:shadow-md",
    secondary: "bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-500 shadow-sm hover:shadow-md",
    outline: "border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-indigo-500",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
    white: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200 shadow-sm"
  };

  // 3. Size Variants: Padding and text size adjustments
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-5 py-2.5 text-sm rounded-lg",
    lg: "px-6 py-3.5 text-base rounded-lg",
    xl: "px-8 py-4 text-lg rounded-xl"
  };

  // 4. Utility Classes
  const widthClass = fullWidth ? 'w-full' : '';
  const loadingClass = isLoading ? 'cursor-wait opacity-80' : '';

  // Combine all classes into a single string
  const classes = `
    ${baseStyle}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${widthClass}
    ${loadingClass}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Helper to render content (Icon + Text + Spinner)
  const renderContent = () => (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
    </>
  );

  // Render as React Router Link if 'to' prop is present
  if (to && !disabled && !isLoading) {
    return (
      <Link to={to} className={classes}>
        {renderContent()}
      </Link>
    );
  }

  // Otherwise, render as a standard HTML Button
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled || isLoading}
    >
      {renderContent()}
    </button>
  );
};

export default Button;