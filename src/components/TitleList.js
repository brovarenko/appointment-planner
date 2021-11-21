import React from "react"
import { Title } from "./Title"
export const TitleList = ({data}) => {

    return (
        <div>
            {data.map((e,i) => {
               return (<div><Title key={i} data={e}/><hr/></div>)
                  
                
               
            })}
        </div>
    )
}