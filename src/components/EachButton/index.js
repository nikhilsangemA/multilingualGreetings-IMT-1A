import './index.css'

const EachButton = props => {
  const {eachDetails, sendActiveBtn, isActive} = props
  const {imageUrl, buttonText, imageAltText} = eachDetails

  const changeBtnAndImg = () => {
    sendActiveBtn({buttonText, imageUrl, imageAltText})
  }
  const activeButton = isActive ? 'bgCol' : ''

  return (
    <>
      <button
        type="button"
        className={`${activeButton} btn-edit`}
        onClick={changeBtnAndImg}
      >
        {buttonText}
      </button>
    </>
  )
}

export default EachButton
