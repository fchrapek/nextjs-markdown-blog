export default function NoiseFilter() {
  return (
    <svg className='background-gradient' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='2.8'
          numOctaves='1'
          stitchTiles='stitch' />
      </filter>

      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  )
}
