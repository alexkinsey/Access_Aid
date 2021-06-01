import './LocationListItem.css';

const LocationListItem = ({ location }) => {
  let staff_support = 0;
  let mobility_access = 0;
  let low_noise_score = 0;
  let high_light_score = 0;
  let adequate_space = 0;
  let total_score = 0;
  location.ratings.forEach((rating) => {
    staff_support += rating.staff_support;
    mobility_access += rating.mobility_access;
    low_noise_score += rating.low_noise_score;
    high_light_score += rating.high_light_score;
    adequate_space += rating.adequate_space;
    total_score += rating.total_score;
  });
  staff_support = staff_support / location.ratings.length;
  mobility_access = mobility_access / location.ratings.length;
  low_noise_score = low_noise_score / location.ratings.length;
  high_light_score = high_light_score / location.ratings.length;
  adequate_space = adequate_space / location.ratings.length;
  total_score = total_score / location.ratings.length;

  return (
    <>
      <div className="location-list-item">
        <img className="location-image" src={location.picture_source} alt="location"></img>
        <div className="location-info">
          <h2>{location.name}</h2>
          <p>Rating: {total_score}/5</p>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: {staff_support}/5</li>
            <li>Mobility Access: {mobility_access}/5</li>
            <li>Noise Level: {low_noise_score}/5</li>
            <li>Light Level: {high_light_score}/5</li>
            <li>Adequate Space: {adequate_space}/5</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default LocationListItem;
