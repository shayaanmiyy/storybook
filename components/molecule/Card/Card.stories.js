import "./Card.scss"
import createCard from './Card.twig'

export default {
    title: ' molecule/Card',
    argTypes: {
        title: { control: 'text' },
        currency: { control: 'text' },
        price: { control: 'number' },
        period: { control: 'text' },
        features: { control: 'object' },
        link: { control: 'text' },
        buttonText: { control: 'text' },
        featured: { control: 'boolean' }
      },
    render: ({ label, ...args }) => {
        return createCard({ label, ...args });
    }
}

export const Default = {
    args: {
        title: "Business",
        currency: "$",
        price: 29,
        period: "/month",
        features: [
          { text: "Far far away behind" },
          { text: "The word mountains far from" },
          { text: "The countries Vokalia" },
          { text: "and Consonantia, there" },
          { text: "At the coast", exclude: true },
          { text: "Semantics, a large language", exclude: true }
        ],
        link: "#",
        buttonText: "Get Started",
        featured: true
      }
}