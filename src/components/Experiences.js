import Card from "./Card";
import Data from "./Data";


export default function Experiences() {
    const experience = Data.map(experience => 
        <Card 
            item={experience}
        />
        )
    return (
        <div className="experience-container">
            {experience}
        </div>
    )
}