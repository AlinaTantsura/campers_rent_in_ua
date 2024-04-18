import sprite from "../images/sprite.svg";

export const CamperCatalogCamp = ({imgSrc, name, price, rating, reviewsLength, location, description, adults, beds }) => {
    return (
        <li>
            <img src={imgSrc} alt={name} />
                        <h2>{name}</h2>
                        <p>€{price}</p>
                        <svg width="24" height="24"><use href={sprite + "#icon-Property-1Default"} /></svg>
                        <svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                        <p>{rating}({reviewsLength} Reviews)</p>
                        <svg width="16" height="16"><use href={sprite + "#icon-location"} /></svg>
                        <p>{location}</p>
                        <p>{description}</p>
                        <div>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Users"} /></svg>{adults} adults</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Automatic"} /></svg>Automatic</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vertical-container"} /></svg>Petrol</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Kitchen"} /></svg>Kitchen</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Bed"} /></svg>{beds } beds</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vector"} /></svg>AC</button>
                        </div>
                        <button type="button">Show more</button>
        </li>
    )
}