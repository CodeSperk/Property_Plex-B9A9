import PropTypes from 'prop-types';

const SecHeader = ({subTitle, title}) => {
  return (
    <div className="font-bold space-y-2">
      <p className="text-[var(--clr-accent)]">{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

SecHeader.propTypes={
  subTitle: PropTypes.string,
  title: PropTypes.string
}

export default SecHeader;