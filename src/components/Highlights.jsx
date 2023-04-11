import SpecialCard from "./SpecialCard"
import greakSalad from "../assests/greek salad.jpg"
import lemonDesert from "../assests/lemon dessert.jpg"
import bruchrtta from "../assests/bruchetta.svg"
import Button from "./Button"
const Highlights = () => {
    return (
       <section className="highlights paddining" >
            <div className="special-title">
                <h3>Specials</h3>
                <Button text="Online Menu" />
            </div>
            <div className="special-cards">
                <SpecialCard image={greakSalad}
                    title="Greek salad"
                    price="$12.99"
                    info="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                    order="Order a delivery"
                />
                <SpecialCard image={bruchrtta}
                    title="Bruchetta"
                    price="$ 5.99"
                    info="TOur Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. . "
                    order="Order a delivery"
                />
                <SpecialCard image={lemonDesert}
                    title="Lemon Dessert"
                    price="$ 5.00"
                    info="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    order="Order a delivery"
                />
            </div>
       </section>
    )
}
export default Highlights