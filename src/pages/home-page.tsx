import { CarouselPlugin } from "@/components/carousel";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function HomePage(){
    return(
        <>
        <div className="page" style={{ background:"rgb(240 240 240)", alignItems:"flex-start", justifyContent:"flex-start", display:"flex", flexFlow:"column", height:"fit-content"}}>

<div className="banner" style={{display:"flex", marginTop:"5rem" }}>

    <CarouselPlugin

    item1={<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Large_dusty_black_plastic_pipes_side_view.jpg" style={{height:"100%", width:"100%", objectFit:"cover"}}
    />}

    item2={<img src="https://www.ifanpiping.com/Content/uploads/2023844196/20230626163712925ec055d40b4f50ae6db8bb76768e09.jpg?size=1000x0" style={{height:"100%", width:"100%", objectFit:"cover"}}
    />}

    item3={<img src="https://w0.peakpx.com/wallpaper/1009/618/HD-wallpaper-plumbing-water-pipes.jpg" style={{height:"100%", width:"100%", objectFit:"cover"}}
    />}

    

    item4={<img src="https://www.bathify.ca/cdn/shop/products/pur-3d-image_1200x848.jpg?v=1643250459" style={{height:"100%", width:"100%", objectFit:"cover"}}
    />}

    
    
    />


    <div className="violet" style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"center", flexFlow:"column", gap:"1.5rem"}}>

        <div style={{display:"flex", flexFlow:"column", width:"75%", gap:"2rem"}}>

            <h1 className="banner-text" style={{}}>High quality pipes and fittings</h1>
            <p>We offer a wide variety of <strong> HDPE </strong>, <strong> GRP </strong> and<strong> Fiber Glass </strong> products</p>
            <Link to="/services">
            <button className="button" style={{fontSize:"1rem", width:"8rem", background:"white", color:"black"}}>Browse <ChevronRight width="1rem"/></button>
            </Link>
            

        </div>
        
    </div>

</div>
{/* <div style={{width:"100%", height:"65svh", background:"white", boxShadow:"1px 1px 20px rgba(0 0 0/50%)", display:"flex", justifyContent:"center", alignItems:"center", padding:"2rem"}}>
    
</div> */}
</div>
<div className="page" style={{background:"rgb(220 220 220)"}}></div>
        </>
    )
}