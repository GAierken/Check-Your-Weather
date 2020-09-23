import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'New York, NY' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical inverted color="violet">
        <Menu.Item
          name='New York, NY'
          active={activeItem === 'New York, NY'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Los Angeles, CA'
          active={activeItem === 'Los Angeles, CA'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Miami, FL'
          active={activeItem === 'Miami, FL'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          name='Other'
          active={activeItem === 'Other'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}