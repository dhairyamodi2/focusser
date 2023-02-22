export interface State{
    start: boolean;
    show: boolean;
}

export interface StopWatchProps{
    state: State;
    setState: Function
}

export interface ModalState{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}