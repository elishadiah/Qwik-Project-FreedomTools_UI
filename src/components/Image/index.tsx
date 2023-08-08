import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

interface Props {
  src?: string;
}

export default component$<Props>(({ src }) => {
  return <Image src={src} class="fa menu-filter-red me-2" />;
});
