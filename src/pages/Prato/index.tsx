import styles from './Prato.module.scss';
import { useLocation, useParams } from 'react-router-dom';
function Prato() {
  console.log(useLocation());
  return <div>Prato</div>;
}

export default Prato;
