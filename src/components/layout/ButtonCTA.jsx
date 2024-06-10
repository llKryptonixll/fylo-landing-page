const ButtonCTA = ({ textContent, handleSubmit, customStyles }) => {
  return (
    <button
      onClick={handleSubmit}
      className={`${customStyles} rounded-[0.2em] text-light_grayish_blue hover:bg-opacity-80 shadow-xl transition-colors bg-bright_blue min-h-10 flex-shrink text-sm h-full font-semibold `}
    >
      {textContent}
    </button>
  );
};

export default ButtonCTA;
