const GridLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-gradient-to-r from-yellow-200 to-pink-200 font-pacifico theme3">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
)
export default GridLayout
