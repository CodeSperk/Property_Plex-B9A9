import PropTypes from 'prop-types';
import Button1 from '../../../components/Buttons/Button1';
import { Link } from 'react-router-dom';

const EstateCard = ({estate}) => {
  const {id, estate_title, status, location, facilities} = estate;

  const btnLink = <Link to={`/estate/${id}`}>View Property</Link>

  return (
    <div className='w-96 flex flex-col justify-between space-y-4 border p-6'>
      <h4>{estate_title}</h4>
      <p>Facilities : {facilities}</p>
      <small>Location :{location}</small>
      <p>Status : {status}</p>

      <Button1 btnLink={btnLink} classes="w-full"></Button1>
    </div>
  );
};


EstateCard.propTypes={
  estate:PropTypes.object
}

export default EstateCard;