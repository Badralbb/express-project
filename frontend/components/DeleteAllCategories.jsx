export const DeleteAllCategories = async () => {
  await fetch(`http://localhost:4000/categories`, {
    method: "DELETE",
  });
};
