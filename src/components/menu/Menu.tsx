import menuOptions from "./menu-options.json";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <nav className="flex bg-secondary-surface justify-between p-4 md:flex-col md:h-screen md:justify-start md:w-1/5">
      {menuOptions.map((option) => (
        <MenuItem key={option.title} {...option} />
      ))}
    </nav>
  );
}
