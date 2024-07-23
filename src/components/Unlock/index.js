// Write your code here
import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnclocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnclocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png '

  const altText = isUnclocked ? 'unlock' : 'lock'
  const text = isUnclocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnclocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevState => !prevState)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock
