import { data } from '../../data.js'
export function Card(props){
  let bottomRow;
  if(props.id > data.length-3){
    bottomRow = true;
  } else {
    bottomRow = false;
  }
  return(
    <section className="card">
      <div className="card--image-div">
        <image src={`/images/${props.image}`} alt={props.title} />
      </div>
      <div className="card--textcontent">
        <div className="card--toptext">
          <h3><i class="fa-solid fa-location-dot"></i>{props.location}</h3>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
      </div>
    </section>
  )
}