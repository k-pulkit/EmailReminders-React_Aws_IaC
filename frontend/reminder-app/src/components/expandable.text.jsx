import { useState } from 'react';

// Createa reusable Read More/Less component
export const ExpandableText = ({ children, descriptionLength, classes }) => {
  const fullText = children;
  const permissibleLength = descriptionLength ?? 80

  // Set the initial state of the text to be collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // This function is called when the read more/less button is clicked
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className={classes}>
      {isExpanded ? fullText : `${fullText.slice(0, Math.ceil(permissibleLength/2))}`}
      <span onClick={toggleText} className={fullText.length < Math.ceil(permissibleLength/2) ? "hidden" : ""}>
        {isExpanded ? (
            <span className='font-mono text-sm text-blue-800 underline pl-2 cursor-pointer'>Show less</span> 
            ) : (
            <>...<span className='font-mono text-sm text-blue-800 underline pl-2 cursor-pointer'>Show more</span></>)
        }
      </span>
    </p>
  );
};