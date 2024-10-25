
import Image from "next/image"
import Profile from "../public/pexels-minan1398-675920.jpg"
import myImage from "../public/code.jpg"

export default function Projects() {
    return (<>
        <div>
           <div className="container"> <h2 className="feature">Featured works</h2>
            <Image  src={myImage} alt="girl image"  height={200} width={250} />
            <h1 className="contained-elementd">DESIGNING DASHBOARDS</h1>
            <h2 className="round">2020</h2> <p className="round-1">| &nbsp; &nbsp; Dashboard</p>
            <p className="contained-elementd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis ut, voluptas, neque eos corporis aliquid quis consectetur mollitia accusantium at magni nam? Est amet, magnam blanditiis dolor iure facilis.</p></div></div>
            
            <div><div className="container">
            <Image
      src={Profile}
      height={200} width={250}
      alt="Picture of the author"
    />
            <h1 className="contained-elementd" >DESIGNING DASHBOARDS</h1>
            <h2 className="round">2020</h2><p className="round-1">| &nbsp;  Dashboard</p>
            <p className="contained-elementd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis ut, voluptas, neque eos corporis aliquid quis consectetur mollitia accusantium at magni nam? Est amet, magnam blanditiis dolor iure facilis.</p></div></div>
            <div><div className="container">
            <Image src={myImage}alt="girl image"  height={200} width={250} />
            <h1 className="contained-elementd">DESIGNING DASHBOARDS</h1>
            <h2 className="round">2020</h2><p className="round-1"> | &nbsp; &nbsp; Dashboard</p>
            <p className="contained-elementd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis ut, voluptas, neque eos corporis aliquid quis consectetur mollitia accusantium at magni nam? Est amet, magnam blanditiis dolor iure facilis.</p></div></div>
            
            
            </>
    )
}