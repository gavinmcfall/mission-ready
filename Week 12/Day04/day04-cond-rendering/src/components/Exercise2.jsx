import { useState, useEffect } from "react";

function ToggleAnimal() {
  const [animal, setAnimal] = useState(null);

  return (
    <div className="toggle-animal">
      <button
        onClick={() =>
          setAnimal(
            "https://espree.com/sites/default/files/2019-10/MiniatureSchnauzer.png"
          )
        }
      >
        Dog
      </button>
      <button
        onClick={() =>
          setAnimal(
            "https://www.royacdn.com/unsafe/Site-15691f15-0c62-4336-8f1a-33255e69e587/blog_1_.jpg"
          )
        }
      >
        Cat
      </button>
      <br />
      <br />
      <br />
      <img src={animal} />
    </div>
  );
}

export default ToggleAnimal;
//can use &nbsp; if not wanting to quanity one of the states
