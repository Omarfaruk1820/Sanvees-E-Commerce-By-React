

const SingleCategori = ({ categori }) => {
  const { img, title, price } = categori

  return (
   <div className='mx-4'>
     <div className="card border border-yellow-300  bg-base-100 shadow-xl">
      <figure className="px-6 pt-6">
        <img src={img} alt="Product" className="rounded-xl h-32 w-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        
      </div>
    </div>
   </div>
  );
};

export default SingleCategori;
