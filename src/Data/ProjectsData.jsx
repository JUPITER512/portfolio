import {project_cards} from '@data/Data.json'
export const cards=project_cards?.map((item)=>{
  return (
    {
      description:item?.description,
      title:item?.title,
      src:item?.src,
      ctaText:item?.ctaText,
      ctaLink:item?.ctaLink,
      content:()=>{
        return(
          (<div>{item?.content}</div>)
        )
      }
    }
  )
})

  