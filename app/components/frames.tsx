import { Link, NavLink, useMatches } from "@remix-run/react";
import ThemedNavLink from "./ThemedNavLink";

declare interface PropTypes {
  selectedImage: File | null;
}

export default function Frames({ selectedImage }: PropTypes) {
  return (
    <div className="mb-8 flex basis-1/4 justify-center space-x-4 ">
      {/* <ThemedNavLink to="square" label="Square" selectedImage={selectedImage} /> */}
      <ThemedNavLink to="circle" label="Circle" selectedImage={selectedImage} />
      <ThemedNavLink
        to="circle_orange"
        label="Circle Orange"
        selectedImage={selectedImage}
      />
    </div>
  );
}
