import styles from './HomeSection.module.css'

export const HomeSection = () => {
    return (
        <section className={styles.section_box}>
            <h1 className={styles.section_title}>Choice your camper and discover the country</h1>
            <div>
                <h2 className={styles.list_title}>Step by step to your trip</h2>
                <ul className={styles.picture_box_list}>
                    <li className={styles.picture_box}>
                        <img className={styles.list_picture} src="https://images.unsplash.com/photo-1627664819818-e147d6221422?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Camper, night, stars" width="400px" />
                    </li>
                    <li className={styles.picture_box}>
                        <img className={styles.list_picture} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1OChj6lk7ggEHzVVFu1L1J2AVLkJck2EBhlgTEYWwA&s" alt="Camper, night, stars" width="400px" />
                    </li>
                    <li className={styles.picture_box}>
                        <img className={styles.list_picture} src="https://camper-adriatic.com/imagecache/objectmax/10-07-19/3ba46a9b-5917-484b-864d-b12e7cff45fa.jpg" alt="Camper, night, stars" width="400px" />
                    </li>
                </ul>
            <ul className={styles.section_list}>
                <li className={styles.section_list_item}>
                    <h3 className={styles.item_title}>1. Find the camper van you love</h3>
                    <p>Choose from the list of camper van rentals. Select your dates, price, add-ons, and personal van style.</p>
                </li>
                 <li className={styles.section_list_item}>
                    <h3 className={styles.item_title}>2. Check reviews</h3>
                    <p>You can read reviews of our customers to be sure in your choice.</p>
                </li>
                <li className={styles.section_list_item}>
                    <h3 className={styles.item_title}>3. Book your trip</h3>
                    <p>Securely reserve the van of your choice. Easily plan your trip using our booking form.</p>
                </li>
                <li className={styles.section_list_item}>
                    <h3 className={styles.item_title}>4. Hit the road</h3>
                    <p>You can easily pick up your camper van and start your trip. Travel exactly how you want.</p>
                </li>
                </ul>
                </div>
        </section>
    )
}