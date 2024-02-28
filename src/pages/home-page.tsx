import { CarouselPlugin } from "@/components/carousel";
import { ChevronRight } from "lucide-react";


export default function HomePage(){
    return(
        <>
        <div className="page" style={{ background:"rgb(240 240 240)", alignItems:"flex-start", justifyContent:"flex-start", display:"flex", flexFlow:"column"}}>

<div className="banner" style={{display:"flex", marginTop:"5rem" }}>

    <CarouselPlugin

    item1={<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Large_dusty_black_plastic_pipes_side_view.jpg" style={{height:"100%", width:"100%", objectFit:"cover"}}
    />}

    item2={<img src="https://w0.peakpx.com/wallpaper/1009/618/HD-wallpaper-plumbing-water-pipes.jpg" style={{height:"100%", width:"100%", objectFit:"cover"}}
    />}
    
    />


    <div className="violet" style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"center", flexFlow:"column", gap:"1.5rem"}}>

        <div style={{display:"flex", flexFlow:"column", width:"80%", gap:"2rem"}}>

            <h1 className="banner-text" style={{}}>High quality pipes and fittings</h1>
            <p>We offer all varieties of <strong> HDPE </strong> Fittings and Pipes</p>
            <button className="button" style={{fontSize:"1rem", width:"8rem", background:"white", color:"black"}}>Browse <ChevronRight width="1rem"/></button>

        </div>
        
    </div>

</div>
{/* <div style={{width:"100%", height:"65svh", background:"linear-gradient(90deg, midnightblue, mediumslateblue)", boxShadow:"1px 1px 20px rgba(0 0 0/100%)"}}></div> */}
</div>
<div className="page" style={{background:"black"}}></div>
        </>
    )
}