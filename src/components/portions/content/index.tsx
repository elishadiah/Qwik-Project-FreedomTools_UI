import { component$, type PropFunction } from "@builder.io/qwik";
import Navbar from "./navbar";

interface Props {
  isOpen: boolean;
  wifiOpen: boolean;  
  deviceOpen: boolean;
  softOpen: boolean;
  togglerSideBar$: PropFunction<() => void>;
}

export default component$<Props>(({ isOpen,wifiOpen, deviceOpen, softOpen, togglerSideBar$ }) => {
  return (
    <div class={`content ${isOpen && "open"}`}>
      <Navbar togglerSideBar$={togglerSideBar$} />
      <div id="submenu_dns" class={`nested px-4 ${wifiOpen && 'active'}`}>
        <h1 class="text-center mb-4">Wifi Config</h1>
        <form id="dnsConfigForm" class="needs-validation"></form>
        Here is Wifi Configuration
        <p id="status" class="text-center mt-3"></p>
      </div>

      <div id="submenu_device" class={`nested px-4 ${deviceOpen && 'active'}`}>
        <h1 class="text-center mb-4">Device Config</h1>
        <form id="modeConfigForm" class="needs-validation">
          <div class="form-group">
            <label for="deviceName">Device Name:</label>
            <input type="text" class="form-control" id="deviceName" required />
            <div class="invalid-feedback">Please enter the Device Name.</div>
          </div>

          <div class="form-group">
            <label for="bootSequence">Boot Sequence:</label>
            <select class="form-control" id="bootSequence">
              <option value="BOOT_SEQUENCE_UNKNOWN">Unknown</option>
              <option value="BOOT_SEQUENCE_AP_ONLY">AP Only</option>
              <option value="BOOT_SEQUENCE_STATION_SYNC_AP">
                Station Sync AP
              </option>
              <option value="BOOT_SEQUENCE_STATION_FALLBACK_AP">
                Station Fallback AP
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="userName">User Name:</label>
            <input type="text" class="form-control" id="userName" />
          </div>

          <div class="form-group">
            <label for="password_hash">Password Hash:</label>
            <input type="password" class="form-control" id="password_hash" />
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="enable_mdns" />
            <label class="form-check-label" for="enable_mdns">
              Hidden
            </label>
          </div>

          <h4 class="mb-3">mDNS Configuration</h4>
          <div class="form-group">
            <label for="instance_name">Instance Name:</label>
            <input type="text" class="form-control" id="instance_name" />
          </div>

          <div class="form-check">
            <label for="advertise_http">Advertise HTTP:</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="advertise_http"
            />
          </div>

          <div class="form-check">
            <label for="advertise_https">Advertise HTTPS:</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="advertise_https"
            />
          </div>

          <hr />

          <div class="form-check">
            <label for="enable_esp_now">Enable ESP Now</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="enable_esp_now"
            />
          </div>

          <div class="form-check">
            <label for="enable_websocket">Enable WebSocket:</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="enable_websocket"
            />
          </div>

          <div class="form-check">
            <label for="enable_api_server">Enable API Server:</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="enable_api_server"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Save Configuration
          </button>
        </form>
        <p id="status" class="text-center mt-3"></p>
      </div>

      <div id="submenu_soft" class={`nested px-4 ${softOpen && 'active'}`}>
        <h1 class="text-center mb-4">SoftAP Config</h1>
        <form id="softAPConfigForm" class="needs-validation">
          <div class="form-group">
            <label for="softAPSSID">SSID:</label>
            <input type="text" class="form-control" id="softAPSSID" required />
            <div class="invalid-feedback">
              Please enter the SSID for SoftAP.
            </div>
          </div>

          <div class="form-group">
            <label for="softAPPassword">Password:</label>
            <input type="password" class="form-control" id="softAPPassword" />
          </div>

          <div class="form-group">
            <label for="softAPPSK">PSK:</label>
            <input type="text" class="form-control" id="softAPPSK" />
          </div>

          <div class="form-group">
            <label for="softAPChannel">Channel:</label>
            <input
              type="number"
              class="form-control"
              id="softAPChannel"
              min="1"
              max="13"
            />
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="softAPHidden" />
            <label class="form-check-label" for="softAPHidden">
              Hidden
            </label>
          </div>

          <div class="form-group">
            <label for="softAPMaxConnections">Max Connections:</label>
            <input
              type="number"
              class="form-control"
              id="softAPMaxConnections"
              min="1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Save Configuration
          </button>
        </form>
        <p id="status" class="text-center mt-3"></p>
      </div>
    </div>
  );
});
