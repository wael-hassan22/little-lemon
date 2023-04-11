import TestCard from "./TestCard"
const Testominals = () => {
  return (
    <section className="Testominals paddining">
        <div className="testominal-title">
            <h2>Testimonials</h2>
        </div>
        <div className="testominal-cards">
            <TestCard 
                rating="⭐⭐⭐⭐⭐"
                name="jane"
                text="great exprience"
            />
            <TestCard 
                 rating="⭐⭐⭐⭐⭐"
                name="jane"
                text="great exprience"
            />
            <TestCard 
                 rating="⭐⭐⭐⭐⭐"
                name="jane"
                text="great exprience"
            />
            <TestCard  
                rating="⭐⭐⭐⭐⭐"
                name="jane"
                text="great exprience"/>
        </div>
    </section>
  )
}

export default Testominals