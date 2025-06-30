import React from 'react';

class PersonClass extends React.Component {
  render() {
    return (
      <div>
        <span>Nombre: {this.props.name}</span><br />
        <span>Apellido: {this.props.surname}</span><br />
        <span>Edad: {this.props.age}</span><br /><br />
      </div>
    );
  }
}

export default PersonClass;
