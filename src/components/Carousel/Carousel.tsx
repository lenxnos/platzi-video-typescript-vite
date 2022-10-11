import { ReactNode } from 'react'
import './styles.scss'

interface Props {
  children: ReactNode,
}

export function Carousel({ children }: Props) {
  return (
    <section className="carousel">
    <div className="carousel__container">
      {children}
    </div>
  </section>
  )
}