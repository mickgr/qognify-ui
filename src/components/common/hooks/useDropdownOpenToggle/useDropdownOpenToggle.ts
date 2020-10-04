import { useEffect, useRef, useState, SetStateAction, Dispatch, MutableRefObject } from 'react';
import { get } from 'lodash';

const MOUSE_DOWN_EVENT_NAME = 'mousedown';

/**
 * This hook handles the isOpen state of the dropdown components when the user clicks outside of the component.
 */
const useDropdownOpenToggle = (): [boolean, Dispatch<SetStateAction<boolean>>, MutableRefObject<HTMLDivElement>] => {
    const node = useRef<HTMLDivElement>(null!);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = (e: MouseEvent): void => {
        if (get(node, 'current', false) && node.current.contains(e.target as Node)) {
            return;
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener(MOUSE_DOWN_EVENT_NAME, handleClickOutside);
        } else {
            document.removeEventListener(MOUSE_DOWN_EVENT_NAME, handleClickOutside);
        }
        return (): void => {
            document.removeEventListener(MOUSE_DOWN_EVENT_NAME, handleClickOutside);
        };
    }, [isOpen]);

    return [isOpen, setIsOpen, node];
};

export default useDropdownOpenToggle;
