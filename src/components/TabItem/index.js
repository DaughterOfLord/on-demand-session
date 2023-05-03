/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props //  isActive
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  // const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className="tab-btn" //  ${activeTabClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
