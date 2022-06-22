import { NavLink } from "@remix-run/react";

export default function ThemedNavLink({
  to,
  label,
  selectedImage,
}: {
  to: string;
  label: string;
  selectedImage: File | null;
}) {
  return (
    <NavLink
      className={({ isActive }) =>
        "rounded px-2 py-1 text-lg font-bold text-white " +
        (isActive
          ? "border-2 border-white bg-orange-500"
          : "border border-gray-200")
      }
      to={to}
      state={{ image: selectedImage }}
    >
      {label}
    </NavLink>
  );
}
