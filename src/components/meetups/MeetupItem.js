import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.data.image} alt={props.data.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.data.title}</h3>
        <address>{props.data.address}</address>
        <p>{props.data.description}</p>
      </div>
      <div className={classes.actions}>
        <button className='btn'>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
