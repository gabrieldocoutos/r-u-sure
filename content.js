const channel = new BroadcastChannel('my_bus');

channel.onmessage = function(e) {
    console.log('Received', e.data);
};


const blockedHostnames = ["x.com", "instagram.com", "youtube.com", "linkedin.com", ]

const isUrlBlocked = !!blockedHostnames.find(host => {
    return window.location.hostname.includes(host)
})


if (isUrlBlocked) { 

    

    if (isFromCallback) {
        window.localStorage.removeItem(`@r-u-sure#${window.location.hostname}`)
    } else {
        window.location.href = `https://gabrieldocoutos.github.io/r-u-sure-website/?callback=${window.location.href}`
    }
    
}