import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import Icon from '../atoms/Icon'
import theme from '../themes'

const Text = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 3px;
  ${({theme, rollingWord, isVisible}) => theme && css`

    ${rollingWord && `
      position: absolute;
      top: 0;
      left: 0;
      display: initial;

      ${theme.visually.hidden}

      ${isVisible ?`
        ${theme.visually.visible}
      ` : ''}
    `}
  `}
`

const LineBreak = styled.span`
  display: block;
`

const RollingWordWrapper = styled.span`
  position: relative;
  display: inline-block;
  ${({minWidth}) => minWidth && css`
    min-width: ${minWidth};
  `}
`

const Decorator = styled.span`
  width: 100%;
  height: 9px;
  background-color: ${theme.palette.yellow};
  position: absolute;
  bottom: 2px;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftIcon = styled.span`
  margin: 0 0 0 -20px;
  display: flex;
`

const RightIcon = styled.span`
  margin: 0 -20px 0 0;
  display: flex;
`

const InlineTextScentance = ({ part, addContrast }) => {
  const { _type, _key, text, withLineBreak, withDecorator } = part
  const { bodyPortableRollingTextWords} = part
  const [currentVisibleWord, setCurrentVisibleWord] = useState(0)

  useEffect(() => {
    if(_type !== 'inlineTextListItem' && bodyPortableRollingTextWords) {
      setTimeout(() => {
        if(currentVisibleWord === bodyPortableRollingTextWords.length -1) {
          setCurrentVisibleWord(0)
        } else {
          setCurrentVisibleWord(currentVisibleWord + 1)
        }
      }, 3000)
    }
  }, [currentVisibleWord])

  const textContent = () => (
    <Text key={_key} addContrast={addContrast}>
      {text}
      {withDecorator && !addContrast && (
        <Decorator>
          <LeftIcon>
            <Icon symbol="decoratorLeft"/>
          </LeftIcon>
          <RightIcon>
            <Icon symbol="decoratorRight"/>
          </RightIcon>
        </Decorator>
      )}
    </Text>
  )

  if(_type === 'inlineTextListItem') {
    return withLineBreak ? (
      <LineBreak>
        {
          textContent()
        }
      </LineBreak>
    ) : textContent()
  } else {
    return (
      <RollingWordWrapper>
        {
          bodyPortableRollingTextWords.map((wordObj, index) => {
            return (
              <Text key={wordObj._key} rollingWord={true} isVisible={index === currentVisibleWord}>
                {wordObj.word}
                {!addContrast && (
                  <Decorator>
                    <LeftIcon>
                      <Icon symbol="decoratorLeft"/>
                    </LeftIcon>
                    <RightIcon>
                      <Icon symbol="decoratorRight"/>
                    </RightIcon>
                  </Decorator>
                )}
              </Text>
            )
          })
        }
      </RollingWordWrapper>
    )
  }
}

export default InlineTextScentance
