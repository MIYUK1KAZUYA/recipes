import Search from "../../search/Search";
import Recipes from "../../recipes/Recipes";
import Signature from "../../signature/Signature";
import "./Home.css";

const Home = function() {
    return (
        <div className="home">
            <Signature />
            <Search />
            <Recipes />
        </div>
    );
};

export default Home;
