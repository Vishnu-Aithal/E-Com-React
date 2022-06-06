import { useLoader } from "contexts/loader-context";
export const Loader: React.FC = () => {
    const { loader } = useLoader();
    return (
        <div className={`loader ${loader.state}`}>
            <h1 className="loader__text">{loader.text}</h1>
        </div>
    );
};
