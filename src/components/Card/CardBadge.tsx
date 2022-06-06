export const CardBadge: React.FC<{ badge: string }> = ({ badge }) => {
    return <div className="card__badge bg-yellow p-1 br-2">{badge}</div>;
};
