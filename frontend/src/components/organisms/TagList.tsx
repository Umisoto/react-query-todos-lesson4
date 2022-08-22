import React, { FC, memo } from 'react'
import TagItem from '../molecules/TagItem';
import { useQueryTags } from '../../hooks/useQueryTags';

const TagList: FC = memo(() => {
    const {data, status}=useQueryTags()

    if(status==="loading") return <div>Loading...</div>
    if(status==="error") return <div>Error</div>

  return (
    <>
    <ul>
    {
          data?.map(tag=>(
              <div key={tag.id} className="mb-2" >
                <TagItem tag={tag} />
              </div>
          ))
    }
    </ul>
    </>
  )
})

export default TagList
