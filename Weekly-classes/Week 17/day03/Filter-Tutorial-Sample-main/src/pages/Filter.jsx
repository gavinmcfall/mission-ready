import { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { iceCreamData } from "./iceCreamData";

function Filter() {
  const [selectDairyFree, setSelectedDairyFree] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectedColours, setSelectedColours] = useState([]);

  const [filteredCategories, setFilteredCategories] = useState(iceCreamData);

  const handleDairyFreeChange = (dairyOption) => {
    setSelectedDairyFree((prevDairyFree) =>
      prevDairyFree.includes(dairyOption)
        ? prevDairyFree.filter((iceCream) => iceCream !== dairyOption)
        : [...prevDairyFree, dairyOption]
    );
  };

  const handleFlavourChange = (flavourOption) => {
    setSelectedFlavours((prevFlavour) =>
      prevFlavour.includes(flavourOption)
        ? prevFlavour.filter((iceCream) => iceCream !== flavourOption)
        : [...prevFlavour, flavourOption]
    );
  };

  const handleColourChange = (colourOption) => {
    setSelectedColours((prevColour) =>
      prevColour.includes(colourOption)
        ? prevColour.filter((iceCream) => iceCream !== colourOption)
        : [...prevColour, colourOption]
    );
  };

  console.log(selectDairyFree);
  console.log(selectedFlavours);
  console.log(selectedColours);

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <h2>Filtering Exercise</h2>
        <br />
        {/* =====================  Checkbox =====================*/}
        <h3>Dairy Free</h3>
        <div className={styles.checkboxContainer}>
          {["Dairy Free", "Non Dairy Free"].map((dairyOption) => (
            <div key={dairyOption}>
              <input
                type="checkbox"
                value={dairyOption}
                onChange={() => handleDairyFreeChange(dairyOption)}
              />
              <label>{dairyOption}</label>
            </div>
          ))}
        </div>
        <br />

        <h3>Flavour</h3>
        <div className={styles.checkboxContainer}>
          {["Vanilla", "Chocolate", "Fruit", "Rainbow"].map((flavour) => (
            <div key={flavour}>
              <input
                type="checkbox"
                value={flavour}
                onChange={() => handleFlavourChange(flavour)}
              />
              <label>{flavour}</label>
            </div>
          ))}
        </div>
        <br />

        <h3>Colour</h3>
        <div className={styles.checkboxContainer}>
          {["Pink", "Chocolate", "White", "Others"].map((colour) => (
            <div key={colour}>
              <input
                type="checkbox"
                value={colour}
                onChange={() => handleColourChange(colour)}
              />
              <label>{colour}</label>
            </div>
          ))}
        </div>
      </div>
      <br />

      {/* ================ Filtered Display Section ================*/}
      <div className={styles.pictureGallery}>
        {filteredCategories.map((iceCream) => {
          return (
            <div className={styles.pictureItem} key={iceCream.id}>
              <img src={iceCream.image} alt={iceCream.name} />
              <p>{iceCream.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
