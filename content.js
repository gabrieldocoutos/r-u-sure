const blockedHostnames = [
  "x.com",
  "instagram.com",
  "youtube.com",
  "linkedin.com",
];

const isUrlBlocked = !!blockedHostnames.find((host) => {
  return window.location.hostname.includes(host);
});

const isUrlAllowed = !!new URLSearchParams(window.location.search).get(
  "rusure"
);

if (isUrlBlocked) {
  if (isUrlAllowed) {
    console.log("URL is allowed");
  } else {
    window.location.href = `https://gabrieldocoutos.github.io/r-u-sure-website/?callback=${window.location.href}`;
  }
}
