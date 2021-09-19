import { Div, Button, Modal, Icon, Text,Textarea } from "atomize";
import {useState,useEffect} from 'react'
import SmallSizeDropdown from "./SmallSizedDropdown";
import classes from './styles.module.css'
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
      <SmallSizeDropdown  />
      <div className = {classes.modalContainer}>
            <div className = {classes.modalHeader}> Briefly describe your health concern</div>
            <div><Textarea h = "40vh" w = "33vw" placeholder="Provide details of your question including symptoms, relevant medical history, etc..."/></div>
            <div><Button shadow="3"
                hoverShadow="4"
                bg = "#687698"
                hoverBg = "#7b7b7b">Submit</Button></div>
      </div>
    </Modal>
  );
};

export default CreateModal