import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDeleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="domain-container">
        <div className="domain-card">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">
            {title} <span className="domain-url">{domainUrl}</span>
          </p>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
