import { FC } from 'react';
import LandingSection from '../../components/landing/LandingSection';
import CharactersSection from '../../components/characters/CharactersSection';

const Home: FC = () => {
    // const posts = useGetPosts();

    return (
        <div className="home">
            <LandingSection />
            <CharactersSection />
        </div>
    );
}

export default Home;