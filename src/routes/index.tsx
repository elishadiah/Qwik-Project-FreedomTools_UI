import { component$, useSignal, $ } from "@builder.io/qwik";

import Sidebar from "~/components/portions/sidebar";
import Content from "~/components/portions/content";

export default component$(() => {
  const isOpen = useSignal(false);
  const wifiOpen = useSignal(false);
  const deviceOpen = useSignal(false);
  const softOpen = useSignal(false);

  const togglerSideBar = $(() => {
    isOpen.value = !isOpen.value;
  });

  const wifiToggler = $(() => {
    wifiOpen.value = !wifiOpen.value;
    deviceOpen.value = false;
    softOpen.value = false;
  });

  const deviceToggler = $(() => {
    deviceOpen.value = !deviceOpen.value;
    softOpen.value = false;
    wifiOpen.value = false;
  });

  const softToggler = $(() => {
    softOpen.value = !softOpen.value;
    wifiOpen.value = false;
    deviceOpen.value = false;
  });

  return (
    <>
      <div class="container-fluid position-relative d-flex p-0">
        <Sidebar
          isOpen={isOpen.value}
          wifiToggler$={wifiToggler}
          deviceToggler$={deviceToggler}
          softToggler$={softToggler}
        />
        <Content
          isOpen={isOpen.value}
          wifiOpen={wifiOpen.value}
          deviceOpen={deviceOpen.value}
          softOpen={softOpen.value}
          togglerSideBar$={togglerSideBar}
        />
      </div>
    </>
  );
});
