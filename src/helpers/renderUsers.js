export const numberOfUsers = () => {
    const isMobile = window.innerWidth < 767;
    const renderUsers = isMobile ? 3: 6;
    return renderUsers;
};