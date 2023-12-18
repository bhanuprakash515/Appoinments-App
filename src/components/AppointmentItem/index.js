import './index.css'

const AppointmentItem = props => {
  const {appointmentItem, toggleIsStarred} = props
  const {title, date, isFavourite, id} = appointmentItem

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const imgUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="appointment-cont">
      <div className="inside-cont">
        <p className="para-1">{title}</p>
        <img
          src={imgUrl}
          alt="star"
          className="star-img"
          onClick={onClickStar}
        />
      </div>
      <p className="para-date">{date}</p>
    </li>
  )
}

export default AppointmentItem
