import DetailsCar from 'components/DetailsCar/DetailsCar';
import Modal from '../Modal';

const ModalDetailCar = ({ onClose, car }) => {
  return (
    <Modal onClose={onClose}>
      <DetailsCar car={car} />
    </Modal>
  );
};

export default ModalDetailCar;
