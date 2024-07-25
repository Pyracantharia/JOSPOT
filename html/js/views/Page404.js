import Component from "../core/Component.js";

class Page404 extends Component {
  render() {
    return {
      tag: 'div',
      attributes: {
        class: "w-screen h-screen flex items-center justify-center bg-gray-100".split(' ')
      },
      children: [
        {
          tag: 'div',
          attributes: {
            class: "bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center".split(' ')
          },
          children: [
            {
              tag: 'img',
              attributes: {
                src: "img/jo.png",
                class: "mx-auto mb-8 w-1/4 h-auto".split(' ')
              }
            },
            {
              tag: 'div',
              attributes: {
                class: "mb-8".split(' ')
              },
              children: [
                {
                  tag: "span",
                  attributes: {
                    class: "text-5xl text-gray-800 mb-12".split(" ")
                  },
                  children: [
                    {
                      tag: "span",
                      attributes: {},
                      children: "404"
                    }
                  ]
                }
              ]
            },
            {
              tag: 'div',
              attributes: {
                class: "text-4xl text-gray-800 mb-12".split(' ')
              },
              children: [
                {
                  tag: 'span',
                  attributes: {},
                  children: "Oops! The page you're looking for doesn't exist."
                }
              ]
            },
            {
              tag: 'a',
              attributes: {
                class: "text-2xl text-blue-500 hover:underline".split(' '),
                href: "/"
              },
              children: [
                {
                  tag: 'span',
                  attributes: {},
                  children: "Go back to Homepage"
                }
              ]
            }
          ]
        }
      ]
    };
  }
}

export default Page404;
