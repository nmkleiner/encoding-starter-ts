interface Device {
    icon: string;
    title: string;
    description: string;
}

interface User {
    email: string;
    password: string;
}

interface TargetState {
    items: TargetItem[];
    filter: string;
}

interface TargetItem {
    title: string;
    active: boolean;
}

interface DevicesState {
    items: Device[];
}

interface PlacesState {
    items: Place[];
}

interface Place {
    title: string;
    description: string;
}

interface AreasState {
    items: Area[];
}

interface Area {
    img: string;
    title: string;
    description: string;
}

interface TargetPanelState {
    isOpen: boolean;
}

interface UsersState {
    loggedInUser: object;
}

interface LeftPanelState {
    isPanelOpen: boolean;
    theme: string;
    filter: string;
}

interface LoginData {
    email: string;
    password: string;
}
