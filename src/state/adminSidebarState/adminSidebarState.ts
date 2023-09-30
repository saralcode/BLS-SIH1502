import { create } from 'zustand'

interface SidebarState {
    isToggled: boolean,
    setToggleState: (props: boolean) => void;
}
export const useSidebarState = create<SidebarState>()((set) => ({
    isToggled: false, setToggleState(isToggled: boolean) {
        set({ isToggled: isToggled });
    },
}))