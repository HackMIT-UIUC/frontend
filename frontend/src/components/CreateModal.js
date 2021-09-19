import { Div, Button, Modal, Icon, Text } from "atomize";
import SmallSizeDropdown from "./SmallSizedDropdown";
const CreateModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md" w="90vw" h = "80vh"> 
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
    <SmallSizeDropdown/>
    </Modal>
  );
};

export default CreateModal