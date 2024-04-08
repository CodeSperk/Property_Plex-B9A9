import PropTypes from 'prop-types';

const Button1 = ({btnLink, classes}) => {


//  {`py-1.5 px-4 md:px-5 bg-[var(--clr-accent)] border-2 border-transparent hover:bg-[var(--bg-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] text-white font-semibold rounded tracking-wider ${additionalClasses.join(' ')}`}
   



  const additionalClasses = classes;
  return (
    <button className={`py-1.5 px-4 md:px-5 bg-[var(--clr-accent)] border-2 border-transparent hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] hover:bg-[var(--bg-secondary)] text-white rounded tracking-wider ${additionalClasses}`}>
      {btnLink}
    </button>

    
  );
};

Button1.propTypes={
  btnLink:PropTypes.node,
  classes:PropTypes.string
}

export default Button1;
