const playPop = () => {
    return new Promise((res, rej) => {
        void new Audio('/pop.mp3').play().catch(() => null).then(() => {
            setTimeout(() => {
                res(0)
            }, 500);
        })
    })
}

export function Click(route: string) {
    playPop().then(() => {
        window.location.href = route;
    })
}

export default playPop;