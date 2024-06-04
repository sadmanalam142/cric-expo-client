import FrequentQuestions from "../components/home/FrequentQuestions";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import AvailableBrands from "../components/home/AvailableBrands";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableBrands></AvailableBrands>
            <Products></Products>
            <FrequentQuestions></FrequentQuestions>
        </div>
    );
};

export default Home;