import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"




function ProductModel(props) {
  console.log(props)
console.log(props.name)
var scene

  if(props.name==="pod"){
   
    var {scene}  = useGLTF("/models/air_pods.glb")   
  }
  if(props.name==="phone1"){
  
   var {scene}  = useGLTF("/models/barbeador_trimmer.glb")


  }




  if(props.name=="watch"){

   var {scene}  = useGLTF("/models/montana_watch__free_model.glb")   


  }
  if(props.name=="newphone"){

   var {scene}  = useGLTF("/models/apple_iphone_based_mobile_phone.glb")   




  }
  
    if(props.name=="product"){

   var {scene}  = useGLTF("/models/auriculares_b_ose_quiet_comfort_ultra_2models.glb")   




  }

if(props.name=="iphone13"){

   var {scene}  = useGLTF("/models/samsung_phone.glb")   




  }

  let sc
   

  switch(props.name){

case "product":
  sc=15

  case "phone":
  sc=5

case "watch":
    sc=0.1
    
case "iphone13":
      sc=-3.3

case "newphone":
  sc=12
  
case "pod":
    
  sc=0.3

  }
  
  

  return (
    <primitive 
      object={scene} 
     
      scale={sc}
      position={[-1
        ,0,0

       ]}
    />

  )

}




export default function ProductViewer(props) {
  console.log(props)
  return (
    
    <Canvas style={{ height: "400px", width: "100%" }}>
      
      <ambientLight intensity={0.5} />
      
      <directionalLight position={[2,2,5]} intensity={1} />

      <ProductModel  
      height={30}
      width={40}

      {...props}  />

      <OrbitControls
        enableZoom={true}
        enablePan={false}

      />

    </Canvas>
  )
}