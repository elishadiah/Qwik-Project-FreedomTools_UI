import { component$, useSignal, type PropFunction } from "@builder.io/qwik";
import Image from "~/components/Image";
import { iconList } from "~/assets/iconlist";

interface Props {
  isOpen?: boolean;
  wifiToggler$: PropFunction<() => void>;
  deviceToggler$: PropFunction<() => void>;
  softToggler$: PropFunction<() => void>;
}

export default component$<Props>(({ isOpen,wifiToggler$, deviceToggler$, softToggler$ }) => {
  const subMenu = useSignal(false);
  return (
    <div class={`sidebar pe-4 pb-3 ${isOpen && "open"}`}>
      <nav class="navbar bg-secondary navbar-dark">
        <a href="/" class="navbar-brand mx-4 ">
          <h3 class="text-white">FreedomTools</h3>
        </a>
        <div class="navbar-nav w-100">
          {iconList.slice(0, 8).map((obj, i) => (
            <a href="/" class="nav-item nav-link" key={i}>
              <Image src={obj.src} />
              {obj.name}
            </a>
          ))}
          <hr />
          <ul id="myUL">
            <li>
              <div
                class="caret nav-item nav-link active"
                onClick$={()=>subMenu.value=!subMenu.value}
              >
                <Image src={iconList[8].src} />
                {iconList[8].name}
              </div>
              <ul class={`nested ${subMenu.value && "active"}`}>
                <li class="nav-item nav-link submenu" onClick$={wifiToggler$}>Wifi Config</li>
                <li class="nav-item nav-link submenu" onClick$={deviceToggler$}>Device Config</li>
                <li class="nav-item nav-link submenu" onClick$={softToggler$}>SoftAP Config</li>
              </ul>
            </li>
          </ul>

          <hr />
          {iconList.slice(9, 11).map((obj, i) => (
            <a href="/" class="nav-item nav-link" key={i}>
              <Image src={obj.src} />
              {obj.name}
            </a>
          ))}
          <hr />
          {iconList.slice(11).map((obj, i) => (
            <a href="/" class="nav-item nav-link" key={i}>
              <Image src={obj.src} />
              {obj.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
});
