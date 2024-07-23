// import SitesCompetition from "../views/SitesCompetition.js";

// export default function EventList() {
//   const siteInfos = SitesCompetition();
//   return siteInfos

//   // return SitesCompetition().then(siteInfos => {
//   //   if (!Array.isArray(siteInfos)) {
//   //     console.error('Expected an array of site infos');
//   //     return [];
//   //   }

//   //   return siteInfos.map(siteInfo => ({
//   //     tag: "div",
//   //     attributes: {
//   //       class: "event-item p-2 border rounded-md w-[90%]".split(" "),
//   //     },
//   //     children: [
//   //       {
//   //         tag: "div",
//   //         attributes: {
//   //           class: "flex mb-2 justify-between".split(" "),
//   //         },
//   //         children: [
//   //           {
//   //             tag: "div",
//   //             attributes: {
//   //               class: "event-description mr-2".split(" "),
//   //             },
//   //             children: [
//   //               {
//   //                 tag: "h3",
//   //                 attributes: {
//   //                   class: "mb-3".split(" "),
//   //                 },
//   //                 children: `${siteInfo.title} - ${siteInfo.hour}`,
//   //               },
//   //               {
//   //                 tag: "p",
//   //                 attributes: {
//   //                   class: "text-xs text-gray-400 mb-2".split(" "),
//   //                 },
//   //                 children: siteInfo.location,
//   //               },
//   //               {
//   //                 tag: "p",
//   //                 attributes: {
//   //                   class: "text-xs text-gray-400 mb-2".split(" "),
//   //                 },
//   //                 children: `${siteInfo.latitude}, ${siteInfo.longitude}`,
//   //               },
//   //             ],
//   //           },
//   //           {
//   //             tag: "div",
//   //             attributes: {
//   //               class: "event-img w-[120px] h-full rounded-md overflow-hidden".split(" "),
//   //             },
//   //             children: [
//   //               {
//   //                 tag: "img",
//   //                 attributes: {
//   //                   src: "img/swimming.jpg",
//   //                   alt: "natation",
//   //                   class: "object-center object-cover".split(" "),
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         tag: "p",
//   //         attributes: {
//   //           class: "text-xs text-gray-400 text-right".split(" "),
//   //         },
//   //         children: new Date(siteInfo.starting_date).toLocaleDateString(),
//   //       },
//   //     ],
//   //   }));
//   // });
// }
