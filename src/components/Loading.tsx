import React from 'react'
import { RotatingLines } from "react-loader-spinner";


export const Loading = () => {
    return (
        <div style={{alignItems: 'center'}}>
        <RotatingLines
          strokeColor="#ffe819"
          strokeWidth="5"
          animationDuration="0.75"
          width="70"
          visible={true}
        />
        </div>
      )
}
