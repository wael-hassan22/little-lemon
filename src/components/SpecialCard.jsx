import Button from "./Button"

const SpecialCard = (props) => {
  return (
        <div className="dish-info">
            <img src={props.image} alt="" />
            <div className="dish-details">
              <h3>{props.title}</h3>
              <h4>{props.price}</h4>
              <p>{props.info}</p>
              <Button text={props.order}/>
            </div>
        </div>
  )
}

export default SpecialCard