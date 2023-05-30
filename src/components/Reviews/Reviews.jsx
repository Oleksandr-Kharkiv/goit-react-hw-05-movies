const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { param } = useParams();
  console.log(param);
  return (
    <>
      <div>Reviews: {param}</div>
    </>
  );
};

export default Reviews;