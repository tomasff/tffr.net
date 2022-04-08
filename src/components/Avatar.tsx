import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "../style.css"

const Avatar = () => {

    return (<StaticImage
        className="avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src={`../../static/profile.jpg`}
        width={200}
        height={200}
        quality={95}
        alt="Profile picture"
    />)
}

export default Avatar