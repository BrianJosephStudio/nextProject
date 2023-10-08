import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import React from "react";

const TestComponent = () => {
  return (
    <NavigationMenuItem>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default TestComponent;
