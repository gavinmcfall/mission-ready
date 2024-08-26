function CheckBox({ setIsBorderChanged }) {
  return (
    <>
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        onChange={(e) => {
          console.log(e.target.checked); // Log the checkbox state
          setIsBorderChanged(e.target.checked);
        }}
      />
      <label htmlFor="myCheckbox">Change Border</label>
    </>
  );
}

export default CheckBox;
