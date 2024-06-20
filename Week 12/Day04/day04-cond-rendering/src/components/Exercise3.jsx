import { useState, useEffect } from "react";

function ToggleNewAnimal() {
  const [newAnimal, setNewAnimal] = useState(null);

  return (
    <div className="toggle-new-animal">
      <button
        onClick={() =>
          setNewAnimal(
            "https://espree.com/sites/default/files/2019-10/MiniatureSchnauzer.png"
          )
        }
      >
        Dog
      </button>
      <button
        onClick={() =>
          setNewAnimal(
            "https://www.royacdn.com/unsafe/Site-15691f15-0c62-4336-8f1a-33255e69e587/blog_1_.jpg"
          )
        }
      >
        Cat
      </button>
      <button
        onClick={() =>
          setNewAnimal(
            "https://i.pinimg.com/736x/7a/2d/3e/7a2d3e9536f1bbf572270204dca0ab7b.jpg"
          )
        }
      >
        Horse
      </button>
      <br />
      <br />
      <br />
      <img src={newAnimal} />
    </div>
  );
}

export default ToggleNewAnimal;
//can use &nbsp; if not wanting to quanity one of the states
