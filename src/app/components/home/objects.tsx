import { Center, OrbitControls, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh } from 'three'

export default function Objects () {
  const url = '/fonts/regular.json'

  const [color, setColor] = useState(0xffffff)
  const textRef = useRef<Mesh>()

  useFrame(({ clock }) => {
    if (textRef.current == null) return

    const elapsedTime = clock.getElapsedTime()
    textRef.current.rotation.x = Math.sin(elapsedTime / 2) / 2
    textRef.current.rotation.y = Math.cos(elapsedTime / 2) / 2
  })

  return (
    <>
      <directionalLight
        position={[0, 0, 5]}
        intensity={3}
        castShadow
      />
      <Center
        // @ts-expect-error
        ref={textRef}
      >
        <Text3D
          font={url}
          letterSpacing={-0.1}
          castShadow
          receiveShadow
          // onPointerEnter={() => setColor(0x0fffff)}
          // onPointerLeave={() => setColor(0xffffff)}
        >
          Angelo Moraschi
          <meshStandardMaterial
            color={color}
          />
        </Text3D>
      </Center>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  )
}
