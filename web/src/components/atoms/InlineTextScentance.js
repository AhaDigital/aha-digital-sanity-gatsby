import React from 'react'
import styled, {css} from 'styled-components'
import Icon from '../atoms/icon'
import theme from '../themes'

const Text = styled.span`
  position: relative;
  ${({theme, withLineBreak, rollingWord}) => theme && css`
    ${withLineBreak && `
      display: block;
    `}

    ${rollingWord && `
      position: absolute;
    `}
  `}
`

const RollingWordWrapper = styled.span`
  position: relative;
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

  if(_type === 'inlineTextListItem') {
    return (
      <Text key={_key} withLineBreak={withLineBreak}>
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
  } else {
    const { bodyPortableRollingTextWords } = part

    return (
      <RollingWordWrapper>
        {
          bodyPortableRollingTextWords.map( wordObj => {
            return (
              <Text key={wordObj._key} rollingWord={true}>{wordObj.word}</Text>
            )
          })
        }
      </RollingWordWrapper>
    )
  }
}

export default InlineTextScentance
