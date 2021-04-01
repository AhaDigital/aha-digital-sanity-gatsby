import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import Icon from './Icon'
import PortableText from './portableText'
import theme from '../themes'

const StyledList = styled.ul`
  border-top: 1px solid rgba(${theme.palette.rawRgb.dark}, 0.2);
`

const StyledListItem = styled.li`
  padding: 0 ${theme.spacings.md};
  border-bottom: 1px solid rgba(${theme.palette.rawRgb.dark}, 0.2);
`

const ItemButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  font: ${theme.headings.h4Mobile};
  text-align: left;
  color: ${theme.palette.dark};
  background: transparent;
  border: none;
  cursor: pointer;

  ${({theme}) => theme.media.md`
    font: ${theme.headings.h4};
  `}
`

const ItemButtonIconWrapper = styled.span`
  transition: all ${theme.animationTime.default} ease-in-out;
  ${({isVisible}) => isVisible && css`
    transform: rotate(180deg);
  `}
`

const FoldingContent = styled.div`
  width: 100%;
  ${theme.visually.hidden}
  ${({isVisible}) => isVisible && css`
    ${theme.visually.visible}
    margin-top: ${theme.spacings.sm};
  `}
`

const FoldableList = ({list = []}) => {
  const [visibleListItem, setVisibleListItem] = useState(null)
  
  return (
    <StyledList>
      {
        list.map(listItem => {
          const { listBlockTitle, bodyPortableText } = listItem
          const isVisible = visibleListItem === listItem._key

          return (
            <StyledListItem key={listItem._key}>
              <ItemButton
                name="foldable-list-button"
                id={`foldable-list-button-${listItem._key}`}
                aria-controls={`foldable-content-${listItem._key}`}
                aria-label="Visa/dölj mer text"
                onClick={() => setVisibleListItem(isVisible ? null : listItem._key)}
                aria-expanded={isVisible}
              >
                <span>
                  {listBlockTitle}
                </span>
                <ItemButtonIconWrapper isVisible={isVisible}>
                  <Icon symbol="chevronDown"/>
                </ItemButtonIconWrapper>
              </ItemButton>
              <FoldingContent id={`foldable-content-${listItem._key}`} isVisible={isVisible}>
                <PortableText blocks={bodyPortableText} />
              </FoldingContent>
            </StyledListItem>
          )
        })
      }
    </StyledList>
  )
}

export default FoldableList
