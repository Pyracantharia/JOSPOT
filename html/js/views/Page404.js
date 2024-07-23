import Component from "../core/Component.js";

class Page404 extends Component {
  render() {
    return {
      tag: 'div',
      props: {
        class: "w-screen h-screen relative".split(' ')
      },
      children: [
        {
          tag: 'div',
          props: {
            class: "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]".split(' ')
          },
          children: [
            {
              tag: 'h1',
              props: {
                class: "text-5xl text-slate-500".split(' ')
              },
              children: "ERROR 404"
            }
          ]
        }
      ]
    };
  }
}

export default Page404;
