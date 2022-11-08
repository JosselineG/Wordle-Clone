import React from 'react'

function Color(props) {

    const [boxColor, setboxColor] = useState(
        {Input:[
            {id:'1',color:'grey' },
            {id:'2',color:'green'},
            {id:'3',color:'yellow'}
        ]})

  return (
    <div>Color</div>
  )
}

export default Color