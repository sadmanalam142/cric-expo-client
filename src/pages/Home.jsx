import FrequentQuestions from "../components/home/FrequentQuestions";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <FrequentQuestions></FrequentQuestions>
        </div>
    );
};

export default Home;