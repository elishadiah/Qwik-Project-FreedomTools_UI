import { component$, type PropFunction } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

interface Props {
  togglerSideBar$: PropFunction<() => void>;
}

export default component$<Props>(({ togglerSideBar$ }) => {
  return (
    <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
      <a href="/" class="navbar-brand d-flex d-lg-none me-4">
        <h2 class="text-primary mb-0">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTQ0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJWNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyek00MTYgOTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJWNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjEyOGMwLTE3LjcgMTQuMy0zMiAzMi0zMnpNMzIwIDIyNFY0ODBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWMjI0YzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJ6TTE2MCAyODhjMTcuNyAwIDMyIDE0LjMgMzIgMzJWNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjMyMGMwLTE3LjcgMTQuMy0zMiAzMi0zMnpNNjQgNDE2djY0YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjQxNmMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMyeiIvPjwvc3ZnPg=="
            class="fa menu-filter-red"
          />
        </h2>
      </a>
      <a
        href="#"
        onClick$={togglerSideBar$}
        class="sidebar-toggler flex-shrink-0"
      >
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDc4LjMgMTQuMyA2NCAzMiA2NEg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJDMTQuMyAxMjggMCAxMTMuNyAwIDk2ek0wIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMkg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyek00NDggNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnoiLz48L3N2Zz4="
          class="fa menu-filter-red"
        />
      </a>
      <div class="navbar-nav align-items-center ms-auto">
        <div class="nav-item dropdown">
          <a href="#" class="nav-link" data-bs-toggle="dropdown">
            <br />
          </a>
        </div>
      </div>
    </nav>
  );
});
