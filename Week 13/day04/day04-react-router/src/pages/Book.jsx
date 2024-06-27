import { useParams } from "react-router-dom";

function Book() {
  const params = useParams();
  console.log("Book ID: " + params.bookid);
  return (
    <div>
      <h2>Book</h2>
      <p>TYour are about to access book: {params.bookid}</p>
    </div>
  );
}

export default Book;
