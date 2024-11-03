const blockedHostnames = ["x.com", "instagram.com", "youtube.com", "linkedin.com", ]

const isBlocked = !!blockedHostnames.find(host => {
    return window.location.hostname.includes(host)
})

if (isBlocked) {
    console.log("tried to bloc")
  document.innerText = "This website is blocked";
}