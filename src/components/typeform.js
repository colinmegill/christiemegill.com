import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"
// import * as typeformEmbed from "@typeform/embed"

const Typeform = () => {
  return (
    <ReactTypeformEmbed
      style={{
        marginTop: 300,
      }}
      opacity={"70"}
      popup={false}
      mode={"drawer_left"}
      url="https://christiemegill.typeform.com/to/v1gLNc"
    />
  )
}

// class Typeform extends React.Component {
//   render() {
//     /* typeform code */
//
//     var qs,
//       js,
//       q,
//       s,
//       d = document,
//       gi = d.getElementById,
//       ce = d.createElement,
//       gt = d.getElementsByTagName,
//       id = "typef_orm",
//       b = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/"
//     if (!gi.call(d, id)) {
//       js = ce.call(d, "script")
//       js.id = id
//       js.src = b + "widget.js"
//       q = gt.call(d, "script")[0]
//       q.parentNode.insertBefore(js, q)
//     }
//     return (
//       <div
//         className="typeform-widget"
//         data-url="https://christiemegill.typeform.com/to/v1gLNc"
//         data-text="Contact Form"
//         style={{ width: "100%", height: 600 }}
//       ></div>
//     )
//   }
// }

export default Typeform
