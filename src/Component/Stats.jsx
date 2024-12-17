function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  let totalItems = items.length;
  let packedItems = items.filter((item) => item.packed === true).length;
  let leftOf = Math.floor((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {leftOf !== 100 ? (
        <em>
          💼 You have {totalItems} items on your list , and you already packed{" "}
          {packedItems} ({leftOf}%)
        </em>
      ) : (
        <em>Your Got EveryThing Ready To Go ✈️</em>
      )}
    </footer>
  );
}

export default Stats;
