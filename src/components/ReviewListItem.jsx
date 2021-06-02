import Rating from 'react-rating'

const ReviewListItem = ({name, comment, totalScore, staffSupport, mobilityAccess, lowNoiseScore, highLightScore, adequateSpaceScore}) => {

  return(
    <>
    <h4>{name}</h4>
    <Rating emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={totalScore} fractions={2} readonly />
    <p>{comment}</p>
    <div>Staff Support: <Rating emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={staffSupport} fractions={2} readonly /> 
    Mobility Access: <Rating emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={mobilityAccess} fractions={2} readonly /> 
    Low Noise Score: <Rating emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={lowNoiseScore} fractions={2} readonly /> 
    High Light Score: <Rating emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={highLightScore} fractions={2} readonly /> 
    Adequate Space Score: <Rating emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={adequateSpaceScore} fractions={2} readonly /></div>
    </>
  )
}

export default ReviewListItem