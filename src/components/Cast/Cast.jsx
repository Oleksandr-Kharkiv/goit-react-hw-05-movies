const { useParams } = require('react-router-dom');

const Cast = () => {
  const { param } = useParams();
  console.log(param);
  return (
    <>
      <div>Reviews: {param}</div>
        
    </>
  );
};

export default Cast;