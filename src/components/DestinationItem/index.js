import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details

  return (
    <li className="li_user_card_container">
      <img className="user_image" alt={name} src={imgUrl} />
      <div className="name_and_role_container">
        <p className="user_name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
