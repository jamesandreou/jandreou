import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

export class Menu extends Component{

	constructor(){
		super();
		this.menuItems = [
			{name : 'About', icon : 'user'},
			{name : 'Education', icon : 'education'},
			{name : 'Projects', icon : 'folder-open'},
			{name : 'Contact', icon : 'phone'}
		];
	}

	render(){
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">James Andreou</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						{this.menuItems.map(function(item, i){
							return(
								<NavItem key={i} href={"#"+item.name}>
									<Glyphicon glyph={item.icon} />
									{' '+item.name}
								</NavItem>
							);
						}, this)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}