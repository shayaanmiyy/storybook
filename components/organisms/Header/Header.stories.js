import "./Header.scss";
import createNavbar from './Header.twig';

export default {
    title: 'Organisms/Navbar',
    tags: ['autodocs'],
    argTypes: {
        siteTitle: { control: 'text' },
        navigation: { control: 'object' },
    },
    render: ({ label, ...args }) => {
        return createNavbar({ label, ...args });
    }
};

export const Default = {
    args: {
        siteTitle: "Shayaan",
        navigation: [
            { name: 'Home', href: 'index.html', active: true },
            { name: 'About', href: 'about.html' },
            { name: 'Services', href: 'services.html' },
            { name: 'Portfolio', href: 'portfolio.html' },
            { name: 'Team', href: 'team.html' },
            { name: 'Blog', href: 'blog.html' },
            { name: 'Contact', href: 'contact.html' },
            { 
                name: 'Dropdown', 
                dropdown: true,
                items: [
                    { name: 'Dropdown 1', href: '#' },
                    { 
                        name: 'Deep Dropdown',
                        dropdown: true,
                        items: [
                            { name: 'Deep Dropdown 1', href: '#' },
                            { name: 'Deep Dropdown 2', href: '#' },
                            { name: 'Deep Dropdown 3', href: '#' },
                            { name: 'Deep Dropdown 4', href: '#' },
                            { name: 'Deep Dropdown 5', href: '#' },
                        ]
                    },
                    { name: 'Dropdown 2', href: '#' },
                    { name: 'Dropdown 3', href: '#' },
                    { name: 'Dropdown 4', href: '#' },
                ]
            }
        ]
    }
};
