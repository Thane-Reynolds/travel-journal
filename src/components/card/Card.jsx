export default function Card({image, title, location, googleMapsUrl, startDate, endDate, description}){
   return(
   <div className="card-holder">
    <section className="card">
      <div className="card--image-div">
        <img src={`/images/${image}`} alt={title} />
      </div>
      <div className="card--textcontent">
        <div className="card--toptext">
          <h3><i class="fa-solid fa-location-dot"></i>{location}</h3>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h2 className="card--title">{title}</h2>
        <span className="card--dates">{startDate}{endDate && ` - ${endDate}`}</span>
        <p className="card--description">{description}</p>
      </div>
    </section>
  </div> 
  
  )
}