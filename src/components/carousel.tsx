import Autoplay from "embla-carousel-autoplay"
import * as React from "react"


import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

interface Props{
    item1:any
    item2:any
    item3:any
    item4:any
    item5?:any
}

export function CarouselPlugin(props:Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
    
      plugins={[plugin.current]}
      className="carousel"
      style={{width:"100%", padding:"0", margin:"0", objectFit:"cover", background:"black"}}
      onMouseLeave={plugin.current.reset}
      
    >
      <CarouselContent style={{width:"", height:"25rem"}}>
        
          <CarouselItem>
            <div style={{objectFit:"cover", height:"100%"}}>
              {props.item1}
            </div>
          </CarouselItem>

          <CarouselItem>
            <div style={{objectFit:"cover", height:"100%"}}>
              {props.item2}
            </div>
          </CarouselItem>

          <CarouselItem>
            <div style={{objectFit:"cover", height:"100%"}}>
              {props.item3}
            </div>
          </CarouselItem>

          <CarouselItem>
            <div style={{objectFit:"cover", height:"100%"}}>
              {props.item4}
            </div>
          </CarouselItem>

          {/* <CarouselItem>
            <div style={{objectFit:"cover", height:"100%"}}>
              {props.item5}
            </div>
          </CarouselItem> */}
        
      </CarouselContent>
    
    </Carousel>
  )
}
