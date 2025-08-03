const SidebarLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex theme2 font-serif bg-gray-900 text-white">
    <aside className="w-1/5 min-h-screen p-4 bg-gray-800 shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)] mr-px">
    <p>Our Offers</p>
    <p>Get Subscriptions</p>
    </aside>
    <main className="pl-[6px] p-6 w-4/5">{children}</main>
  </div>
)
export default SidebarLayout
