import React from 'react'

const LogOut = ({onOut}) => <button class="btn btn-outline btn-secondary absolute self-end mr-12 " onClick={()=>onOut()} >Cerrar Sesión</button> 

export default LogOut;