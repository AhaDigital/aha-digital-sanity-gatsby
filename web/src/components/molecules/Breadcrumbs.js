import React from 'react'
import { Link } from 'gatsby'
import Text from '../atoms/Text'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import theme from '../themes'

const StyledBreadcrumbs = styled.ol`
  display: flex;
  a {
    color: ${theme.palette.dark};
    span {
      color: ${theme.palette.dark};
    }
    &:last-child {
      text-decoration: none;
    }
  }
`

const BreadcrumbsDivider = styled.span`
  display: inline-block;
  margin: 0 ${theme.spacings.md};
  color: ${theme.palette.dark};

`

const Breadcrumbs = ({navigation}) => {

  return (
    <nav aria-label="breakdcrumbs">
      <StyledBreadcrumbs>
        {
          navigation.map((navItem, index) => {
            const {text, to, currentPage} = navItem

            return (
              <li>
                {
                  currentPage ? (
                    <Link to={to} aria-current="page">
                      <Text isParagraph={false}>{text}</Text>
                    </Link>
                  ) : (
                    <Link to={to}>
                      <Text isParagraph={false}>{text}</Text>
                    </Link>
                  )
                }
                {
                  index < navigation.length -1 && (
                    <BreadcrumbsDivider>/</BreadcrumbsDivider>
                  )
                }
              </li>      
            )
          })
        }
      </StyledBreadcrumbs>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  navigation: PropTypes.array.isRequired
}

export default Breadcrumbs
