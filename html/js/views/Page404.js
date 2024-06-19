export default function Page404(){
    return {
        tag: 'div',
        attributes: {
            class: "w-screen h-screen relative".split(' ')
        },
        children: [
            {
                tag: 'div',
                attributes: {
                    class: "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]".split(' ')
                },
                children: [
                    {
                        tag: 'h1',
                        attributes: {
                            class: "text-5xl text-slate-500".split(' ')
                        },
                        children: "ERROR 404"
                    },
                ]
            },
        ]
    }
}