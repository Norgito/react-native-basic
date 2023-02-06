import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstname, lastname } = props;
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}



Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}
