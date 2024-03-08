import { Icon } from "@iconify/react";

const SocialLinks = () => {
    const SOCIAL_LINKS = [

        {
            link: 'https://github.com/sabrinara',
            icon: 'akar-icons:github-fill',
        },
        {
            link: 'https://www.linkedin.com/in/sabrina--rashid',
            icon: 'akar-icons:linkedin-fill',
        },
        {
            link: 'mailto:sabrina.rashid.sara@gmail.com',
            icon: 'mdi:email-outline',
        },
    ];
    return (
        <>
            <div className="flex justify-center space-x-5">
                {SOCIAL_LINKS?.map(({ icon, link }, index) => (
                    <a
                        key={`link ${index}`}
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        className="rounded-full border-2 p-1 text-white border-sky-900 hover:bg-sky-800 hover:text-sky-100 duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    >
                        <Icon className="text-xl" icon={icon} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialLinks;