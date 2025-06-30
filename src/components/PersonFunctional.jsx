const PersonFunctional = (props) => {
  return (
    <div>
      <span>Nombre: {props.name}</span><br />
      <span>Apellido: {props.surname}</span><br />
      <span>Edad: {props.age}</span><br /><br />
    </div>
  );
};

export default PersonFunctional;
