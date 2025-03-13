import pkg from "../package.json";

const manifest = {
  homepage_url: "https://github.com/null-dev/firefox-profile-switcher",
  permissions: [
    "storage",
    "nativeMessaging",
    "tabs"
  ],
  background: {
    scripts: ["src/entries/background/main.ts"],
    persistent: true,
  },
  browser_action: {
    default_icon: "icons/icon.svg",
    default_title: "Switch profile",
    default_popup: "src/entries/popup/index.html",
  },
  icons: {
    48: "icons/icon.svg",
    96: "icons/icon.svg",
  },
  commands: {
    _execute_browser_action: {
      suggested_key: { default: "Ctrl+Alt+U" },
      description: "Open Profile Switcher Addon"
    }
  },
  browser_specific_settings: {
    gecko: {
      id: "profile-switcher-ff@nd.ax"
    }
  },
  web_accessible_resources: [
    "src/entries/manager/index.html",
    "src/entries/setup/index.html",
    "src/entries/update/index.html",
    "src/entries/winfocus/index.html",
  ],
};

export function getManifest(): chrome.runtime.ManifestV2 {
  return {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 2,
    ...manifest,
  };
}