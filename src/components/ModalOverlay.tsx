import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react';
import { ModalState } from '../types';

const ModalAlert: React.FC<ModalState> = ({onClose, isOpen, onOpen}) => {
    return (
        <div>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Improve your Focus time</ModalHeader>
                    <ModalCloseButton _hover={{backgroundColor: '#319795', color: 'white'}}/>
                    <ModalBody>
                        Press the start button to begin the timer, and start working on anything productive. Once you are bored or tired or maybe lost your focus, press the stop button and data will be recorded. And data will be plotted on your performance graph. You wll be able to see history of your past retention time. If you see that line increasing, Congratulations, you are doing great. If not, work on your self.<br></br>
                        <b>Note if you clear site data, all your past history would be lost!</b>
                    </ModalBody>
                    <ModalFooter flexDirection={'column'}>
                        Core Idea behind this project, is to make you aware of your past retention time. Graph is going to tell you, how good/bad you are doing and what you need to work on.
                        Stats help us making decisions and analyzing ourselves.
                        <br></br>
                        <b>It's all a game of dopamine. You see that line in chart increasing, more determined you will be in  outperforming your past performance.</b>
                        <Button onClick={onClose} marginTop='3' colorScheme={'teal'}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalAlert;