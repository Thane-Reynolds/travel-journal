import { data } from '../../data.js'
export function Card(props){
  let bottomRow;
  if(props.id > data.length-1){
    bottomRow = true;
  } else {
    bottomRow = false;
  }
  return(
   <div className="card-holder">
    <section className="card">
      <div className="card--image-div">
        <img src={`/images/${props.image}`} alt={props.title} />
      </div>
      <div className="card--textcontent">
        <div className="card--toptext">
          <h3><i class="fa-solid fa-location-dot"></i>{props.location}</h3>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <span className="card--dates">{props.startDate} - {props.endDate}</span>
        <p className="card--description">{props.description}</p>
      </div>
    </section>
    {bottomRow && <div className="card--line"></div>}
  </div> 
  )
}