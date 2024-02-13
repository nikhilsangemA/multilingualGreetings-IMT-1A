import {Component} from 'react'
import EachButton from '../EachButton'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLanguage extends Component {
  state = {
    initialImg: languageGreetingsList[0].imageUrl,
    initialAltText: languageGreetingsList[0].imageAltText,
    isActiveBtn: languageGreetingsList[0].buttonText,
  }

  sendActiveBtn = ({buttonText, imageAltText, imageUrl}) => {
    this.setState({
      isActiveBtn: buttonText,
      initialAltText: imageAltText,
      initialImg: imageUrl,
    })
  }

  render() {
    const {initialImg, isActiveBtn, initialAltText} = this.state
    console.log(initialAltText)
    return (
      <div className="bgContainer">
        <h1>Multilingual Greetings</h1>
        <div className="btn-cont">
          {languageGreetingsList.map(eachLang => (
            <EachButton
              key={eachLang.id}
              eachDetails={eachLang}
              sendActiveBtn={this.sendActiveBtn}
              isActive={isActiveBtn === eachLang.buttonText}
            />
          ))}
        </div>
        <img src={initialImg} className="img-edit" alt={initialAltText} />
      </div>
    )
  }
}
export default MultiLanguage
