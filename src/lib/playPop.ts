const sounds = ["pop", "news", "eshop", "enter_back"]

const playPop = () => {
    return new Promise((res, rej) => {
        const sound = sounds[Math.floor(Math.random() * sounds.length)]
        void new Audio(`/pop.mp3`).play().catch(() => null).then(() => {
            setTimeout(() => {
                res(0)
            }, 600);
        })
    })
}

export function Click(route: string) {
    playPop().then(() => {
        window.location.href = route;
    })
}

export default playPop;