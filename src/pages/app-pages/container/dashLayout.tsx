import Header from '@/components/Header'

type Props = {
  children: any
}

const DashBoardLayout = ({ children }: Props) => {
  return (
    <section>
      <Header />
      <div className='p-3'>{children}</div>
    </section>
  )
}

export default DashBoardLayout
