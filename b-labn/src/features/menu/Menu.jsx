import MenuItem from "./MenuItem";
function Menu() {
  const menu = [
    {
      key: 1,
      item: "item1",
    },
  ];
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem item={item} key={item.key} />
      ))}
    </ul>
  );
}

export default Menu;
