import useLocalStorage from '@hooks/useLocalStorage';
import {useEffect} from 'react';

export const useLightMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('light-mode');

    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

    const enabled =
        typeof enabledState !== "undefined" ? enabledState : prefersLightMode;
    console.log(enabled);
    useEffect(
        () => {
            const className = "light-mode";
            const element = window.document.body;
            if (enabled) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }

        },
        [enabled]
    );

    return [enabled, setEnabledState];
}
