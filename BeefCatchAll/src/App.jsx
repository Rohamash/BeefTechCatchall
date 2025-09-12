import React from 'react'

const BRAND = {
  // Move your image into /public and reference it at "/btcatchall-logo.png"
  logoUrl: '/btcatchall-logo.png',
  logoLink: 'https://btcatchall.ai',
}

const COLUMN_GROUPS = [
  {
    title: 'Column 1',
    categories: [
      { key: 'drones', label: 'Drones' },
      { key: 'gps', label: 'GPS/Tags' },
      { key: 'virtual-fencing', label: 'Virtual fencing' },
    ],
  },
  {
    title: 'Column 2',
    categories: [
      { key: 'equipment', label: 'Equipment' },
      { key: 'animal-health', label: 'Animal health' },
      { key: 'fintech', label: 'Fintech' },
    ],
  },
  {
    title: 'Column 3',
    categories: [
      { key: 'blockchain', label: 'Blockchain' },
      { key: 'management-software', label: 'Management Software' },
      { key: 'genetics', label: 'Genetics' },
    ],
  },
]

const SAMPLE_VENDORS = {
  drones: [
    { name: 'SkyPasture', url: 'https://skypasture.com' },
    { name: 'AeroAgro', url: 'https://aeroagro.com' },
    { name: 'DroneCattle', url: 'https://dronecattle.com' },
  ],
  gps: [
    { name: '701X', url: 'https://701x.com' },
    { name: 'GPS Ranch Track', url: 'https://gpsranchtrack.com' },
    { name: 'CattleTagPro', url: 'https://cattletagpro.com' },
    { name: 'AgriGPS Solutions', url: 'https://agrigpssolutions.com' },
  ],
  'virtual-fencing': [
    { name: 'Vence', url: 'https://vence.io' },
    { name: 'NoFence', url: 'https://nofence.com' },
    { name: 'eShepherd', url: 'https://eshepherd.com' },
  ],
  equipment: [
    { name: 'TankWatch', url: 'https://tankwatch.com' },
    { name: 'RanchEquipCo', url: 'https://ranchequipco.com' },
    { name: 'BeefTech Machinery', url: 'https://beeftechmachinery.com' },
  ],
  'animal-health': [
    { name: 'HerdVitals', url: 'https://herdvitals.com' },
    { name: 'CattleCare Health', url: 'https://cattlecarehealth.com' },
    { name: 'VetAgro Solutions', url: 'https://vetagrosolutions.com' },
  ],
  fintech: [
    { name: 'CattleLedger', url: 'https://cattleledger.com' },
    { name: 'AgriFinance Pro', url: 'https://agrifinancepro.com' },
    { name: 'RanchPay Systems', url: 'https://ranchpay.com' },
  ],
  blockchain: [
    { name: 'e-Livestock', url: 'https://e-livestock.com', bannerUrl: '/e-livestock-banner.png' },
    { name: 'AgriBlockChain', url: 'https://agriblockchain.com' },
    { name: 'BeefChain', url: 'https://beefchain.com' },
  ],
  'management-software': [
    { name: 'AgriManage Pro', url: 'https://agrimanagepro.com' },
    { name: 'RanchManager360', url: 'https://ranchmanager360.com' },
    { name: 'BeefOps', url: 'https://beefops.com' },
    { name: 'RanchVision', url: 'https://ranchvision.com' },
  ],
  genetics: [
    { name: 'GeneticBeef Solutions', url: 'https://geneticbeef.com' },
    { name: 'CRISPR Cattle Co', url: 'https://crisprcattleco.com' },
    { name: 'EliteBeef Genetics', url: 'https://elitebeefgenetics.com' },
    { name: 'ABS Global', url: 'https://www.absglobal.com' },
    { name: 'Select Sires', url: 'https://www.selectsires.com' },
  ],
  'bt-advisors': [
    { name: 'RanchTech Consulting', url: 'https://ranchtechconsulting.com' },
    { name: 'AgriTech Advisors Group', url: 'https://agritechadvisors.com' },
    { name: 'SmartRanch Solutions', url: 'https://smartranchsolutions.com' },
  ],
  'bt-think-tank': [
    { name: 'Texas A&M University', url: 'https://animalscience.tamu.edu/research/beef-cattle/' },
    { name: 'University of Nebraska–Lincoln', url: 'https://beef.unl.edu/research/' },
    { name: 'Oklahoma State University', url: 'https://extension.okstate.edu/programs/beef-extension/beef-cattle-research-updates/' },
    { name: 'Colorado State University', url: 'https://agsci.colostate.edu/ansci/research/beef-management-systems/' },
    { name: 'Iowa State University', url: 'https://www.cals.iastate.edu/' },
    { name: 'University of Florida', url: 'https://ifas.ufl.edu/' },
    { name: 'University of Georgia', url: 'https://animaldairy.uga.edu/' },
    { name: 'Texas Tech University', url: 'https://www.ttu.edu/' },
    { name: 'South Dakota State University', url: 'https://www.sdstate.edu/' },
    { name: 'Montana State University', url: 'https://www.montana.edu/' },
    { name: 'UC Davis', url: 'https://www.ucdavis.edu/' },
    { name: 'Kansas State University', url: 'https://www.k-state.edu/' },
    { name: 'University of Kentucky', url: 'https://www.uky.edu/' },
    { name: 'North Carolina State University', url: 'https://www.ncsu.edu/' },
    { name: 'Mississippi State University', url: 'https://www.msstate.edu/' },
    { name: 'Louisiana State University', url: 'https://www.lsu.edu/' },
    { name: 'University of Missouri', url: 'https://missouri.edu/' },
    { name: 'Purdue University', url: 'https://purdue.edu/' },
    { name: 'University of Illinois Urbana-Champaign', url: 'https://illinois.edu/' },
    { name: 'Michigan State University', url: 'https://msu.edu/' },
  ],
}

const YOUTUBE_OF_WEEK = {
  title:
    "Allan Savory: How to green the world's deserts and reverse climate change (TED)",
  youtubeId: 'vpTHi7O66pI',
}

function getYouTubeId() {
  try {
    const params = new URLSearchParams(window.location.search)
    const fromQuery = params.get('yt')
    if (fromQuery) {
      localStorage.setItem('ytPick', fromQuery)
      return fromQuery
    }
    const saved = localStorage.getItem('ytPick')
    return saved || YOUTUBE_OF_WEEK.youtubeId
  } catch (e) {
    return YOUTUBE_OF_WEEK.youtubeId
  }
}

export default function BTCatchallCraigslistAll() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href={BRAND.logoLink} className="flex items-center gap-3">
            <img src={BRAND.logoUrl} alt="BTCatchall.ai" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold">BTCatchall.ai</h1>
              <p className="text-xs text-gray-600">Beef Tech Vendors and Research - clean and fast</p>
            </div>
          </a>
          <nav className="flex flex-wrap gap-3 text-sm">
            <a href="#bt-advisors" className="px-3 py-1 rounded-full border bg-white hover:bg-gray-50">BT Advisors</a>
            <a href="#bt-think-tank" className="px-3 py-1 rounded-full border bg-white hover:bg-gray-50">BT Think Tank</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Vendor Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMN_GROUPS.map((group) => (
            <div key={group.title} className="space-y-8">
              {group.categories.map((c) => (
                <section id={`cat-${c.key}`} key={c.key}>
                  <h2 className="text-lg font-semibold mb-2">{c.label}</h2>
                  {c.key === 'blockchain' && SAMPLE_VENDORS.blockchain[0]?.bannerUrl && (
                    <div className="mb-4">
                      <a href={SAMPLE_VENDORS.blockchain[0].url} target="_blank" rel="noopener noreferrer">
                        <img
                          src={SAMPLE_VENDORS.blockchain[0].bannerUrl}
                          alt="e-Livestock banner"
                          className="w-full max-w-2xl border rounded"
                        />
                      </a>
                    </div>
                  )}
                  <ul className="space-y-2 text-[15px]">
                    {(SAMPLE_VENDORS[c.key] || []).map((v) => (
                      <li key={`${c.key}-${v.name}`}>
                        <div className="flex flex-col">
                          <a
                            href={v.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-700 hover:underline"
                          >
                            {v.name}
                          </a>
                          <span className="text-gray-600 break-all">{v.url}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ))}
        </div>

        {/* YouTube Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-4 border rounded-md overflow-hidden">
            <div className="p-3 text-sm font-semibold border-b">YouTube of the Week</div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeId()}`}
                title={YOUTUBE_OF_WEEK.title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-3 text-sm text-gray-700">{YOUTUBE_OF_WEEK.title}</div>
          </div>
        </aside>
      </main>

      {/* BT Advisors */}
      <section id="bt-advisors" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-lg font-semibold mb-2">BT Advisors</h2>
        <p className="text-sm text-gray-600 mb-3">Tech advisors to help ranchers up their tech game.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[15px]">
          {(SAMPLE_VENDORS['bt-advisors'] || []).map((item) => (
            <li key={item.url} className="py-2">
              <div className="flex flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {item.name}
                </a>
                <span className="text-gray-600 break-all">{item.url}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* BT Think Tank */}
      <section id="bt-think-tank" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-lg font-semibold mb-2">BT Think Tank</h2>
        <p className="text-sm text-gray-600 mb-3">Curated links from the top state land‑grant universities and institutions.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[15px]">
          {(SAMPLE_VENDORS['bt-think-tank'] || []).map((item) => (
            <li key={item.url} className="py-2">
              <div className="flex flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {item.name}
                </a>
                <span className="text-gray-600 break-all">{item.url}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
