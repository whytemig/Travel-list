export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 📝</em>
      </p>
    );

  const numItems = items.length;
  const newPacked = items.filter((item) => item.packed).length;
  const percentage = Math.ceil((newPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing ! Reagy to Go!!"
          : `You have ${numItems} items on your list, and you already packed ${" "}
        ${newPacked}, ${percentage}%`}
      </em>
    </footer>
  );
};
