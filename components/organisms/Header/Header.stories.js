import "./Header.scss";
import createNavbar from './Header.twig';


export default {
    title: 'Organisms/Navbar',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        return createNavbar({ label, ...args });
    }
}

argTypes: {
    siteTitle: {control: 'text'}
}

export const Default = {
    args: {
        siteTitle: "Shayaan"
    }
}