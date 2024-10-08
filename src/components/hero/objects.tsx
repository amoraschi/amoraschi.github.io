import { TouchEvent, useRef, useState } from 'react'
import { Mesh, Color } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { Center, OrbitControls, Stars, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const url = '/fonts/regular.json'
const size = 0.4
const height = 0.1
const cyan = new Color(0x0fffff)
const white = new Color(0xffffff)

export default function Objects () {
  const [hovered, setHovered] = useState(false)
  const textRef = useRef<Mesh>()

  useFrame(({ clock }) => {
    if (textRef.current == null) return

    const elapsedTime = clock.getElapsedTime()
    textRef.current.rotation.x = Math.sin(elapsedTime / 2) / 4
    textRef.current.rotation.y = Math.cos(elapsedTime / 2) / 4
  })

  const { color } = useSpring({
    color: hovered ? cyan.toArray() : white.toArray(),
    config: { duration: 200 }
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
        <animated.mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Text3D
            position={[0, (size / 2) * 1.75, 0]}
            font={url}
            letterSpacing={-0.1}
            height={height}
            castShadow
            receiveShadow
          >
            Angelo Sho Moraschi
            <animated.meshStandardMaterial
              // @ts-expect-error
              color={color}
            />
          </Text3D>
          <Text3D
            position={[0, -(size / 2) * 1.75, 0]}
            font={url}
            letterSpacing={-0.05}
            height={height}
            size={size}
            castShadow
            receiveShadow
          >
            Software Engineering Student
            <animated.meshStandardMaterial
              // @ts-expect-error
              color={color}
            />
          </Text3D>
        </animated.mesh>
      </Center>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  )
}
